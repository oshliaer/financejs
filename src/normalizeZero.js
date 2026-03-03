/**
 * Normalizes zero values to ensure consistent handling of positive and negative
 * zero.
 *
 * In JavaScript, both +0 and -0 are distinct values that behave differently in
 * certain contexts (e.g., Object.is(), Math.sign(), 1/0 vs 1/-0). This function
 * coerces any zero input to positive zero, ensuring consistent representation
 * throughout calculations and comparisons.
 *
 * @param {number} value - The value to normalize
 * @returns {number} The normalized value
 */
export function normalizeZero(value) {
  return value === 0 ? 0 : value;
}
