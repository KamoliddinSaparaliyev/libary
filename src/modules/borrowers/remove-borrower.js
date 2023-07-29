const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

exports.removeBorrower = async ({ id }) => {
  const existing = await Borrower.findById(id);

  if (!existing) throw new NotFoundError("Borrower not found");

  return await Borrower.findByIdAndUpdate(id, { is_deleted: true });
};
