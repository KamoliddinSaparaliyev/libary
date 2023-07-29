const { NotFoundError } = require("../../shared/errors");
const Loan = require("./Loan");

const showLoan = async ({ id }) => {
  const loan = await Loan.findById(id);

  if (!loan) throw new NotFoundError("Loan not found");

  return loan;
};

module.exports = showLoan;
