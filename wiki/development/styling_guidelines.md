# Styling Guidelines

The CALWC ESC Digital Tools project utilizes Emotion for styling components. This document outlines the guidelines for using Emotion to ensure consistent and maintainable styles throughout the application.

## Using Emotion

Emotion allows for CSS-in-JS styling, offering a powerful way to style components directly within JavaScript files:

```typescript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const exampleStyle = css`
  background-color: #FBFBFB;
  transition: background-color 0.3s ease;
`;
```

## Best Practices

1. **Component-Level Styles**: Define styles within the component file for encapsulation and modularity.
2. **Dynamic Styles**: Leverage props and state to dynamically update styles.
3. **Reusable Styles**: Create shared style snippets for common patterns.

## Example

Here is an example of a component styled with Emotion:

```typescript
// components/Landing/HeroSection.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const heroSectionStyle = css`
  display: flex;
  justify-content: space-around;
  ...
`;

const HeroSection = () => (
  <div css={heroSectionStyle}>...</div>
);

export default HeroSection;
```

## Conclusion

By following these styling guidelines with Emotion, developers can create visually consistent and maintainable components within the CALWC ESC Digital Tools project.
