/**
 * Regex pattern for validating full names.
 * - Matches the full string from start (`^`) to end (`$`).
 * - Ensures no leading or trailing whitespace.
 * - Ensures no consecutive spaces.
 * - Allows letters, spaces, periods, apostrophes, and hyphens.
 */
export const fullNamePattern = /^(?!\s)(?!.*\s{2,})(?!.*\s$)[\p{L} .'-]+$/u;

/**
 * Regex pattern for validating email addresses.
 * - Matches the full string from start (`^`) to end (`$`).
 * - Ensures no spaces and follows the format: `local-part@domain-part`.
 * - Local Part: one or more non-space characters, excluding `@`.
 * - Domain Part: one or more non-space characters, excluding `@`, followed by a dot, and then one or more non-space
 *   characters.
 */
export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

/**
 * Regex pattern for validating subjects and messages.
 * - Matches the full string from start (`^`) to end (`$`).
 * - Ensures the message contains at least one character.
 * - Allows any character, including whitespace and special characters.
 */
export const nonEmptyPattern = /^.+$/;
