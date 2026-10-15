# Fibo Store

Standalone retail demo built entirely with [FiboUI](https://github.com) fluent builders — no JSX in the product UI.

Studio merch for builders: wear, desk, and print. Catalog → product → cart → checkout → success.

## Architecture

```
src/
  app/              Composition root (App mount)
  domain/           Pure catalog/cart/checkout types + product data
  application/      Signals, actions (use-cases), selectors
  design/           Tokens, theme, retail CSS skin
  ui/
    shell/          StoreApp, header, footer, screen stage
    catalog/        Banner, search, categories, grid, cards
    product/        Product detail
    cart/           Bag
    checkout/       Checkout + success
    shared/         Pressable helpers
```

| Layer | Responsibility |
| --- | --- |
| **domain** | Product catalog, money helpers, cart/checkout types. No UI. |
| **application** | FiboUI `signal`s + mutations + derived selectors. |
| **design** | Brand tokens + `extendTheme(noirTheme)`. |
| **ui** | Screen builders only. Import application + design. |

## Scripts

```bash
npm install
npm run dev        # http://127.0.0.1:5180
npm run typecheck
npm run build
```

## Stack

- FiboUI 2.4 · React 18 · Vite 5 · TypeScript
