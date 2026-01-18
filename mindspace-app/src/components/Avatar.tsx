import React from 'react';
import { View, Image, Text, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../theme';

interface AvatarProps {
  size?: number;
  source?: { uri: string } | number;
  name?: string;
  style?: ViewStyle;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 50,
  source,
  name,
  style,
}) => {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <View style={[styles.container, avatarStyle, style]}>
      {source ? (
        <Image source={source} style={[styles.image, avatarStyle]} />
      ) : name ? (
        <View style={[styles.initialsContainer, avatarStyle, { backgroundColor: theme.colors.primary }]}>
          <Text style={[styles.initials, { fontSize: size * 0.4 }]}>
            {getInitials(name)}
          </Text>
        </View>
      ) : (
        <View style={[styles.placeholder, avatarStyle]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  initialsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: theme.colors.textInverse,
    fontWeight: '600',
  },
  placeholder: {
    backgroundColor: theme.colors.border,
  },
});
