/**
 * Creates a function that checks if a prop should not be forwarded to the DOM element.
 * It uses a list of property keys from custom component props.
 *
 * @param props Array of property keys from custom props that should not be forwarded.
 * @returns A function that takes a property name and returns a boolean indicating
 *          whether it should not be forwarded.
 */
export const shouldNotForwardPropsWithKeys =
  <CustomProps>(props: Array<keyof CustomProps>) =>
  (propName: PropertyKey): boolean =>
    !props.map((p) => p.toString()).includes(propName.toString());

/**
 * Converts a duration from seconds into a more human-readable string format.
 * The output format is determined by the duration's length:
 * - Less than a minute: outputs in seconds (e.g., "30s").
 * - Less than an hour: outputs in minutes (e.g., "30min").
 * - Less than a day: outputs in hours (e.g., "2hr").
 * - One day or more: outputs in days (e.g., "1d").
 *
 * @param seconds The duration in seconds to be converted.
 * @returns A string representing the duration in a human-readable format,
 *          using the appropriate unit (seconds, minutes, hours, or days).
 */
export const formatDuration = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds}s`;
  } else if (seconds < 3600) {
    return `${Math.floor(seconds / 60)}min`;
  } else if (seconds < 86400) {
    return `${Math.floor(seconds / 3600)}hr`;
  } else {
    return `${Math.floor(seconds / 86400)}d`;
  }
};

/**
 * Formats a number into a compact string representation using the specified maximum number of decimal places.
 * This function is useful for displaying large numbers in a more readable format (e.g., "1K" for 1000).
 * It supports both numeric and string inputs for the number parameter.
 *
 * @param {string | number} number - The number to format. Can be a numeric value or a string that represents a number.
 * @param {number} maxDecimals - The maximum number of decimal places to display. Defaults to 2.
 * @returns {string} A compact, human-readable string representation of the number, formatted according to the "en-US" locale.
 *                   If the input is an invalid number, it returns the input as is.
 */
export function compactNumber(
  number: string | number,
  maxDecimals: number = 2
): string {
  const num = typeof number === "string" ? parseFloat(number) : number;
  if (isNaN(num)) {
    return String(number); // Return the input as is if it's not a valid number
  }

  // Determine if the number has significant decimals
  const hasSignificantDecimals = num % 1 !== 0;

  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    // Adjust maximumFractionDigits based on whether the number has significant decimals
    maximumFractionDigits: hasSignificantDecimals ? maxDecimals : 0,
  }).format(num);
}
