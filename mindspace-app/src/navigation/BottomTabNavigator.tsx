import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { HomeScreen, ProfileScreen, ChatScreen } from '../screens';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, focused }: { name: string; focused: boolean }) => {
  return (
    <View style={styles.iconContainer}>
      <View
        style={[
          styles.icon,
          { backgroundColor: focused ? theme.colors.primary : theme.colors.textTertiary },
        ]}
      />
      <Text
        style={[
          styles.label,
          { color: focused ? theme.colors.primary : theme.colors.textTertiary },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textTertiary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon name="Discover" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon name="Chat" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon name="Profile" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 72,
    paddingBottom: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: theme.colors.background,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.xs,
  },
  label: {
    ...theme.typography.caption,
    fontSize: 10,
  },
});
