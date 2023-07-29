const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

exports.removeAuthor = async ({ id }) => {
  const existing = await Author.findById(id);

  if (!existing) throw new NotFoundError("Author not found");

  return await Author.findByIdAndUpdate(id, { is_deleted: true });
};
