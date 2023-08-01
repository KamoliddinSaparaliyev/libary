const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

const removeAdmin = async ({ id }) => {
  const existing = await Admin.findOne({
    _id: id,
    is_deleted: false,
    is_super: false,
  });
  if (!existing) throw new NotFoundError("Admin not found");

  return Admin.findByIdAndUpdate(id, { is_deleted: true });
};
module.exports = removeAdmin;
