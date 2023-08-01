const { NotFoundError } = require("../../shared/errors");
const Book = require("../books/Book");
const Loan = require("./Loan");

const editLoan = async ({ id }) => {
  const existing = await Loan.find({ _id: id, is_deleted: false });
  if (!existing) throw new NotFoundError("Loan not found");

  //Kitobni qo'shish o'z vaqtida olib kelish soniga qo'shib qo'yiladi
  await Book.findByIdAndUpdate(existing.book, { copies: ++copies });
  const updated = Loan.findByIdAndUpdate(id, { status: "completed" });
  return updated;
};

module.exports = editLoan;
