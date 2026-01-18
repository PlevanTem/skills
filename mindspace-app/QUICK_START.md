# Quick Start Guide

## Metro Bundler is Running ✅

Keep the Metro bundler terminal open - it's serving your app code.

## Next Steps

### Option 1: Run on Android Emulator (Windows)

1. **Make sure you have:**
   - Android Studio installed
   - Android SDK installed
   - An Android Virtual Device (AVD) created and running

2. **Open a NEW terminal window** (keep Metro running in the first one)

3. **Navigate to the project:**
   ```bash
   cd D:\skill-collection\mindspace-app
   ```

4. **Run the Android app:**
   ```bash
   npm run android
   ```

   This will:
   - Build the Android app
   - Install it on your emulator
   - Launch the app

### Option 2: Run on Physical Android Device

1. **Enable Developer Options** on your Android device:
   - Go to Settings → About Phone
   - Tap "Build Number" 7 times
   - Go back to Settings → Developer Options
   - Enable "USB Debugging"

2. **Connect your device** via USB

3. **Verify connection:**
   ```bash
   adb devices
   ```
   (You should see your device listed)

4. **Run the app:**
   ```bash
   npm run android
   ```

### Option 3: Test in Web Browser (Expo Alternative)

If you want to test quickly without Android setup, you could:
- Use Expo Go app on your phone
- Or set up React Native Web (requires additional configuration)

## Troubleshooting

### If `npm run android` fails:

1. **Check Android Studio setup:**
   - Open Android Studio
   - Go to Tools → SDK Manager
   - Make sure Android SDK is installed
   - Check that `ANDROID_HOME` environment variable is set

2. **Check emulator:**
   ```bash
   emulator -list-avds
   ```
   If no emulators listed, create one in Android Studio:
   - Tools → Device Manager → Create Device

3. **Check ADB:**
   ```bash
   adb devices
   ```

### Common Issues:

- **"SDK location not found"**: Set `ANDROID_HOME` environment variable
- **"No emulators found"**: Create an AVD in Android Studio
- **"Command not found"**: Make sure Android SDK platform-tools is in your PATH

## Development Tips

- **Reload app**: Press `r` in Metro terminal or shake device and tap "Reload"
- **Open Dev Menu**: Press `d` in Metro terminal or shake device
- **Debug**: Use Chrome DevTools (shake device → Debug)
- **Hot Reload**: Enabled by default - save files to see changes instantly

## What You'll See

When the app launches, you should see:
- **Home Screen** with profile card, 21-day plan, quotes, and assessments
- **Bottom Navigation** with Discover, Chat, and Profile tabs
- All screens matching the Figma design

## Need Help?

- Check React Native docs: https://reactnative.dev/docs/environment-setup
- Check Android setup: https://reactnative.dev/docs/environment-setup?os=windows&platform=android
