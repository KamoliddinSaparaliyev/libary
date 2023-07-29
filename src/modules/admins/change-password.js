const { hash, compare } = require("bcryptjs");
const Admin = require("./Admin");
const { UnauthorizedError } = require("../../shared/errors");
require("dotenv/config");

const changePassword = async (password, changePassword) => {
  const match = compare(password, changePassword);
  if (!match) throw new UnauthorizedError();
  const hashPassword = await hash(password, 10);
  return hashPassword;
};

module.exports = changePassword;
