/**
 * Calculates the periodic payment for a loan or investment.
 *
 * @param {number} rate - The interest rate per period.
 * @param {number} nper - The total number of payment periods.
 * @param {number} pv - The present value.
 * @param {number} [fv=0] - The future value, or remaining balance after the last payment. Defaults to 0.
 * @param {0|1} [type=0] - Payment timing: 0 = end of period, 1 = beginning of period. Defaults to 0.
 * @returns {number} The periodic payment amount.
 */
export function pmt(rate, nper, pv, fv = 0, type = 0) {
  if (rate === 0) {
    return (-fv - pv) / nper;
  } else {
    const paymentTimingFactor = type !== 0 ? 1 + rate : 1;
    const interestFactor = 1 + rate;
    const compoundFactor = Math.pow(interestFactor, nper);

    return (
      ((-fv - pv * compoundFactor) /
        (paymentTimingFactor * (compoundFactor - 1))) *
      rate
    );
  }
}
