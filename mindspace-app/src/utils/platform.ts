/**
 * Platform detection utility
 */
import { Platform as RNPlatform } from 'react-native';

export const Platform = {
  ...RNPlatform,
  isWeb: typeof window !== 'undefined',
  isMobile: RNPlatform.OS === 'ios' || RNPlatform.OS === 'android',
};
