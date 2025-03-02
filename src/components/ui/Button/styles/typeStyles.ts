import {
  containedRippleStyles,
  containedStyles,
  outlinedRippleStyles,
  outlinedStyles,
  textRippleStyles,
  textStyles,
} from './stylesMap';

/**
 * An object mapping each variant to its corresponding style definitions.
 * Each style set determines how the button’s appearance adapts based on its current state.
 *
 * @type {Map<string, Map<string, string>>}
 * @description This map contains the styles associated with each variant.
 *
 * @example
 * // Get the primary style for the 'contained' variant:
 * const containedPrimaryStyle = variantTypeStyles.get('contained')?.get('primary');
 */
export const variantTypeStyles: Map<string, Map<string, string>> = new Map<string, Map<string, string>>([
  ['contained', containedStyles],
  ['outlined', outlinedStyles],
  ['text', textStyles],
]);

/**
 * An object mapping each variant to its corresponding ripple effect style definitions.
 * Applies a visual ripple animation triggered upon button clicks.
 * Each variant provides its respective ripple effect color, determined by the variant’s underlying color.
 *
 * @type {Map<string, Map<string, string | null>>}
 * @description This map contains the ripple effect styles associated with each variant.
 *
 * @example
 * // Get the primary ripple color for the 'contained' variant:
 * const containedRippleColor = rippleColorStyles.get('contained')?.get('primary');
 */
export const rippleColorStyles: Map<string, Map<string, string | null>> = new Map<string, Map<string, string | null>>([
  ['contained', containedRippleStyles],
  ['outlined', outlinedRippleStyles],
  ['text', textRippleStyles],
]);
