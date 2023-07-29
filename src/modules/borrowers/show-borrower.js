const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

const showBorrower = async ({ id }) => {
  const borrower = await Borrower.findById(id);

  if (!borrower) throw new NotFoundError("Borrower not found");

  return borrower;
};

module.exports = showBorrower;
