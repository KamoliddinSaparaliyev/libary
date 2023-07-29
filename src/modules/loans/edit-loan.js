const { NotFoundError } = require("../../shared/errors");
const Loan = require("./Loan");

exports.editLoan = async ({ id, ...changes }) => {
  const existing = await Loan.findById(id);
  if (!existing) throw new NotFoundError("Loan not found");

  const updated = Loan.findByIdAndUpdate(id, { ...changes });
  return updated;
};
