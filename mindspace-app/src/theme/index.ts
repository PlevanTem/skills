/**
 * Design system theme
 * Central export for all design tokens
 */
import { colors } from './colors';
import { typography } from './typography';
import { spacing, spacingPatterns } from './spacing';
import { borderRadius } from './borderRadius';
import { shadows } from './shadows';

export const theme = {
  colors,
  typography,
  spacing,
  spacingPatterns,
  borderRadius,
  shadows,
};

export type Theme = typeof theme;

export default theme;
