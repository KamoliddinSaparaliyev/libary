const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

exports.editAuthor = async ({ id, ...changes }) => {
  const existing = await Author.findById(id);
  if (!existing) throw new NotFoundError("Author not found");

  const updated = Author.findByIdAndUpdate(id, { ...changes });
  return updated;
};
