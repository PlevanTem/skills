/**
 * Typography system extracted from Figma design
 */
export const typography = {
  // Display
  display: {
    fontSize: 36,
    lineHeight: 44,
    fontWeight: '700' as const,
    letterSpacing: -0.5,
  },
  
  // Headings
  h1: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700' as const,
  },
  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600' as const,
  },
  h3: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600' as const,
  },
  h4: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600' as const,
  },
  
  // Body text
  bodyLarge: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '400' as const,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400' as const,
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as const,
  },
  
  // Caption
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400' as const,
  },
  
  // Button text
  button: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600' as const,
  },
  buttonSmall: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600' as const,
  },
  
  // Label
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500' as const,
  },
  
  // Special
  quote: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400' as const,
    fontStyle: 'italic' as const,
  },
};

export type TypographyVariant = keyof typeof typography;
