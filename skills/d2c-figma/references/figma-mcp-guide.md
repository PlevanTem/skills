# Figma MCP Tool Usage Guide

This guide provides detailed instructions for using Figma MCP tools to extract design information for D2C conversion.

## Available Figma MCP Tools

### 1. Get Design Context (`mcp_Figma_get_design_context`)

**Purpose**: Extract comprehensive design information including code, assets, and component structure.

**Parameters**:
- `fileKey` (required): The Figma file key extracted from URL
- `nodeId` (required): Node ID in format `1:2` (convert from URL format `1-2`)
- `clientLanguages`: Comma-separated list (e.g., `javascript,typescript`)
- `clientFrameworks`: Comma-separated list (e.g., `react`)

**Usage**:
```python
# Extract fileKey and nodeId from URL
# URL: https://figma.com/design/pqrs/ExampleFile?node-id=1-2
# fileKey: pqrs
# nodeId: 1:2 (convert dash to colon)

result = mcp_Figma_get_design_context(
    fileKey="pqrs",
    nodeId="1:2",
    clientLanguages="javascript,typescript",
    clientFrameworks="react"
)
```

**Returns**: Design context with code, assets download URLs, and metadata.

**When to use**:
- Getting complete component structure
- Extracting component code
- Getting asset download URLs
- Understanding component composition

### 2. Get Variable Definitions (`mcp_Figma_get_variable_defs`)

**Purpose**: Extract design tokens (colors, spacing, typography variables).

**Parameters**:
- `fileKey` (required): The Figma file key
- `nodeId` (required): Node ID in format `1:2`

**Usage**:
```python
variables = mcp_Figma_get_variable_defs(
    fileKey="pqrs",
    nodeId="1:2"
)
# Returns: {'icon/default/secondary': '#949494', 'color/primary': '#0066FF', ...}
```

**Returns**: Dictionary mapping variable names to values (colors as hex, spacing as numbers, etc.).

**When to use**:
- Extracting color tokens
- Extracting spacing scale
- Extracting typography tokens
- Getting design system variables

### 3. Get Metadata (`mcp_Figma_get_metadata`)

**Purpose**: Get structural overview of nodes (types, positions, sizes, hierarchy).

**Parameters**:
- `fileKey` (required): The Figma file key
- `nodeId` (required): Node ID (can be page ID like `0:1`)

**Usage**:
```python
metadata = mcp_Figma_get_metadata(
    fileKey="pqrs",
    nodeId="0:1"  # Page-level node
)
```

**Returns**: XML structure with node hierarchy, types, names, positions, sizes.

**When to use**:
- Understanding page structure
- Finding component locations
- Identifying design system pages
- Navigating design file hierarchy

### 4. Get Code Connect Map (`mcp_Figma_get_code_connect_map`)

**Purpose**: Check if components are mapped to code implementations.

**Parameters**:
- `fileKey` (required): The Figma file key
- `nodeId` (required): Component node ID
- `codeConnectLabel` (optional): Framework label (e.g., `React`)

**Usage**:
```python
mapping = mcp_Figma_get_code_connect_map(
    fileKey="pqrs",
    nodeId="123:456",
    codeConnectLabel="React"
)
# Returns: {'123:456': {'codeConnectSrc': '...', 'codeConnectName': 'Button'}}
```

**When to use**:
- Checking if components already have code mappings
- Finding existing component implementations
- Understanding component-to-code relationships

### 5. Get Screenshot (`mcp_Figma_get_screenshot`)

**Purpose**: Generate visual screenshot of a node.

**Parameters**:
- `fileKey` (required): The Figma file key
- `nodeId` (required): Node ID

**When to use**:
- Visual reference for documentation
- Comparing design vs implementation
- Creating design system visual guides

## URL Parsing Patterns

### Standard Figma URL
```
https://figma.com/design/{fileKey}/{fileName}?node-id={nodeId}
```

Example:
```
https://figma.com/design/pqrs/ExampleFile?node-id=1-2
```
- `fileKey`: `pqrs`
- `nodeId`: Convert `1-2` to `1:2` for API calls

