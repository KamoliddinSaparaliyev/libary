const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

exports.removeAdmin = async ({ id }) => {
  const existing = await Admin.findById(id);

  if (!existing) {
    throw new NotFoundError("Admin not found");
  }

  return Admin.findByIdAndUpdate(id, { is_deleted: true });
};
