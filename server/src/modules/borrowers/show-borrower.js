const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

const showBorrower = async ({ id }) => {
  const borrower = await Borrower.findOne({ _id: id, is_deleted: false });

  if (!borrower) throw new NotFoundError("Borrower not found");

  return borrower;
};

module.exports = showBorrower;