### Branch URL
```
https://figma.com/design/{fileKey}/branch/{branchKey}/{fileName}?node-id={nodeId}
```

Example:
```
https://figma.com/design/pqrs/branch/abc123/ExampleFile?node-id=1-2
```
- `fileKey`: Use `branchKey` (`abc123`) as the fileKey
- `nodeId`: Convert `1-2` to `1:2`

### URL Without Node ID
If no `node-id` parameter:
- Use page-level extraction (node ID `0:1` for first page)
- Or prompt user for specific node ID

## Extraction Workflow

### Step 1: Parse URL
```python
def parse_figma_url(url):
    """Extract fileKey and nodeId from Figma URL."""
    import re
    
    # Extract fileKey
    file_key_match = re.search(r'/design/([^/]+)', url)
    file_key = file_key_match.group(1) if file_key_match else None
    
    # Check for branch
    branch_match = re.search(r'/branch/([^/]+)', url)
    if branch_match:
        file_key = branch_match.group(1)
    
    # Extract nodeId
    node_id_match = re.search(r'node-id=([\d-]+)', url)
    node_id = node_id_match.group(1) if node_id_match else None
    
    # Convert node-id format (1-2) to API format (1:2)
    if node_id:
        node_id = node_id.replace('-', ':')
    
    return file_key, node_id
```

### Step 2: Get Page Structure
```python
# Get metadata for page-level understanding
metadata = mcp_Figma_get_metadata(fileKey=file_key, nodeId="0:1")
# Parse XML to find design system pages, component libraries, etc.
```

### Step 3: Extract Design Tokens
```python
# Get variables from design system page
variables = mcp_Figma_get_variable_defs(fileKey=file_key, nodeId=design_system_node_id)

# Process variables
colors = {k: v for k, v in variables.items() if k.startswith('color/')}
spacing = {k: v for k, v in variables.items() if k.startswith('space/')}
typography = {k: v for k, v in variables.items() if k.startswith('text/')}
```

### Step 4: Extract Components
```python
# For each component node
component_context = mcp_Figma_get_design_context(
    fileKey=file_key,
    nodeId=component_node_id,
    clientLanguages="javascript,typescript",
    clientFrameworks="react"
)

# Extract component structure, variants, props from the context
```

## Best Practices

1. **Start with Metadata**: Always get metadata first to understand structure
2. **Page-Level Extraction**: Use page node IDs (`0:1`, `0:2`) for overview
3. **Incremental Extraction**: Extract tokens first, then components, then patterns
4. **Error Handling**: Handle missing node IDs gracefully
5. **Batch Operations**: Extract multiple components in parallel when possible
6. **Cache Results**: Store extracted data to avoid redundant API calls

## Common Patterns

### Finding Design System Pages
```python
# Get page metadata
page_metadata = mcp_Figma_get_metadata(fileKey=file_key, nodeId="0:1")

# Look for pages named:
# - "Design System"
# - "Tokens"
# - "Components"
# - "Foundation"
```

### Extracting Component Variants
```python
# Get component context
context = mcp_Figma_get_design_context(fileKey=file_key, nodeId=component_id)

# Look for variant properties in the context
# Common variant properties: size, state, style, color
```

### Mapping Colors to Tailwind
```python
# Extract color variables
colors = mcp_Figma_get_variable_defs(fileKey=file_key, nodeId=color_page_id)

# Map semantic names to Tailwind
# color/primary -> primary
# color/secondary -> secondary
# color/success -> success
```

## Troubleshooting

**Error: Invalid node ID**
- Ensure node ID format is `1:2` not `1-2`
- Check if node exists in the file

**Error: File not found**
- Verify fileKey is correct
- Check if file is accessible (permissions)

**Missing design tokens**
- Try extracting from component usage instead
- Check if tokens are in a separate file/page
- Look for style definitions in component context

**Component structure unclear**
- Use screenshot to visualize component
- Get design context for parent frames
- Check Code Connect mappings
