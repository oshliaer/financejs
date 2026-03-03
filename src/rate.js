import { normalizeZero } from "./normalizeZero.js";

/**
 * Evaluates the RATE equation for a candidate rate.
 *
 * @param {number} rate - Candidate rate.
 * @param {number} nper - Total number of periods.
 * @param {number} pmt - Periodic payment.
 * @param {number} pv - Present value.
 * @param {number} [fv=0] - Future value.
 * @param {0|1} [type=0] - Payment timing: 0 = end of period, 1 = beginning.
 * @returns {number} Equation result for the supplied rate.
 */
function evalRate(rate, nper, pmt, pv, fv = 0, type = 0) {
  if (rate === 0) {
    return pv + pmt * nper + fv;
  } else {
    const interestFactor = 1 + rate;
    const compoundFactor = Math.pow(interestFactor, nper);
    const paymentTimingFactor = type !== 0 ? 1 + rate : 1;

    return (
      pv * compoundFactor +
      (pmt * paymentTimingFactor * (compoundFactor - 1)) / rate +
      fv
    );
  }
}

/**
 * Calculates the interest rate per period using iterative approximation.
 *
 * @param {number} nper - Total number of periods.
 * @param {number} pmt - Periodic payment.
 * @param {number} pv - Present value.
 * @param {number} [fv=0] - Future value.
 * @param {0|1} [type=0] - Payment timing: 0 = end of period, 1 = beginning.
 * @param {number} [guess=0.1] - Initial guess for rate.
 * @returns {number} The calculated rate per period.
 * @throws {RangeError} When inputs are invalid or the algorithm cannot converge.
 */
export function rate(nper, pmt, pv, fv = 0, type = 0, guess = 0.1) {
  if (nper <= 0) {
    throw new RangeError("Invalid period.");
  }

  const epsilonMax = 0.0000001;
  const step = 0.00001;
  const iterationMax = 128;

  let rate0 = guess;
  let y0 = evalRate(rate0, nper, pmt, pv, fv, type);

  let rate1 = y0 > 0 ? rate0 / 2 : rate0 * 2;
  let y1 = evalRate(rate1, nper, pmt, pv, fv, type);

  for (let iteration = 0; iteration < iterationMax; iteration += 1) {
    if (y1 === y0) {
      rate0 = rate0 < rate1 ? rate0 - step : rate0 + step;
      y0 = evalRate(rate0, nper, pmt, pv, fv, type);
    }

    if (y1 === y0) {
      throw new RangeError("Cannot calculate RATE with the provided values.");
    }

    rate0 = rate1 - ((rate1 - rate0) * y1) / (y1 - y0);
    y0 = evalRate(rate0, nper, pmt, pv, fv, type);

    if (Math.abs(y0) < epsilonMax) {
      return normalizeZero(rate0);
    }

    const nextY = y0;
    y0 = y1;
    y1 = nextY;

    const nextRate = rate0;
    rate0 = rate1;
    rate1 = nextRate;
  }

  throw new RangeError("Maximum iterations exceeded while calculating RATE.");
}
