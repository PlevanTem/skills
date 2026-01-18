---
name: d2c-figma
description: Design-to-Code conversion skill that extracts design tokens, components, and patterns from Figma designs and generates React + Tailwind CSS design system specifications. Use when: (1) User provides a Figma design link/URL, (2) Need to convert Figma designs to code-ready design system documentation, (3) Extracting design tokens (colors, typography, spacing) from Figma, (4) Generating design system rules for React + Tailwind CSS projects, (5) Creating component specifications from Figma components, or (6) Building design system documentation that AI IDEs can use for code generation.
license: Complete terms in LICENSE.txt
---

# D2C Figma: Design-to-Code Conversion

Convert Figma designs into production-ready design system specifications for React + Tailwind CSS projects. This skill extracts design tokens, component structures, and patterns from Figma files and generates comprehensive design system documentation that guides AI code generation.

## Workflow Overview

The D2C conversion process follows these steps:

1. **Parse Figma URL** - Extract file key and node ID from Figma design links
2. **Extract Design Context** - Use Figma MCP to read design structure, tokens, and components
3. **Analyze Design System** - Identify colors, typography, spacing, components, and patterns
4. **Generate Design System Spec** - Create comprehensive design system documentation
5. **Output Format** - Produce structured design system rules in standardized format

## Trigger Detection

This skill activates when:
- User provides a Figma design URL (e.g., `https://figma.com/design/...`)
- User mentions "convert Figma design", "extract design tokens", "design system from Figma"
- User asks to generate design system documentation
- Project context indicates React + Tailwind CSS setup

## Figma MCP Integration

Use Figma MCP tools to extract design information:

### Primary Tools

1. **`mcp_Figma_get_design_context`** - Get comprehensive design context including code, assets, and metadata
   - Extract node ID and file key from Figma URL
   - Use for getting complete design structure and component information

2. **`mcp_Figma_get_variable_defs`** - Extract design tokens (colors, spacing, typography)
   - Returns variable definitions like `{'icon/default/secondary': #949494}`
   - Essential for design token extraction

3. **`mcp_Figma_get_metadata`** - Get structural overview (node IDs, types, positions, sizes)
   - Use for understanding page structure and component hierarchy
   - Helps identify reusable components vs instances

4. **`mcp_Figma_get_code_connect_map`** - Check if components are mapped to code
   - Useful for identifying existing component mappings

### URL Parsing

Figma URLs follow these patterns:
- Standard: `https://figma.com/design/{fileKey}/{fileName}?node-id={nodeId}`
- Branch: `https://figma.com/design/{fileKey}/branch/{branchKey}/{fileName}?node-id={nodeId}`

Extract:
- `fileKey`: The file identifier
- `nodeId`: Convert `1-2` format to `1:2` for API calls

## Design System Extraction Process

### Step 1: Initial Design Analysis

1. Parse the Figma URL to extract `fileKey` and `nodeId`
2. Call `mcp_Figma_get_metadata` on the root node/page to understand structure
3. Identify key pages/frames that contain design system elements:
   - Design tokens pages (colors, typography, spacing)
   - Component libraries
   - Pattern examples

### Step 2: Extract Design Tokens

**Colors:**
- Use `mcp_Figma_get_variable_defs` to extract color variables
- Also scan design context for color usage in components
- Identify semantic color names (primary, secondary, success, error, etc.)
- Extract hex values and map to Tailwind color names

**Typography:**
- Extract font families, sizes, weights, line heights from text styles
- Map to Tailwind typography scale
- Identify heading and body text patterns

**Spacing:**
- Extract spacing values from component padding/margins
- Identify spacing scale (4px, 8px, 16px, etc.)
- Map to Tailwind spacing scale

**Border Radius:**
- Extract border radius values from components
- Map to Tailwind rounded utilities

**Shadows/Elevation:**
- Extract shadow styles and elevation patterns
- Map to Tailwind shadow utilities

### Step 3: Extract Components

1. Use `mcp_Figma_get_design_context` on component nodes
2. Identify:
   - Component names and variants
   - Props/variants (size, state, style)
   - Composition structure
   - Usage patterns

3. Document:
   - Component API (props, variants)
   - Tailwind class patterns
   - Composition rules
   - Do's and don'ts

### Step 4: Extract Patterns

Identify common patterns:
- Layout patterns (cards, forms, modals, navigation)
- Interaction patterns (hover states, transitions)
- Content patterns (headings, lists, tables)
- Responsive patterns

## Design System Output Format

Generate design system documentation following this structure:

```markdown
---
name: {project-name}-design-system
description: Design system extracted from Figma design {figma-url}
source: {figma-url}
---

# Design System Rules

## Design Tokens

### Colors
- Primary: `var(--color-primary)` / `bg-primary` / `#HEX`
- Secondary: `var(--color-secondary)` / `bg-secondary` / `#HEX`
[Semantic color mapping]

