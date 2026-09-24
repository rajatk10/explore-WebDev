# Tailwind CSS — Quick Guide

Tailwind is a utility-first CSS framework. Compose styles directly with classes instead of creating a selector for every small variation.

## Basic example

```jsx
<button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
  Save
</button>
```

## Common utilities

| Need | Examples |
| --- | --- |
| Spacing | `p-4`, `px-6`, `mt-2`, `gap-4` |
| Typography | `text-sm`, `text-xl`, `font-semibold`, `text-center` |
| Color | `bg-slate-900`, `text-white`, `border-gray-200` |
| Layout | `flex`, `grid`, `items-center`, `justify-between` |
| Sizing | `w-full`, `max-w-md`, `min-h-screen` |
| Shape/effects | `rounded-lg`, `shadow`, `opacity-75` |

## Responsive and state variants

Prefixes apply a utility conditionally:

```jsx
<div className="flex flex-col gap-4 md:flex-row">
  <main className="w-full md:w-2/3">Main</main>
  <aside className="w-full md:w-1/3">Aside</aside>
</div>
```

Useful variants include `hover:`, `focus:`, `disabled:`, `dark:`, `sm:`, `md:`, `lg:`, and `xl:`.

## Conditional classes

```jsx
<button className={active ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"}>
  {active ? "Active" : "Inactive"}
</button>
```

For larger conditions, use a helper such as `clsx` to keep JSX readable.

## Practical rules

- Build from layout → spacing → typography → color → states.
- Prefer existing utilities before adding custom CSS.
- Extract a component when a class list becomes hard to understand or repeats.
- Use arbitrary values sparingly: `w-[37rem]`.
- Keep design tokens and theme customization in the Tailwind configuration or CSS theme layer.
- Use CSS Modules or plain CSS for especially complex animations and selectors.
