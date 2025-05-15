/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const dayPrice = 40;

  if (days < shortTerm) {
    return days * dayPrice;
  }

  if (days < longTerm) {
    return days * dayPrice - shortTermDiscount;
  }

  return days * dayPrice - longTermDiscount;
}

module.exports = calculateRentalCost;
