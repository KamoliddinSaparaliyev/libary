const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

const editBorrower = async ({ id, changes }) => {
  const existing = await Borrower.findOne({ _id: id, is_deleted: false });
  console.log(existing);
  if (!existing) throw new NotFoundError("Borrower not found");

  const updated = Borrower.findByIdAndUpdate(id, { ...changes }, { new: true });

  return updated;
};
module.exports = editBorrower;
