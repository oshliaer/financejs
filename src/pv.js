/**
 * Calculates the present value of an investment based on a series of regular payments and a constant interest rate.
 *
 * @param {number} rate - The interest rate per period.
 * @param {number} nper - The total number of payment periods.
 * @param {number} pmt - The payment made each period; cannot change over the life of the annuity.
 * @param {number} fv - The future value, or a cash balance you want to attain after the last payment is made. Defaults to 0.
 * @param {0|1} [type=0] - The number 0 or 1 and indicates when payments are due. 0 = end of period, 1 = beginning of period. Defaults to 0.
 * @returns {number} The present value of the investment.
 */
export function pv(rate, nper, pmt, fv = 0, type = 0) {
  if (rate === 0) {
    return -pmt * nper - fv;
  } else {
    const paymentTimingFactor = type !== 0 ? 1 + rate : 1;
    const interestFactor = 1 + rate;
    const compoundFactor = Math.pow(interestFactor, nper);

    return (
      -(fv + pmt * paymentTimingFactor * ((compoundFactor - 1) / rate)) /
      compoundFactor
    );
  }
}
