#!/usr/bin/env python3
"""
Parse Figma URLs to extract file key and node ID for MCP API calls.

Usage:
    python parse_figma_url.py <figma_url>

Example:
    python parse_figma_url.py "https://figma.com/design/pqrs/ExampleFile?node-id=1-2"
"""

import re
import sys
from typing import Optional, Tuple


def parse_figma_url(url: str) -> Tuple[Optional[str], Optional[str]]:
    """
    Extract fileKey and nodeId from Figma URL.
    
    Args:
        url: Figma design URL
        
    Returns:
        Tuple of (file_key, node_id) where node_id is in API format (1:2)
    """
    if not url:
        return None, None
    
    file_key = None
    node_id = None
    
    # Check for branch URL pattern: /design/{fileKey}/branch/{branchKey}/...
    branch_match = re.search(r'/design/([^/]+)/branch/([^/]+)', url)
    if branch_match:
        # Use branchKey as fileKey for branch URLs
        file_key = branch_match.group(2)
    else:
        # Standard URL pattern: /design/{fileKey}/...
        design_match = re.search(r'/design/([^/]+)', url)
        if design_match:
            file_key = design_match.group(1)
    
    # Extract node ID from query parameter
    node_id_match = re.search(r'node-id=([\d-]+)', url)
    if node_id_match:
        # Convert URL format (1-2) to API format (1:2)
        node_id = node_id_match.group(1).replace('-', ':')
    
    return file_key, node_id


def main():
    """CLI entry point."""
    if len(sys.argv) < 2:
        print("Usage: python parse_figma_url.py <figma_url>", file=sys.stderr)
        sys.exit(1)
    
    url = sys.argv[1]
    file_key, node_id = parse_figma_url(url)
    
    if not file_key:
        print("Error: Could not extract file key from URL", file=sys.stderr)
        sys.exit(1)
    
    # Output in format suitable for shell scripts
    print(f"FILE_KEY={file_key}")
    if node_id:
        print(f"NODE_ID={node_id}")
    else:
        print("NODE_ID=")
        print("Note: No node ID found, use page-level extraction (e.g., 0:1)", file=sys.stderr)


if __name__ == '__main__':
    main()
