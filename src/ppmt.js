import { ipmt } from "./ipmt.js";
import { pmt } from "./pmt.js";

/**
 * Calculates the principal portion of a payment for a specific period.
 *
 * @param {number} rate - The interest rate per period.
 * @param {number} per - The target period (1-based).
 * @param {number} nper - The total number of payment periods.
 * @param {number} pv - The present value.
 * @param {number} [futureValue=0] - The future value.
 * @param {0|1} [type=0] - Payment timing: 0 = end of period, 1 = beginning of period.
 * @returns {number} The principal payment for the specified period.
 * @throws {RangeError} When `per` is outside the valid range.
 */
export function ppmt(rate, per, nper, pv, futureValue = 0, type = 0) {
  if (per <= 0 || per >= nper + 1) {
    throw new RangeError("Invalid period.");
  }

  const periodicPayment = pmt(rate, nper, pv, futureValue, type);
  const interestPayment = ipmt(rate, per, nper, pv, futureValue, type);

  return periodicPayment - interestPayment;
}
