import { fv } from "./fv.js";
import { pmt } from "./pmt.js";

/**
 * Calculates the interest portion of a payment for a specific period.
 *
 * @param {number} rate - The interest rate per period.
 * @param {number} per - The target period (1-based).
 * @param {number} nper - The total number of payment periods.
 * @param {number} pv - The present value.
 * @param {number} [futureValue=0] - The future value.
 * @param {0|1} [type=0] - Payment timing: 0 = end of period, 1 = beginning of period.
 * @returns {number} The interest payment for the specified period.
 * @throws {RangeError} When `per` is outside the valid range.
 */
export function ipmt(rate, per, nper, pv, futureValue = 0, type = 0) {
  if (per <= 0 || per >= nper + 1) {
    throw new RangeError("Invalid period.");
  }

  if (type !== 0 && per === 1) {
    return 0;
  }

  const periodOffset = type !== 0 ? 2 : 1;
  const periodicPayment = pmt(rate, nper, pv, futureValue, type);
  const adjustedPresentValue = type !== 0 ? pv + periodicPayment : pv;
  const periodFutureValue = fv(
    rate,
    per - periodOffset,
    periodicPayment,
    adjustedPresentValue,
  );

  return periodFutureValue * rate;
}
