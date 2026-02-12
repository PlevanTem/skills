---
name: image-template-extraction
description: "Reverse-engineer visual designs into structured, quantifiable 'design ontologies' for high-fidelity reproduction using Seedream 4.5. Eliminates the need for LoRA training by capturing style, layout, and design intent in a precise JSON format."
---

# Image Template Extraction (Lovart Style)

This skill enables the extraction of a "design ontology" from a reference image. It decomposes a visual composition into a structured set of parameters that can be used by advanced generative models (specifically Seedream 4.5) to reproduce the style, layout, and feel without model training.

## Purpose
- **Replace LoRA**: Achieve style transfer via precise prompt engineering and structural constraints.
- **Quantifiable Analysis**: Convert "vibes" into hex codes, ratios, and geometric relationships.
- **Micro-Template Creation**: Generate reusable JSON-based templates for specific visual effects.

## Workflow

### Step 1: Visual Element Analysis
Analyze the image to extract concrete visual data.
- **Colors**: Identify primary, secondary, and accent colors. Extract exact HEX values and estimate coverage percentages.
- **Typography**: specific font families (or closest Google Fonts match), relative scale hierarchies, weight, and line height.
- **Shapes**: Determine dominant geometric primitives, border radii, stroke styles, and fill types.

### Step 2: Layout & Composition Decomposition
Analyze how elements are arranged.
- **Grid System**: Infer the underlying grid (e.g., 12-column, modular, golden ratio).
- **Whitespace**: Measure whitespace distribution (macro vs. micro).
- **Focal Point**: Identify the visual center of gravity.
- **Alignment**: Left/Center/Right/Justified and vertical alignment rules.

### Step 3: Intent & Reproducibility
- **Psychology**: Map visual choices to emotional impact (e.g., "Rounded corners = friendly").
- **Reproducibility Parameters**: Identify the "load-bearing" design choices that *must* be preserved for the style to hold (e.g., "High contrast black & white photography with a single red element").

### Step 4: Generate Design Ontology
Populate the JSON structure below. **All values must be specific and quantifiable.**

## Output Format

Return the analysis in the following JSON block. This structure is critical for the Seedream 4.5 template engine.

```json
{
  "design_ontology": {
    "metadata": {
      "design_type": "string",
      "style": "string",
      "domain": "string"
    },
    "visual_elements": {
      "colors": [
        {
          "role": "primary/secondary/accent",
          "value": "hex or name",
          "psychology": "string",
          "coverage_percentage": "number"
        }
      ],
      "typography": {
        "font_families": ["string"],
        "size_hierarchy": {"level": "size_ratio"},
        "weight_usage": "string",
        "line_height": "number"
      },
      "shapes": [
        {
          "type": "circle/rectangle/triangle/custom",
          "properties": {
            "border_radius": "value",
            "stroke": "value",
            "fill": "value"
          }
        }
      ]
    },
    "layout": {
      "grid_system": "string",
      "alignment": "string",
      "whitespace_distribution": "object",
      "focal_point": "string"
    },
    "design_principles": ["string"],
    "intent": {
      "target_audience": "string",
      "message": "string",
      "emotional_tone": "string"
    },
    "reproducibility_parameters": {
      "key": "quantifiable_value"
    }
  }
}
```

## Guidelines for Quality
1. **Be Specific**: Never say "large text". Say "Title text is 3x the body text size."
2. **Hex Codes**: Always provide estimated Hex codes for colors.
3. **Relationships**: Describe how elements interact (e.g., "Text overlays image with 50% opacity gradient").
4. **Image Model Compatibility**: Use terminology that aligns with advanced generative prompting