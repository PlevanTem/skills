# Tailwind CSS Mapping Guide

This guide provides detailed mapping strategies for converting Figma design tokens to Tailwind CSS utilities and configuration.

## Color Mapping

### Semantic Color Names

Map Figma color variables to semantic Tailwind color names:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF',      // From Figma: color/primary
          50: '#E6F2FF',
          100: '#CCE5FF',
          // ... generate scale if needed
        },
        secondary: {
          DEFAULT: '#6B7280',      // From Figma: color/secondary
        },
        success: {
          DEFAULT: '#10B981',      // From Figma: color/success
        },
        error: {
          DEFAULT: '#EF4444',      // From Figma: color/error
        },
        warning: {
          DEFAULT: '#F59E0B',      // From Figma: color/warning
        },
      }
    }
  }
}
```

### Usage Patterns

```jsx
// Background colors
<div className="bg-primary">Primary background</div>
<div className="bg-secondary/50">Secondary with opacity</div>

// Text colors
<p className="text-primary">Primary text</p>
<p className="text-error">Error text</p>

// Border colors
<div className="border border-primary">Primary border</div>
```

### Color Variable Extraction from Figma

1. Extract from `mcp_Figma_get_variable_defs`:
   ```python
   variables = {
     'color/primary': '#0066FF',
     'color/primary/hover': '#0052CC',
     'color/background': '#FFFFFF',
     'color/text/primary': '#111827',
     'color/text/secondary': '#6B7280',
   }
   ```

2. Map to Tailwind structure:
   ```javascript
   {
     primary: {
       DEFAULT: variables['color/primary'],
       hover: variables['color/primary/hover'],
     },
     background: variables['color/background'],
     text: {
       primary: variables['color/text/primary'],
       secondary: variables['color/text/secondary'],
     }
   }
   ```

## Typography Mapping

### Font Families

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],  // From Figma
        display: ['Poppins', 'sans-serif'],          // From Figma
        mono: ['Fira Code', 'monospace'],           // From Figma
      }
    }
  }
}
```

### Font Sizes

Map Figma text styles to Tailwind font sizes:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        // From Figma text styles
        'display-xl': ['72px', { lineHeight: '80px', fontWeight: '700' }],
        'display-lg': ['60px', { lineHeight: '72px', fontWeight: '700' }],
        'heading-1': ['48px', { lineHeight: '56px', fontWeight: '600' }],
        'heading-2': ['36px', { lineHeight: '44px', fontWeight: '600' }],
        'heading-3': ['30px', { lineHeight: '38px', fontWeight: '600' }],
        'heading-4': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '400' }],
      }
    }
  }
}
```

### Usage Patterns

```jsx
// Display text
<h1 className="text-display-xl font-display">Large Display</h1>

// Headings
<h2 className="text-heading-1">Heading 1</h2>
<h3 className="text-heading-2">Heading 2</h3>

// Body text
<p className="text-body">Body text</p>
<p className="text-body-sm">Small body text</p>

// Captions
<span className="text-caption">Caption text</span>
```

### Font Weight Mapping

```javascript
// Map Figma font weights to Tailwind
const fontWeightMap = {
  'Regular': '400',
  'Medium': '500',
  'Semibold': '600',
  'Bold': '700',
}
```

## Spacing Mapping

### Default Tailwind Scale

Tailwind uses a 4px base scale:
- `1` = 4px
- `2` = 8px
- `3` = 12px
- `4` = 16px
- `5` = 20px
- `6` = 24px
- `8` = 32px
- `10` = 40px
- `12` = 48px
- `16` = 64px

### Custom Spacing Scale

If Figma uses different spacing values:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        // Map Figma spacing tokens
        'xs': '4px',    // From Figma: space/xs
        'sm': '8px',    // From Figma: space/sm
        'md': '16px',   // From Figma: space/md
        'lg': '24px',   // From Figma: space/lg
        'xl': '32px',   // From Figma: space/xl
        '2xl': '48px',  // From Figma: space/2xl
        '3xl': '64px',  // From Figma: space/3xl
      }
    }
  }
}
```

### Usage Patterns

```jsx
// Padding
<div className="p-4">Padding 16px</div>
<div className="px-6 py-4">Horizontal 24px, Vertical 16px</div>

// Margin
<div className="m-4">Margin 16px</div>
<div className="mt-8 mb-4">Top 32px, Bottom 16px</div>

// Gap (for flex/grid)
<div className="flex gap-4">Gap 16px</div>

// Space between (for vertical spacing)
<div className="space-y-6">Vertical spacing 24px</div>
```

## Border Radius Mapping

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        // Map Figma border radius values
        'none': '0',
        'sm': '4px',    // From Figma
        'md': '8px',    // From Figma
        'lg': '12px',   // From Figma
        'xl': '16px',   // From Figma
        '2xl': '24px',  // From Figma
        'full': '9999px',
      }
    }
  }
}
```

### Usage

```jsx
<div className="rounded-md">8px radius</div>
<div className="rounded-lg">12px radius</div>
<button className="rounded-full">Full circle</button>
```

## Shadow/Elevation Mapping

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        // Map Figma shadow styles
        'elevation-1': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'elevation-2': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'elevation-3': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation-4': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    }
  }
}
```

### Usage

```jsx
<div className="shadow-elevation-1">Light shadow</div>
<div className="shadow-elevation-4">Heavy shadow</div>
```

## Component Class Patterns

### Button Component

```jsx
// Base button classes
const buttonBase = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

// Variants
const buttonVariants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "bg-secondary text-white hover:bg-secondary-hover",
  outline: "border border-primary text-primary hover:bg-primary/10",
  ghost: "text-primary hover:bg-primary/10",
}

// Sizes
const buttonSizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
}
```

### Input Component

```jsx
// Base input classes
const inputBase = "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

// States
const inputStates = {
  default: "border-gray-300",
  focus: "border-primary ring-2 ring-primary",
  error: "border-error ring-2 ring-error",
  disabled: "opacity-50 cursor-not-allowed",
}
```

### Card Component

```jsx
// Card pattern
<div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
  <h3 className="text-heading-3 mb-4">Card Title</h3>
  <p className="text-body text-gray-600">Card content</p>
</div>
```

## Responsive Breakpoints

Tailwind default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Map Figma breakpoints if different:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        'mobile': '375px',   // From Figma
        'tablet': '768px',   // From Figma
        'desktop': '1024px', // From Figma
      }
    }
  }
}
```

## CSS Variables Alternative

For dynamic theming, use CSS variables:

```css
/* src/styles/tokens.css */
:root {
  --color-primary: #0066FF;
  --color-primary-hover: #0052CC;
  --color-secondary: #6B7280;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --font-display: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
      }
    }
  }
}
```

## Best Practices

1. **Semantic Naming**: Use semantic names (primary, secondary) not descriptive (blue-500)
2. **Consistent Scale**: Maintain consistent spacing and typography scales
3. **Component Patterns**: Document Tailwind class patterns for each component
4. **Responsive Design**: Map Figma breakpoints to Tailwind breakpoints
5. **Dark Mode**: Consider dark mode variants if in Figma design
6. **Accessibility**: Ensure color contrast meets WCAG standards
