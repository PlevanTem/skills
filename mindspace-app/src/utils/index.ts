/**
 * Utility functions
 */

/**
 * Format number with leading zero if needed
 */
export const formatNumber = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

/**
 * Calculate progress percentage
 */
export const calculateProgress = (current: number, total: number): number => {
  if (total === 0) return 0;
  return Math.min(100, Math.max(0, (current / total) * 100));
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};
