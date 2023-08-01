const { NotFoundError, BadRequestError } = require("../../shared/errors");
const Admin = require("./Admin");
const changePassword = require("./change-password");

const editAdmin = async ({ id, changes }) => {
  const existing = await Admin.findOne({ _id: id, is_deleted: false });
  if (!existing) throw new NotFoundError("Admin not found");

  const existingUsername = await Admin.findOne({ username: changes.username });
  if (existingUsername) throw new BadRequestError("Username already exsist");

  let hashPassword = {};

  if (changes.password)
    hashPassword.password = await changePassword(
      existing.password,
      changes.password
    );

  const updated = Admin.findByIdAndUpdate(
    id,
    { ...changes, ...hashPassword },
    { new: true }
  );
  return updated;
};

module.exports = editAdmin;
