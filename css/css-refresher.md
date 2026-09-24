# CSS Refresher

## Layout checklist

1. **Structure:** identify the elements and their semantic HTML.
2. **Layout:** choose normal flow, Flexbox, or Grid.
3. **Spacing:** use `gap` for layout spacing; use margin for external separation.
4. **Sizing:** prefer flexible units (`%`, `rem`, `fr`, `minmax()`) over fixed widths.
5. **Responsive behavior:** define what changes at smaller widths.

## Core patterns

```css
.stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cluster {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}
```

## Specificity and scope

- Prefer classes over IDs and deeply nested selectors.
- Keep selectors shallow and component-focused.
- Use CSS variables for shared values.
- Treat `!important` as an escape hatch, not a default fix.

```css
:root {
  --color-primary: #2563eb;
  --space-md: 1rem;
}
```

## Responsive reminder

Start with the narrow layout and add enhancements as space becomes available.

```css
.layout { display: block; }

@media (min-width: 48rem) {
  .layout { display: grid; grid-template-columns: 16rem 1fr; }
}
```

## Debugging checklist

- Inspect computed styles and the box model.
- Check whether a parent controls the element's size or positioning.
- Check overflow and stacking contexts when content is hidden or overlapped.
- Check `flex-shrink`, grid constraints, and `min-width: 0` for truncated content.
