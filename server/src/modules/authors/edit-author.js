const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const editAuthor = async ({ id, ...changes }) => {
  const existing = await Author.find({ _id: id, is_deleted: false });
  if (!existing) throw new NotFoundError("Author not found");

  const updated = Author.findByIdAndUpdate(id, { ...changes });
  return updated;
};
module.exports = editAuthor;
