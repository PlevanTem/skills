import React from 'react';
import { StatusBar, StyleSheet, View, Platform as RNPlatform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppNavigator } from './src/navigation';
import { theme } from './src/theme';

const isWeb = typeof window !== 'undefined';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <View style={[styles.container, isWeb && styles.webContainer]}>
          {!isWeb && (
            <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />
          )}
          <AppNavigator />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  webContainer: {
    maxWidth: 390,
    maxHeight: 844,
    margin: '0 auto',
    width: '100%',
    height: '100%',
  },
});

export default App;
