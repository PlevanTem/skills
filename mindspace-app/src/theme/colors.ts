/**
 * Color palette extracted from Figma design
 * Mental health app - calming, supportive colors
 */
export const colors = {
  // Primary colors
  primary: '#4A90E2',
  primaryDark: '#357ABD',
  primaryLight: '#6BA3E8',
  
  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F8F9FA',
  backgroundTertiary: '#F0F2F5',
  
  // Text colors
  text: '#1A1A1A',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  textInverse: '#FFFFFF',
  
  // Card colors
  cardBackground: '#FFFFFF',
  cardBorder: '#E5E7EB',
  
  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Emotion colors (from horizontal scroll menu)
  emotionDepression: '#6366F1',
  emotionAnxiety: '#F59E0B',
  emotionFamily: '#10B981',
  emotionLoneliness: '#8B5CF6',
  emotionRelationship: '#EC4899',
  
  // Progress/EXP colors
  expColor: '#F59E0B',
  progressBar: '#E5E7EB',
  progressBarFill: '#4A90E2',
  
  // Chat colors
  chatBubbleUser: '#4A90E2',
  chatBubbleBot: '#F3F4F6',
  chatTextUser: '#FFFFFF',
  chatTextBot: '#1A1A1A',
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
  
  // Border
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
};

export type ColorName = keyof typeof colors;
