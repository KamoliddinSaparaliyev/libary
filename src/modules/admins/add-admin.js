const { hash } = require("bcryptjs");
const Admin = require("./Admin");
const { BadRequestError } = require("../../shared/errors");

const addAdmin = async (data) => {
  const existing = await Admin.findOne({ username: data.username });

  if (existing) throw new BadRequestError("Username already exsist");

  const hashedPassword = await hash(data.password, 10);

  const result = await Admin.create({
    ...data,
    password: hashedPassword,
  });

  return result;
};

module.exports = addAdmin;
