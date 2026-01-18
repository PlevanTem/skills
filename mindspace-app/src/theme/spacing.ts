/**
 * Spacing scale - 4px grid system
 */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
};

export type SpacingSize = keyof typeof spacing;

/**
 * Common spacing patterns
 */
export const spacingPatterns = {
  // Screen padding
  screenPadding: spacing.base,
  
  // Card padding
  cardPadding: spacing.base,
  cardPaddingLarge: spacing.xl,
  
  // Component spacing
  componentGap: spacing.md,
  sectionGap: spacing.xl,
  
  // Button padding
  buttonPaddingVertical: spacing.md,
  buttonPaddingHorizontal: spacing.xl,
  
  // Input padding
  inputPaddingVertical: spacing.md,
  inputPaddingHorizontal: spacing.base,
};
