# MindSpace Mobile App

A mental health and emotion regulation mobile app built with React Native, based on the Figma design prototype.

## Features

- **21-Day Master Plan**: Evidence-based emotion regulation training program
- **Story-Based Learning**: Navigate through chapters with engaging narratives
- **Sage Chatbot**: AI-powered mental health mentor for guidance and support
- **Progress Tracking**: Monitor your journey with statistics and achievements
- **Wisdom Quotes**: Daily inspirational quotes for motivation
- **Assessments**: Self-assessment tools for emotional well-being

## Design Reference

Based on Figma design: https://www.figma.com/design/67HbSXWJM34C9L7GBgwdyf/Prototype?node-id=2302-5819

## Getting Started

### Prerequisites

- Node.js (>=18)
- React Native development environment
- iOS Simulator (for Mac) or Android Emulator

### Installation

```bash
# Install dependencies
npm install

# For iOS
cd ios && pod install && cd ..

# Run the app
npm start
npm run ios    # for iOS
npm run android # for Android
```

## Project Structure

```
mindspace-app/
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # Screen components
│   ├── navigation/     # Navigation configuration
│   ├── theme/         # Design tokens and theme
│   └── utils/         # Utility functions
├── assets/            # Images, fonts, etc.
└── App.tsx            # Root component
```

## Design System

The app follows a comprehensive design system extracted from the Figma prototype:

- **Colors**: Soft, calming palette for mental health app
- **Typography**: Clear hierarchy with multiple text styles
- **Spacing**: Consistent 4px grid system
- **Components**: Reusable UI elements (Cards, Buttons, Avatars, etc.)

## Technologies

- React Native
- TypeScript
- React Navigation
- React Native Reanimated
- React Native Gesture Handler

## License

MIT
