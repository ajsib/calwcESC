# Component Structure

The CALWC ESC Digital Tools project adopts a highly modular approach to component development. This document details the structure and organization of components within the project.

## Principles

1. **Modularity**: Each component should be self-contained, with a single responsibility.
2. **Reusability**: Components are designed to be reusable across the application.
3. **Simplicity**: Aim for minimalistic components with clear functionality.

## Page Components

Page components (`front/pages`) serve as the scaffold for each page. They import and assemble other components without containing complex logic:

```typescript
// Example: pages/index.tsx
import Header from '@/components/Shared/Header/Header';
import HeroSection from '@/components/Pages/Landing/Hero/HeroSection';
...

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      ...
    </>
  );
}
```

## Reusable Components

Components under `front/components` are divided into specific types, with a clear structure:

- **Pages**: Specific to individual pages, further organized by page name.
- **Shared**: Common components used across different pages.
- **UI**: Generic UI components, such as buttons and cards.

Components are structured to facilitate ease of use and modification:

```typescript
// Example: components/UI/Card.tsx
import { ReactNode } from 'react';
import { css } from '@emotion/react';

const Card = ({ children }: { children: ReactNode }) => (
  <div css={css`...`}>{children}</div>
);

export default Card;
```

## Important Considerations

1. **Component Naming**: Use clear and descriptive names for components.
2. **File Structure**: Keep components in their respective directories, with a clear hierarchy.
3. **Component Size**: Aim for small, focused components with minimal complexity.
4. **Comments**: Aim for self-explanatory code, but add comments where necessary, ensure that the location of the file is commented at the top of the file.

## Conclusion

By adhering to these guidelines, developers can create coherent and modular components that contribute to the maintainability and scalability of the project.
