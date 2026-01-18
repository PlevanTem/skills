---
name: {project-name}-design-system
description: Design system extracted from Figma design {figma-url}
source: {figma-url}
extracted: {date}
framework: React + Tailwind CSS
---

# Design System Rules

## Design Tokens

### Colors

#### Primary Colors
- **Primary**: `bg-primary` / `text-primary` / `border-primary` / `#HEX`
  - Usage: Main brand color, primary actions, links
  - Hover: `bg-primary-hover` / `#HEX`
  - Active: `bg-primary-active` / `#HEX`

#### Secondary Colors
- **Secondary**: `bg-secondary` / `text-secondary` / `border-secondary` / `#HEX`
  - Usage: Secondary actions, supporting elements

#### Semantic Colors
- **Success**: `bg-success` / `text-success` / `#HEX` - Success states, confirmations
- **Error**: `bg-error` / `text-error` / `#HEX` - Error states, warnings
- **Warning**: `bg-warning` / `text-warning` / `#HEX` - Warning states
- **Info**: `bg-info` / `text-info` / `#HEX` - Informational messages

#### Neutral Colors
- **Background**: `bg-background` / `#HEX` - Page background
- **Surface**: `bg-surface` / `#HEX` - Card/container backgrounds
- **Text Primary**: `text-text-primary` / `#HEX` - Primary text color
- **Text Secondary**: `text-text-secondary` / `#HEX` - Secondary text color
- **Border**: `border-border` / `#HEX` - Default border color

#### Usage Guidelines
- Always use semantic color names, never raw hex values in code
- Use opacity modifiers: `bg-primary/50` for 50% opacity
- Support dark mode variants if applicable

### Typography

#### Font Families
- **Display**: `font-display` - `{font-family}` - For large headings and hero text
- **Body**: `font-body` - `{font-family}` - For body text and content
- **Mono**: `font-mono` - `{font-family}` - For code and technical content

#### Font Sizes

**Display Sizes**
- `text-display-xl` - {size}px / {line-height}px / {weight} - Hero headings
- `text-display-lg` - {size}px / {line-height}px / {weight} - Large display text
- `text-display-md` - {size}px / {line-height}px / {weight} - Medium display text

**Heading Sizes**
- `text-heading-1` - {size}px / {line-height}px / {weight} - H1 headings
- `text-heading-2` - {size}px / {line-height}px / {weight} - H2 headings
- `text-heading-3` - {size}px / {line-height}px / {weight} - H3 headings
- `text-heading-4` - {size}px / {line-height}px / {weight} - H4 headings

**Body Sizes**
- `text-body-lg` - {size}px / {line-height}px / {weight} - Large body text
- `text-body` - {size}px / {line-height}px / {weight} - Default body text
- `text-body-sm` - {size}px / {line-height}px / {weight} - Small body text
- `text-caption` - {size}px / {line-height}px / {weight} - Captions and labels

#### Usage Guidelines
- Use heading classes for semantic headings (h1-h6)
- Use body classes for paragraphs and content
- Maintain consistent typography hierarchy

### Spacing

#### Spacing Scale
- `space-1` / `p-1` / `m-1` - {value}px - Extra small spacing
- `space-2` / `p-2` / `m-2` - {value}px - Small spacing
- `space-3` / `p-3` / `m-3` - {value}px - Medium-small spacing
- `space-4` / `p-4` / `m-4` - {value}px - Medium spacing (default)
- `space-5` / `p-5` / `m-5` - {value}px - Medium-large spacing
- `space-6` / `p-6` / `m-6` - {value}px - Large spacing
- `space-8` / `p-8` / `m-8` - {value}px - Extra large spacing
- `space-10` / `p-10` / `m-10` - {value}px - 2x large spacing
- `space-12` / `p-12` / `m-12` - {value}px - 3x large spacing

#### Usage Guidelines
- Use `p-{n}` for padding, `m-{n}` for margin
- Use `gap-{n}` for flex/grid spacing
- Use `space-y-{n}` for vertical spacing between children
- Use `space-x-{n}` for horizontal spacing between children

### Border Radius

- `rounded-none` - 0px - No radius
- `rounded-sm` - {value}px - Small radius
- `rounded-md` - {value}px - Medium radius (default)
- `rounded-lg` - {value}px - Large radius
- `rounded-xl` - {value}px - Extra large radius
- `rounded-2xl` - {value}px - 2x large radius
- `rounded-full` - 9999px - Full circle

### Shadows / Elevation

