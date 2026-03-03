/**
 * Evaluates present value for an IRR iteration guess.
 *
 * @param {number[]} values - Cash flow values.
 * @param {number} [guess=0.1] - Rate guess.
 * @returns {number} Present value at the supplied guess.
 */
function internalPv(values, guess = 0.1) {
  let lowerBound = 0;
  const upperBound = values.length - 1;
  let total = 0;
  const discountRate = 1 + guess;

  while (lowerBound <= upperBound && values[lowerBound] === 0) {
    lowerBound += 1;
  }

  for (let index = upperBound; index >= lowerBound; index -= 1) {
    total /= discountRate;
    total += values[index];
  }

  return total;
}

/**
 * Calculates the internal rate of return for a series of cash flows.
 *
 * @param {number[]} values - Cash flow values where negatives are investments and positives are returns.
 * @param {number} [guess=0.1] - Initial guess for the IRR iteration.
 * @returns {number} The internal rate of return.
 * @throws {RangeError} When inputs are invalid or the algorithm cannot converge.
 */
export function irr(values, guess = 0.1) {
  if (guess <= -1) {
    throw new RangeError("Invalid guess.");
  }

  if (values.length < 1) {
    throw new RangeError("Invalid values.");
  }

  const epsilonMax = 0.0000001;
  const step = 0.00001;
  const iterationMax = 39;

  let maxAbsoluteValue = Math.abs(values[0]);

  for (let index = 0; index < values.length; index += 1) {
    const absoluteValue = Math.abs(values[index]);

    if (absoluteValue > maxAbsoluteValue) {
      maxAbsoluteValue = absoluteValue;
    }
  }

  const npvEpsilon = maxAbsoluteValue * epsilonMax * 0.01;

  let rate0 = guess;
  let npv0 = internalPv(values, rate0);
  let rate1 = npv0 > 0 ? rate0 + step : rate0 - step;

  if (rate1 <= -1) {
    throw new RangeError("Invalid values.");
  }

  let npv1 = internalPv(values, rate1);

  for (let iteration = 0; iteration <= iterationMax; iteration += 1) {
    if (npv1 === npv0) {
      rate0 = rate1 > rate0 ? rate0 - step : rate0 + step;
      npv0 = internalPv(values, rate0);

      if (npv1 === npv0) {
        throw new RangeError("Invalid values.");
      }
    }

    rate0 = rate1 - ((rate1 - rate0) * npv1) / (npv1 - npv0);

    if (rate0 <= -1) {
      rate0 = (rate1 - 1) * 0.5;
    }

    npv0 = internalPv(values, rate0);

    const rateDelta = Math.abs(rate0 - rate1);
    const absoluteNpv = Math.abs(npv0);

    if (absoluteNpv < npvEpsilon && rateDelta < epsilonMax) {
      return rate0;
    }

    const nextNpv = npv0;
    npv0 = npv1;
    npv1 = nextNpv;

    const nextRate = rate0;
    rate0 = rate1;
    rate1 = nextRate;
  }

  throw new RangeError("Maximum iterations exceeded while calculating IRR.");
}
