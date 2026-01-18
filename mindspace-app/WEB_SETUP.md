# Web App Setup Guide

The app can now run in your browser, mimicking the mobile design!

## Installation

First, install the new web dependencies:

```bash
npm install
```

This will install:
- `react-native-web` - React Native components for web
- `react-dom` - React DOM renderer
- `webpack` and related tools - Web bundler

## Running the Web App

1. **Start the web development server:**
   ```bash
   npm run web
   ```

2. **Open your browser:**
   The app will automatically open at `http://localhost:3000`

3. **You'll see:**
   - The app displayed in a mobile frame (390x844px)
   - All screens working in the browser
   - Same design as the mobile app

## Building for Production

To create a production build:

```bash
npm run build:web
```

The built files will be in the `web-build/` folder.

## Features

- ✅ All React Native components work in the browser
- ✅ Navigation works (bottom tabs, stack navigation)
- ✅ Responsive design (centered on desktop, fullscreen on mobile)
- ✅ Hot reloading for fast development
- ✅ Same codebase as mobile app

## Troubleshooting

If you get errors about missing modules:
- Make sure all dependencies are installed: `npm install`
- Check that webpack is installed: `npm list webpack`

If the app doesn't load:
- Check the browser console for errors
- Make sure port 3000 is not in use
- Try clearing browser cache

## Notes

- The web version uses React Native Web, which translates React Native components to web components
- Some native features (like StatusBar) may not work exactly the same on web
- The app is designed to look like a mobile app even in the browser
