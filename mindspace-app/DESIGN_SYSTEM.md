# MindSpace Design System

Design system extracted from Figma prototype: https://www.figma.com/design/67HbSXWJM34C9L7GBgwdyf/Prototype?node-id=2302-5819

## Design Tokens

### Colors

The app uses a calming, supportive color palette suitable for a mental health application:

- **Primary**: `#4A90E2` - Main brand color
- **Background**: `#FFFFFF` - Main background
- **Text**: `#1A1A1A` - Primary text color
- **Text Secondary**: `#6B7280` - Secondary text
- **Card Background**: `#FFFFFF` with subtle borders

See `src/theme/colors.ts` for complete color palette.

### Typography

The typography system follows a clear hierarchy:

- **Display**: 36px/44px - Large headings
- **H1**: 28px/36px - Page titles
- **H2**: 24px/32px - Section titles
- **H3**: 20px/28px - Subsection titles
- **Body**: 16px/24px - Main content
- **Caption**: 12px/16px - Small text

See `src/theme/typography.ts` for complete typography scale.

### Spacing

4px grid system:
- `xs`: 4px
- `sm`: 8px
- `md`: 12px
- `base`: 16px
- `lg`: 20px
- `xl`: 24px
- `2xl`: 32px

See `src/theme/spacing.ts` for complete spacing scale.

### Border Radius

- `sm`: 4px
- `md`: 8px
- `lg`: 12px (cards)
- `full`: 9999px (avatars, pills)

See `src/theme/borderRadius.ts` for complete radius values.

### Shadows

Elevation system for depth:
- `sm`: Subtle shadow for cards
- `md`: Standard card shadow
- `lg`: Elevated elements
- `xl`: Modals and overlays

See `src/theme/shadows.ts` for complete shadow definitions.

## Components

### Button

**Variants:**
- `primary`: Primary action (blue background, white text)
- `secondary`: Secondary action (gray background)
- `outline`: Outlined button (transparent with border)
- `ghost`: Text-only button

**Sizes:**
- `small`: 36px height
- `medium`: 54px height (default)
- `large`: 64px height

**Usage:**
```tsx
<Button
  title="Get Started"
  onPress={handlePress}
  variant="primary"
  size="medium"
/>
```

### Card

Container component with padding, border, and shadow.

**Props:**
- `padding`: Spacing size for internal padding
- `noShadow`: Remove shadow if needed

**Usage:**
```tsx
<Card padding="base">
  <Text>Card content</Text>
</Card>
```

### Avatar

Circular avatar component with image or initials fallback.

**Props:**
- `size`: Diameter in pixels (default: 50)
- `source`: Image source
- `name`: Name for initials fallback

**Usage:**
```tsx
<Avatar size={60} name="John Doe" />
```

### ProgressBar

Horizontal progress indicator.

**Props:**
- `progress`: 0-100 percentage
- `height`: Bar height in pixels
- `color`: Fill color

**Usage:**
```tsx
<ProgressBar progress={75} height={6} />
```

### Badge

Small label component for tags and status indicators.

**Variants:**
- `default`: Gray background
- `success`: Green tint
- `warning`: Orange tint
- `info`: Blue tint

**Usage:**
```tsx
<Badge label="New" variant="success" />
```

## Screen Patterns

### Home Screen

- Profile card at top
- 21-day plan horizontal scroll
- Wisdom quote card
- Assessment section with emotion tags

### Profile Screen

- User profile card
- Statistics grid (2 columns)
- Achievements list with progress bars

### Chat Screen

- Header with avatar and name
- Welcome message with emotion tags
- Message bubbles (user/bot)
- Input area with attachment and send

### Chapter Screen

- Hero image background
- Chapter info card
- Story/practice items with lock states

## Layout Patterns

### Screen Padding
- Standard: `16px` horizontal padding
- Cards: `16px` internal padding

### Section Spacing
- Between sections: `24px` vertical
- Within sections: `12px` vertical

### Card Spacing
- Card gap: `12px`
- Card margin: `16px` horizontal

## Interaction Patterns

### Navigation
- Bottom tab navigation (Discover, Chat, Profile)
- Stack navigation for detail screens
- Back button in header for nested screens

### Scrolling
- Horizontal scroll for:
  - 21-day plan days
  - Emotion tags
  - Chapter items
- Vertical scroll for main content

### Touch Targets
- Minimum touch target: `44x44px`
- Button height: `54px` (medium)
- Tab bar height: `72px`

## Accessibility

- Minimum text size: `12px`
- Color contrast ratios meet WCAG AA standards
- Touch targets meet minimum size requirements
- Semantic text hierarchy

## Responsive Design

- Designed for mobile (390x844 - iPhone standard)
- Safe area handling for notched devices
- Keyboard avoidance for input screens
