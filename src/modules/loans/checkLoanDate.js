function isDateWithinTwoMonths(date) {
  const twoMonthsFromNow = new Date();
  twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);

  return new Date(date) <= twoMonthsFromNow;
}
module.exports = isDateWithinTwoMonths;
