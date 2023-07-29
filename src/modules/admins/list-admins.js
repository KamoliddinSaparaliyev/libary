const Admin = require("./Admin");

const listAdmins = async ({ q, page, sort, filters }) => {
  const { limit = 10, offset = 0 } = page || {};
  const { by = "full_name", order = "DESC" } = sort || {};
  const { is_deleted = false, is_super = false } = filters || {};
  const filter = {};

  if (q) {
    filter.full_name = { $regex: q, $options: "i" };
  }
  if (is_deleted !== undefined) {
    filter.is_deleted = is_deleted;
  }
  if (is_super !== undefined) {
    filter.is_super = is_super;
  }
  const total = await Admin.countDocuments(filter);
  const admins = await Admin.find(filter)
    .sort({ [by]: order === "DESC" ? -1 : 1 })
    .skip(offset)
    .limit(limit);

  return { total, limit, offset, admins };
};

module.exports = listAdmins;
