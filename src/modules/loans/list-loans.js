const Loan = require("./Loan");

const listLoans = async ({ q, page, sort, filters }) => {
  const { limit = 10, offset = 0 } = page || {};
  const { by = "out_date", order = "DESC" } = sort || {};
  const { admin, borrower, book } = filters || {};
  const filter = {};
  if (q) {
    filter.name = { $regex: q, $options: "i" };
  }
  if (admin) {
    filter.admin = admin;
  }
  if (borrower) {
    filter.borrower = borrower;
  }
  if (q) {
    filter.book = book;
  }

  const total = await Loan.countDocuments(filter);
  const loans = await Loan.find(filter)
    .sort({ [by]: order === "DESC" ? -1 : 1 })
    .skip(offset)
    .limit(limit);

  return { total, limit, offset, loans };
};

module.exports = listLoans;
