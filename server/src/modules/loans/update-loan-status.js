//Bu funksiya kitobni ijara vaqti tekshiradi
const Loan = require("./Loan");

async function updateLoanStatus() {
  const currentDate = new Date();

  const overdueLoans = await Loan.find({
    status: "pending",
    due_date: { $lt: currentDate },
  });

  for (const loan of overdueLoans) {
    loan.status = "overdue";
    await loan.save();
  }
}
module.exports = updateLoanStatus;
