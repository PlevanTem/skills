import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../theme';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'success' | 'warning' | 'info';
  size?: 'small' | 'medium';
  style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'default',
  size = 'medium',
  style,
}) => {
  return (
    <View
      style={[
        styles.badge,
        styles[`badge_${variant}`],
        styles[`badge_${size}`],
        style,
      ]}
    >
      <Text style={[styles.text, styles[`text_${variant}`], styles[`text_${size}`]]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: theme.borderRadius.badge,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    alignSelf: 'flex-start',
  },
  badge_default: {
    backgroundColor: theme.colors.backgroundSecondary,
  },
  badge_success: {
    backgroundColor: theme.colors.success + '20',
  },
  badge_warning: {
    backgroundColor: theme.colors.warning + '20',
  },
  badge_info: {
    backgroundColor: theme.colors.info + '20',
  },
  badge_small: {
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: 2,
  },
  badge_medium: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  text: {
    ...theme.typography.caption,
    fontWeight: '600',
  },
  text_default: {
    color: theme.colors.text,
  },
  text_success: {
    color: theme.colors.success,
  },
  text_warning: {
    color: theme.colors.warning,
  },
  text_info: {
    color: theme.colors.info,
  },
  text_small: {
    fontSize: 10,
  },
  text_medium: {
    fontSize: 12,
  },
});
