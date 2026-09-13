# TypeScript 101

Hands-on TypeScript learning project using [Bun](https://bun.sh) as the runtime and package manager.

## Setup

```bash
bun install
```

## Running files

```bash
bun run index.ts                    # entry point
bun practise/hello-world.ts         # hello world
bun practise/module101.ts           # fundamentals
bun practise/module102.ts           # OOP & advanced types
```

## Practice Modules

### `practise/hello-world.ts`
Entry-level script — declares a typed `string` variable and logs it. Good starting point for verifying your setup.

### `practise/module101.ts` — Fundamentals

| Module | Topics |
|--------|--------|
| 1 | Primitive types: `string`, `number`, `boolean`, arrays, objects, function types |
| 2 | Special types: `any`, `unknown`, `never`, `null`, `undefined`, `symbol` |
| 3 | Functions with typed parameters and return types; arithmetic operations |
| 4 | String built-in methods: `length`, `toUpperCase`, `substring`, `replace`, `charAt`, `indexOf` |
| 5 | Array built-in methods: `reverse`, `sort`, `slice`, `filter`, `map` |
| 6 | Anonymous functions and arrow (lambda) functions |

### `practise/module102.ts` — OOP & Advanced Types

| Module | Topics |
|--------|--------|
| 1 | Classes — constructors, instance/static/protected/private members |
| 2 | Interfaces — defining contracts; `implements` and `extends` (inheritance) |
| 3 | Enums — numeric enums with auto-incrementing values, reverse mapping |
| 4 | Generics — type-safe reusable functions (`firstElement<T>`) |
| 5 | Namespaces — code segmentation to avoid polluting the global scope |

> Several examples are commented out inside the module files. Uncomment a block to run and observe its output.

## Stack

- Runtime & package manager: [Bun](https://bun.sh) v1.3.14+
- Language: TypeScript 5 (strict mode)
