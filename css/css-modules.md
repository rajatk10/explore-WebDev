# CSS Modules

CSS Modules keep class names local to a component while retaining normal CSS syntax.

## Example

`Card.module.css`

```css
.card {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
}

.featured {
  border-color: #2563eb;
}
```

React usage:

```jsx
import styles from "./Card.module.css";

export function Card({ featured = false }) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      Content
    </article>
  );
}
```

## Revision notes

- Use the `.module.css` naming convention supported by the build tool.
- Import the stylesheet as an object; use `styles.className`.
- Global selectors are possible but should be intentional.
- Keep shared tokens and global resets in a regular global stylesheet.
- CSS Modules are useful when styles are complex or need pseudo-selectors and animations.
