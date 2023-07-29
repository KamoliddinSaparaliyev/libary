const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

exports.editBorrower = async ({ id, ...changes }) => {
  const existing = await Borrower.findById(id);
  if (!existing) throw new NotFoundError("Borrower not found");

  const updated = Borrower.findByIdAndUpdate(id, { ...changes });
  return updated;
};
