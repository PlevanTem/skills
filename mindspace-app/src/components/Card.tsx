import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: keyof typeof theme.spacing;
  noShadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = 'base',
  noShadow = false,
}) => {
  return (
    <View
      style={[
        styles.card,
        { padding: theme.spacing[padding] },
        !noShadow && theme.shadows.md,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.card,
    borderWidth: 1,
    borderColor: theme.colors.cardBorder,
  },
});
