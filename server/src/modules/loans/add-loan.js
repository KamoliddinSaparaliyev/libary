const { NotFoundError, ConflictError } = require("../../shared/errors");
const Book = require("../books/Book");
const Borrower = require("../borrowers/Borrower");
const Loan = require("./Loan");
const isDateWithinTwoMonths = require("./checkLoanDate");

//
const addLoan = async ({ book, due_date, borrower, admin }) => {
  //Kitobni tekshirish
  const exsitingBook = await Book.findById(book);
  if (!exsitingBook) throw new NotFoundError("Book not found");

  //Ijarachini tekshirish
  const exsitingBorrower = await Borrower.findById(borrower);
  if (!exsitingBorrower) throw new NotFoundError("Borrower not found");

  //Ijara vaqti otib ketgan kitobni tekirish
  const exsitingBorrowerLoan = await Loan.find({
    borrower,
    status: "overdue",
  });
  if (exsitingBorrowerLoan.length > 0)
    throw new ConflictError(
      "Muddati tugagan kitobingiz bor. Iltimos, boshqasini ijaraga olishdan oldin kitobni qaytarib bering"
    );

  //Ijara vaqtida kitoxonni ijaralar soni
  const exsitingBorrowerLoanPending = await Loan.find({
    borrower,
    status: "pending",
  });
  if (exsitingBorrowerLoanPending.length >= 10)
    throw new ConflictError(
      "Muddati tugallanmagan kitob bor. 10 tadan ortiq kitob ijaraga olaolmaysiz. Iltimos, boshqasini ijaraga olishdan oldin kitobni qaytarib bering"
    );
  if (!isDateWithinTwoMonths(due_date))
    throw new ConflictError("Ijaraga 2 oydan kam vaqt beriladi");
  //Kutbxonadagi kitoblar sonidan ayrish
  await Book.findByIdAndUpdate(exsitingBook._id, {
    copies: --exsitingBook.copies,
  });

  const result = await Loan.create({
    book,
    out_date: Date.now(),
    due_date,
    borrower,
    admin,
  });

  return result;
};

module.exports = addLoan;
