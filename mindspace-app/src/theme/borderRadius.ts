/**
 * Border radius values
 */
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  full: 9999,
  
  // Common patterns
  card: 12,
  button: 8,
  input: 8,
  avatar: 9999,
  badge: 12,
};

export type BorderRadiusSize = keyof typeof borderRadius;
