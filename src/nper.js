/**
 * Calculates the number of periods for an investment/loan.
 *
 * @param {number} rate - Interest rate per period.
 * @param {number} pmt - Payment made each period.
 * @param {number} pv - Present value.
 * @param {number} [fv=0] - Future value.
 * @param {0|1} [type=0] - Payment timing: 0 = end of period, 1 = beginning.
 * @returns {number} Number of periods.
 * @throws {RangeError} When calculation is impossible with the provided inputs.
 */
export function nper(rate, pmt, pv, fv = 0, type = 0) {
  if (rate === 0) {
    if (pmt === 0) {
      throw new RangeError("Payment cannot be 0 when rate is 0.");
    }

    return -(pv + fv) / pmt;
  }

  const paymentAdjustment = type !== 0 ? pmt * (1 + rate) : pmt;
  const paymentOverRate = paymentAdjustment / rate;

  let futureValueTerm = -fv + paymentOverRate;
  let presentValueTerm = pv + paymentOverRate;

  // Ensure values are valid for logarithms.
  if (futureValueTerm < 0 && presentValueTerm < 0) {
    futureValueTerm *= -1;
    presentValueTerm *= -1;
  } else if (futureValueTerm <= 0 || presentValueTerm <= 0) {
    throw new RangeError("Cannot calculate NPER with the provided values.");
  }

  const growthFactor = 1 + rate;

  return (
    (Math.log(futureValueTerm) - Math.log(presentValueTerm)) /
    Math.log(growthFactor)
  );
}