- `shadow-none` - No shadow
- `shadow-sm` / `shadow-elevation-1` - Light shadow - Cards, subtle elevation
- `shadow-md` / `shadow-elevation-2` - Medium shadow - Modals, dropdowns
- `shadow-lg` / `shadow-elevation-3` - Large shadow - Popovers, tooltips
- `shadow-xl` / `shadow-elevation-4` - Extra large shadow - High elevation elements

## Components

### Button

**Component**: `@/components/ui/Button`

**Variants**:
- `primary` - Primary action button
- `secondary` - Secondary action button
- `outline` - Outlined button style
- `ghost` - Ghost/transparent button
- `destructive` - Destructive action button

**Sizes**:
- `sm` - Small button: `h-8 px-3 text-sm`
- `md` - Medium button (default): `h-10 px-4 text-base`
- `lg` - Large button: `h-12 px-6 text-lg`

**Usage**:
```jsx
<Button variant="primary" size="md">Click me</Button>
<Button variant="outline" size="sm">Cancel</Button>
```

**Tailwind Classes**: `btn btn-{variant} btn-{size}`

**States**:
- Default: Base styles
- Hover: `hover:bg-{variant}-hover`
- Active: `active:bg-{variant}-active`
- Disabled: `disabled:opacity-50 disabled:pointer-events-none`
- Loading: Show spinner, disable interaction

**Do's**:
- Use primary variant for main actions
- Use appropriate size for context
- Include loading states for async actions

**Don'ts**:
- Don't create custom button styles, use variants
- Don't mix button sizes in the same group
- Don't use buttons for navigation (use links instead)

### Input

**Component**: `@/components/ui/Input`

**Variants**:
- `default` - Default input style
- `error` - Error state input
- `success` - Success state input

**Sizes**:
- `sm` - Small input: `h-8 px-3 text-sm`
- `md` - Medium input (default): `h-10 px-4 text-base`
- `lg` - Large input: `h-12 px-6 text-lg`

**Usage**:
```jsx
<Input placeholder="Enter text" />
<Input variant="error" errorMessage="This field is required" />
```

**Tailwind Classes**: `input input-{variant} input-{size}`

**States**:
- Default: `border-gray-300`
- Focus: `focus:border-primary focus:ring-2 focus:ring-primary`
- Error: `border-error ring-2 ring-error`
- Disabled: `disabled:opacity-50 disabled:cursor-not-allowed`

**Do's**:
- Always include labels for accessibility
- Show error messages below inputs
- Use appropriate input types (email, password, etc.)

**Don'ts**:
- Don't use inputs without labels
- Don't create custom input styles
- Don't forget error states

### Card

**Component**: `@/components/ui/Card`

**Variants**:
- `default` - Default card style
- `elevated` - Elevated card with shadow
- `outlined` - Outlined card with border

**Usage**:
```jsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content
  </CardContent>
</Card>
```

**Tailwind Classes**: `card card-{variant}`

**Structure**:
- Padding: `p-6` (24px)
- Border radius: `rounded-lg` (12px)
- Background: `bg-surface`
- Border: `border border-border` (for outlined variant)
- Shadow: `shadow-md` (for elevated variant)

**Do's**:
- Use consistent padding
- Include proper spacing between card elements
- Use elevated variant for modals/overlays

**Don'ts**:
- Don't nest cards unnecessarily
- Don't use cards for simple containers
- Don't mix card variants inconsistently

### Modal

**Component**: `@/components/ui/Modal`

**Sizes**:
- `sm` - Small modal: `max-w-sm` (384px)
- `md` - Medium modal (default): `max-w-md` (448px)
- `lg` - Large modal: `max-w-lg` (512px)
- `xl` - Extra large modal: `max-w-xl` (576px)
- `full` - Full screen: `max-w-full`

**Usage**:
```jsx
<Modal isOpen={isOpen} onClose={onClose} size="md">
  <ModalHeader>Modal Title</ModalHeader>
  <ModalBody>Modal content</ModalBody>
  <ModalFooter>
    <Button onClick={onClose}>Close</Button>
  </ModalFooter>
</Modal>
```

**Tailwind Classes**: `modal modal-{size}`

**Structure**:
- Backdrop: `bg-black/50 backdrop-blur-sm`
- Container: `bg-surface rounded-lg shadow-xl`
- Padding: `p-6` (24px)
- Max width: Based on size variant

**Do's**:
- Always include close button
- Use appropriate size for content
- Include backdrop for focus management

**Don'ts**:
- Don't create modals without backdrop
- Don't use modals for simple confirmations (use dialogs)
- Don't forget to handle escape key

