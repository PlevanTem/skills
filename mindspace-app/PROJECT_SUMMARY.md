# MindSpace Mobile App - Project Summary

## Overview

This React Native mobile app is built based on the Figma design prototype for **MindSpace**, a mental health and emotion regulation application. The app helps users learn emotion regulation skills through story-based learning, guided by an AI mentor chatbot.

**Figma Design Reference:** https://www.figma.com/design/67HbSXWJM34C9L7GBgwdyf/Prototype?node-id=2302-5819

## What Was Built

### ✅ Complete Project Structure

- **React Native** setup with TypeScript
- **Navigation** using React Navigation (Stack + Bottom Tabs)
- **Design System** with comprehensive tokens
- **Reusable Components** library
- **Main Screens** matching Figma design

### ✅ Design System (`src/theme/`)

Extracted and implemented design tokens from Figma:

- **Colors**: Calming palette for mental health app
- **Typography**: Complete text hierarchy (Display, H1-H4, Body, Caption)
- **Spacing**: 4px grid system
- **Border Radius**: Consistent rounded corners
- **Shadows**: Elevation system

### ✅ Reusable Components (`src/components/`)

- **Button**: Multiple variants (primary, secondary, outline, ghost) and sizes
- **Card**: Container with padding, border, and shadow
- **Avatar**: Circular avatar with image or initials fallback
- **ProgressBar**: Horizontal progress indicator
- **Badge**: Small label component for tags

### ✅ Main Screens (`src/screens/`)

#### 1. HomeScreen (Discover)
- Profile card with user info, level, and EXP progress
- 21-day Master Plan horizontal scroll
- Wisdom quote card
- Assessment section with emotion tags (Depression, Anxiety, Family, etc.)
- PHQ-9 assessment card

#### 2. ProfileScreen
- User profile card with avatar and badge
- Statistics grid (Longest streak, EXP, Passed stories, Coin)
- Achievements list with progress bars
- Collection/Title tabs

#### 3. ChatScreen
- Header with Sage mentor avatar and info
- Welcome message with emotion tag suggestions
- Chat message bubbles (user/bot styling)
- Input area with attachment and send buttons
- Keyboard avoidance

#### 4. ChapterScreen
- Hero background with chapter title
- Chapter description card
- Story/Practice items list
- Lock states for locked content
- Duration and EXP indicators

### ✅ Navigation (`src/navigation/`)

- **Bottom Tab Navigator**: Discover, Chat, Profile
- **Stack Navigator**: For nested screens (Chapter details)
- Safe area handling for notched devices

## Design Implementation Details

### Screen Dimensions
- Designed for **390x844** (iPhone standard)
- Safe area handling for status bar and home indicator

### Key Design Patterns from Figma

1. **Profile Card** (HomeScreen)
   - Avatar (60px)
   - Username with edit button
   - Level indicator (LV.01)
   - EXP progress bar
   - Coin display

2. **21-Day Plan** (HomeScreen)
   - Horizontal scrollable cards
   - Phase indicator
   - Day numbers (TODAY, DAY 2-7)
   - Session count and EXP rewards

3. **Wisdom Quote** (HomeScreen)
   - Card with icon
   - Italic quote text
   - Author attribution

4. **Emotion Tags** (HomeScreen, ChatScreen)
   - Horizontal scrollable pills
   - Categories: Depression, Anxiety, Family, Loneliness, Relationship

5. **Achievements** (ProfileScreen)
   - Card layout with icon
   - Title and description
   - Progress bar with fraction (e.g., "1/1", "0/10")

6. **Chat Interface** (ChatScreen)
   - User messages: Blue background, right-aligned
   - Bot messages: Gray background, left-aligned
   - Emotion tag suggestions
   - Input with attachment and send

7. **Chapter Layout** (ChapterScreen)
   - Hero image background
   - Chapter number and title
   - Story/Practice items with lock states
   - Duration and EXP indicators

## File Structure

```
mindspace-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Avatar.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── Badge.tsx
│   │   └── index.ts
│   ├── screens/             # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── ChatScreen.tsx
│   │   ├── ChapterScreen.tsx
│   │   └── index.ts
│   ├── navigation/          # Navigation setup
│   │   ├── AppNavigator.tsx
│   │   ├── BottomTabNavigator.tsx
│   │   └── index.ts
│   ├── theme/               # Design tokens
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── borderRadius.ts
│   │   ├── shadows.ts
│   │   └── index.ts
│   └── utils/               # Utility functions
│       └── index.ts
├── App.tsx                  # Root component
├── index.js                 # Entry point
├── package.json
├── tsconfig.json
├── DESIGN_SYSTEM.md         # Design system documentation
└── README.md                # Project README
```

## Next Steps

To run the app:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **iOS setup:**
   ```bash
   cd ios && pod install && cd ..
   ```

3. **Run the app:**
   ```bash
   npm start
   npm run ios      # for iOS
   npm run android  # for Android
   ```

## Design Fidelity

The implementation closely follows the Figma design:

- ✅ Screen layouts match Figma structure
- ✅ Component styles match design tokens
- ✅ Typography hierarchy implemented
- ✅ Color palette extracted and applied
- ✅ Spacing and layout patterns match
- ✅ Navigation flow matches design
- ✅ Interactive elements styled correctly

## Notes

- Some placeholder icons use simple View components (can be replaced with actual icons)
- Image assets referenced but not included (add to `assets/` folder)
- Chat functionality is UI-only (backend integration needed)
- Chapter content is static (data integration needed)

## Design Reference

All design decisions are based on the Figma prototype:
- **File Key**: `67HbSXWJM34C9L7GBgwdyf`
- **Node ID**: `2302-5819` (Section containing all screens)
- **Design**: Mobile app prototype with multiple screens and interactions
