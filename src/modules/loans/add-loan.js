const Loan = require("./Loan");

const addLoan = async (data) => {
  const result = await Loan.create({
    ...data,
  });

  return result;
};

module.exports = addLoan;