[Add more components as extracted from Figma]

## Patterns

### Cards

**Layout Pattern**: Card grid/list

**Spacing**:
- Card padding: `p-6` (24px)
- Gap between cards: `gap-4` (16px) or `gap-6` (24px)
- Card border radius: `rounded-lg` (12px)

**Usage**:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</div>
```

### Forms

**Layout Pattern**: Form with fields

**Spacing**:
- Vertical spacing between fields: `space-y-6` (24px)
- Label spacing: `mb-2` (8px)
- Error message spacing: `mt-1` (4px)
- Form section spacing: `space-y-8` (32px)

**Usage**:
```jsx
<form className="space-y-6">
  <div>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" />
  </div>
  <div>
    <Label htmlFor="password">Password</Label>
    <Input id="password" type="password" />
  </div>
</form>
```

### Navigation

**Layout Pattern**: Header navigation

**Structure**:
- Height: `h-16` (64px)
- Padding: `px-6` (24px horizontal)
- Background: `bg-surface border-b border-border`
- Logo spacing: `mr-8` (32px)

**Usage**:
```jsx
<nav className="h-16 px-6 bg-surface border-b border-border flex items-center">
  <Logo className="mr-8" />
  <NavLinks className="flex gap-6" />
</nav>
```

### Tables

**Layout Pattern**: Data table

**Structure**:
- Header: `bg-gray-50 text-text-secondary font-semibold`
- Cell padding: `px-4 py-3` (16px horizontal, 12px vertical)
- Row border: `border-b border-border`
- Hover: `hover:bg-gray-50`

**Usage**:
```jsx
<table className="w-full">
  <thead>
    <tr className="bg-gray-50">
      <th className="px-4 py-3 text-left">Column 1</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-border hover:bg-gray-50">
      <td className="px-4 py-3">Data</td>
    </tr>
  </tbody>
</table>
```

[Add more patterns as extracted from Figma]

## Files to Reference

### Component Implementations
- `src/components/ui/Button.tsx` - Button component implementation
- `src/components/ui/Input.tsx` - Input component implementation
- `src/components/ui/Card.tsx` - Card component implementation
- `src/components/ui/Modal.tsx` - Modal component implementation
[Add more component file paths]

### Configuration Files
- `tailwind.config.js` - Tailwind configuration with design tokens
- `src/styles/tokens.css` - CSS custom properties for design tokens
- `src/styles/globals.css` - Global styles and utilities

### Type Definitions
- `src/types/design-system.ts` - TypeScript types for design system
- `src/types/components.ts` - Component prop types

## Usage Guidelines

### General Principles
- **Always use design system components** - Never create custom UI elements that duplicate design system functionality
- **Follow spacing and typography scales** - Use the defined spacing and typography scales consistently
- **Use semantic color names** - Always use semantic color names (primary, secondary) rather than raw hex values
- **Maintain component composition** - Follow established component composition patterns
- **Responsive design** - Use Tailwind responsive utilities (sm:, md:, lg:) for breakpoints
- **Accessibility** - Ensure all components meet WCAG accessibility standards

### Component Usage
- Import components from `@/components/ui`
- Use component variants and sizes as defined
- Follow component composition patterns
- Don't override component styles unless absolutely necessary

### Token Usage
- Use Tailwind utilities for styling
- Reference design tokens through Tailwind classes
- Use CSS variables for dynamic theming if needed
- Maintain token consistency across the application

### Pattern Usage
- Follow established layout patterns
- Use consistent spacing within patterns
- Maintain visual hierarchy
- Ensure responsive behavior

## Responsive Breakpoints

- **Mobile**: `sm:` - 640px and up
- **Tablet**: `md:` - 768px and up
- **Desktop**: `lg:` - 1024px and up
- **Large Desktop**: `xl:` - 1280px and up
- **Extra Large**: `2xl:` - 1536px and up

## Dark Mode Support

[If applicable, document dark mode variants]

- Dark mode colors: Use `dark:` prefix
- Dark mode toggle: Implement theme switcher
- Color variants: Define dark mode color mappings

## Animation & Transitions

- Default transition: `transition-colors duration-200`
- Hover transitions: `hover:transition-all hover:duration-200`
- Focus transitions: `focus:transition-all focus:duration-200`

## Accessibility

- Color contrast: All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Focus indicators: All interactive elements have visible focus states
- Keyboard navigation: All components support keyboard navigation
- Screen readers: All components include proper ARIA labels
