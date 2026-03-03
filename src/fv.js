/**
 * Calculates the future value of an investment or loan.
 *
 * @param {number} rate - The interest rate per period.
 * @param {number} nper - The total number of payment periods.
 * @param {number} pmt - The payment made each period.
 * @param {number} pv - The present value.
 * @param {0|1} [type=0] - Payment timing: 0 = end of period, 1 = beginning of period.
 * @returns {number} The future value.
 */
export function fv(rate, nper, pmt, pv, type = 0) {
  if (rate === 0) {
    return -pv - pmt * nper;
  } else {
    const paymentTimingFactor = type !== 0 ? 1 + rate : 1;
    const interestFactor = 1 + rate;
    const compoundFactor = Math.pow(interestFactor, nper);

    return (
      -pv * compoundFactor -
      (pmt / rate) * paymentTimingFactor * (compoundFactor - 1)
    );
  }
}
