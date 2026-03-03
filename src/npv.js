/**
 * Evaluates net present value across a bounded portion of a values array.
 *
 * @param {number} rate - Discount rate per period.
 * @param {number[]} values - Cash flow values.
 * @param {number} [npvType=0] - Sign filter mode: 0 = all, >0 = ignore positives, <0 = ignore negatives.
 * @param {number} [lowerBound=0] - Start index (inclusive).
 * @param {number} [upperBound=values.length - 1] - End index (inclusive).
 * @returns {number} The evaluated NPV for the specified range.
 */
function evalNpv(
  rate,
  values,
  npvType = 0,
  lowerBound = 0,
  upperBound = values.length - 1,
) {
  let discountFactor = 1;
  let total = 0;

  for (let index = lowerBound; index <= upperBound; index += 1) {
    const value = values[index];
    discountFactor += discountFactor * rate;

    const skipPositive = npvType > 0 && value > 0;
    const skipNegative = npvType < 0 && value < 0;

    if (!skipPositive && !skipNegative) {
      total += value / discountFactor;
    }
  }

  return total;
}

/**
 * Calculates the net present value of a series of cash flows.
 *
 * @param {number} rate - Discount rate per period.
 * @param {...number} values - Cash flow values.
 * @returns {number} The net present value.
 * @throws {RangeError} When there are no cash flow values or rate is invalid.
 */
export function npv(rate, ...values) {
  if (values.length < 1) {
    throw new RangeError("Invalid values.");
  }

  if (rate === -1) {
    throw new RangeError("Invalid rate.");
  }

  return evalNpv(rate, values, 0, 0, values.length - 1);
}
