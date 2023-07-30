const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

const showAdmin = async ({ id }) => {
  const admin = await Admin.findOne({ _id: id, is_deleted: false });

  if (!admin) throw new NotFoundError("Admin not found");

  return admin;
};

module.exports = showAdmin;
