<div align="center">

```
 ███████╗██╗██████╗  ██████╗     ███████╗████████╗ ██████╗ ██████╗ ███████╗
 ██╔════╝██║██╔══██╗██╔═══██╗    ██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝
 █████╗  ██║██████╔╝██║   ██║    ███████╗   ██║   ██║   ██║██████╔╝█████╗
 ██╔══╝  ██║██╔══██╗██║   ██║    ╚════██║   ██║   ██║   ██║██╔══██╗██╔══╝
 ██║     ██║██████╔╝╚██████╔╝    ███████║   ██║   ╚██████╔╝██║  ██║███████╗
 ╚═╝     ╚═╝╚═════╝  ╚═════╝     ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝
```

# Fibo Store

**Studio merch for builders.** Wear · Desk · Print.

A full mini-commerce built only with [FiboUI](https://www.npmjs.com/package/fiboui) fluent builders —  
layout, theme, motion, and signals as method calls. **No JSX in the product UI.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](./tsconfig.json)
[![FiboUI](https://img.shields.io/badge/FiboUI-2.4.4-ff2d8a?style=flat-square)](https://www.npmjs.com/package/fiboui)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![License](https://img.shields.io/badge/license-MIT-0a0a0a?style=flat-square)](#)

<br />

```bash
npm install && npm run dev
# → http://127.0.0.1:5180
```

**Live:** [fiboui-store.vercel.app](https://fiboui-store.vercel.app)

</div>

---

## What you get

| Flow | Screens |
| :--- | :--- |
| **Browse** | Hero banner · search · category tiles · filter toolbar · product grid / bento |
| **Buy** | Product detail · size & qty · bag · free-shipping meter |
| **Checkout** | Shipping · form signals · order success |

Palette locked to the store skin: **ink** `#0a0a0a` · **pink** `#ff2d8a` · **lime** `#c8ff00` · **chalk** `#ffffff`.

---

## Architecture

Clean layers. Dependencies point **inward** — UI never leaks into domain.

```mermaid
flowchart LR
  subgraph app["app"]
    A[App]
  end
  subgraph ui["ui"]
    S[shell]
    C[catalog · product · cart · checkout]
  end
  subgraph application["application"]
    SIG[signals]
    ACT[actions]
    SEL[selectors]
  end
  subgraph domain["domain"]
    CAT[catalog]
    CART[cart]
    CHK[checkout]
  end
  subgraph design["design"]
    T[tokens · theme · skin]
  end
  A --> S
  S --> C
  C --> SIG & ACT & SEL
  C --> T
  ACT --> CAT & CART & CHK
  SEL --> CAT
```

```text
src/
├── app/                 # Composition root — mount only
├── domain/              # Pure types + catalog data (no UI)
│   ├── catalog/         #   products, money, categories
│   ├── cart/            #   line types
│   └── checkout/        #   screen + ship types
├── application/         # Signals · actions · selectors
├── design/              # Tokens · theme · retail CSS skin
└── ui/
    ├── shell/           # StoreApp · header · footer · stage
    ├── catalog/         # Banner · bar · grid · cards · art
    ├── product/         # PDP
    ├── cart/            # Bag
    ├── checkout/        # Checkout + success
    └── shared/          # Press helpers
```

| Layer | Owns | Never owns |
| :--- | :--- | :--- |
| **domain** | Product data, money helpers, cart/checkout types | Signals, builders, CSS |
| **application** | `signal()` state, mutations, derived lists/totals | Layout, theme tokens |
| **design** | Brand tokens, `extendTheme(noirTheme)`, shop skin | Business rules |
| **ui** | Screen builders | Product catalog math |

---

## Taste of the code

```ts
Button('Add to bag')
  .variant('raw')
  .height(48)
  .bg(pink)
  .color(chalk)
  .fontWeight(800)
  .letterSpacing('0.12em')
  .textTransform('uppercase')
  .onPress(() => addToCart())
```

Reactive tree without remounting inputs:

```ts
Box()
  .bindSignal(cart)
  .bindSignal(screen)
  .children(() => [cartChip()])
```

---

## Quick start

```bash
git clone https://github.com/felipeoliveiradev/fibo-store.git
cd fibo-store
npm install
npm run dev
```

| Script | What it does |
| :--- | :--- |
| `npm run dev` | Vite on **5180** |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run build` | Typecheck + production bundle |
| `npm run preview` | Serve `dist/` |

---

## Stack

<p>
  <img src="https://img.shields.io/badge/FiboUI-2.4.4-ff2d8a?style=for-the-badge" alt="FiboUI" />
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

Built as a standalone extract of the FiboUI marketing site shop — same UX, proper boundaries.

---

<div align="center">

**Wear the return.**

`© Fibo Store · powered by FiboUI`

</div>
