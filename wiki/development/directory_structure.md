# Directory Structure

This document outlines the modular directory structure of the CALWC ESC Digital Tools project. Our structure is designed to promote modularity and ease of navigation, ensuring efficient development practices.

## Overview

The project is divided into key directories, each with a specific purpose:

- `front/pages`: Contains the entry points for the application's pages.
- `front/public`: Stores static assets such as images, fonts, and icons.
- `front/components`: Houses reusable components categorized into Pages, Shared, and UI.

## Guidelines

1. **Page Components**: Located in `front/pages`. Each page component serves as a container that combines various smaller components. Minimal logic is used here, focusing instead on the assembly of components.

2. **Static Assets**: Placed in `front/public`. Organize assets into subdirectories (`fonts`, `icons`, `images`) for clarity.

3. **Reusable Components**: Found in `front/components`, with subcategories for:
   - `Pages`: Page-specific components, further organized by page name.
   - `Shared`: Components used across multiple pages.
   - `UI`: Generic UI components like buttons and cards.

## Adding New Components

When adding new components, consider where they fit within the existing categories. Strive for small, focused files that adhere to the project's modular philosophy.

## Conclusion

This modular directory structure facilitates a clean and organized codebase, making it easier for developers to find and work with the project's components. Adherence to these guidelines ensures a cohesive development experience.