### Typography
- Headings: Use `text-heading` / `text-{size}` classes
- Body: Use `text-body` / `text-base` classes
[Font families, sizes, weights]

### Spacing
- Use spacing scale: `space-{1-8}` / `p-{1-8}` / `m-{1-8}`
[Spacing scale mapping]

### Border Radius
- Default: `rounded-md` (8px)
- Large: `rounded-lg` (12px)
[Radius scale]

### Shadows
- Elevation 1: `shadow-sm`
- Elevation 2: `shadow-md`
[Shadow scale]

## Components

### Button
- Use `@/components/ui/Button` component
- Variants: primary, secondary, outline, ghost
- Sizes: sm, md, lg
- Tailwind classes: `btn btn-{variant} btn-{size}`

### Input
- Use `@/components/ui/Input` component
- States: default, focus, error, disabled
- Tailwind classes: `input input-{state}`

[Component specifications for each identified component]

## Patterns

### Cards
- Padding: `p-4` (16px)
- Border radius: `rounded-lg` (12px)
- Shadow: `shadow-md`
- Spacing between cards: `gap-4` (16px)

### Forms
- Vertical spacing between fields: `space-y-6` (24px)
- Label spacing: `mb-2` (8px)
- Error message spacing: `mt-1` (4px)

### Modals
- Max width: `max-w-md` (448px) on desktop
- Padding: `p-6` (24px)
- Backdrop: `bg-black/50`

[Pattern specifications]

## Files to Reference
- `src/components/ui/Button.tsx` - Button component implementation
- `src/components/ui/Input.tsx` - Input component implementation
- `tailwind.config.js` - Tailwind configuration with design tokens
- `src/styles/tokens.css` - CSS custom properties for design tokens

## Usage Guidelines
- Always use design system components, never create custom UI elements
- Follow spacing and typography scales consistently
- Use semantic color names, not raw hex values
- Maintain component composition patterns
```

## Tailwind CSS Mapping

Map Figma design tokens to Tailwind CSS:

**Colors:**
- Create semantic color names in `tailwind.config.js`
- Use `bg-{color}`, `text-{color}`, `border-{color}` utilities
- Support opacity modifiers: `bg-primary/50`

**Spacing:**
- Map to Tailwind's default scale (4px increments) or custom scale
- Use `p-{n}`, `m-{n}`, `gap-{n}`, `space-{n}` utilities

**Typography:**
- Configure font families in `tailwind.config.js`
- Use `text-{size}`, `font-{weight}`, `leading-{size}` utilities

**Components:**
- Document Tailwind class patterns for each component
- Include variant combinations
- Specify responsive breakpoints

## Project Detection

When no explicit framework is mentioned:
1. Check for `package.json` to detect React + Tailwind setup
2. Look for `tailwind.config.js` or `tailwind.config.ts`
3. Check for component library structure (`@/components/ui`)
4. Default to React + Tailwind CSS if unclear

## Output Files

Generate these files as needed:

1. **Design System Documentation** (`DESIGN_SYSTEM.md`)
   - Complete design system specification
   - Use the template structure above

2. **Tailwind Config** (`tailwind.config.js` or `tailwind.config.ts`)
   - Design token configuration
   - Custom color palette
   - Typography settings
   - Spacing scale

3. **CSS Variables** (`src/styles/tokens.css` or similar)
   - CSS custom properties for design tokens
   - Fallback values

4. **Component Specifications** (included in DESIGN_SYSTEM.md)
   - Detailed component documentation
   - Usage examples

## Best Practices

1. **Comprehensive Extraction**: Extract all design tokens, not just what's visible in the current view
2. **Semantic Naming**: Use semantic names (primary, secondary) rather than descriptive names (blue-500)
3. **Consistency**: Ensure spacing, typography, and color scales are consistent
4. **Component Variants**: Document all component variants and states
5. **Pattern Documentation**: Include both visual patterns and code patterns
6. **Reference Files**: Always include file paths to actual implementations when available

## Error Handling

- If Figma URL is invalid, prompt user for correct URL
- If node ID is missing, use page-level extraction
- If design tokens are not found, extract from component usage
- If components are not clearly defined, document patterns instead

## References

When working with Figma designs, reference these files as needed:

- **Figma MCP Usage**: See `references/figma-mcp-guide.md` for detailed Figma MCP tool usage, URL parsing patterns, and extraction workflows
- **Design System Template**: See `assets/design-system-template.md` for the complete design system documentation template structure
- **Tailwind Mapping**: See `references/tailwind-mapping.md` for detailed Tailwind CSS mapping guidelines, token conversion patterns, and component class structures

## Helper Scripts

- **URL Parser**: `scripts/parse_figma_url.py` - Utility script to parse Figma URLs and extract file key and node ID for MCP API calls
  ```bash
  python scripts/parse_figma_url.py "https://figma.com/design/pqrs/ExampleFile?node-id=1-2"
  ```
