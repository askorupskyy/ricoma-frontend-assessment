# Ricoma's take-home frontend assessement

## Overview

Basic store with minimum core functionalities built with NextJs, Typescript, TailwindCSS and Zustand.

## Getting started

Access the figma mockup [here](https://www.figma.com/file/eyST5MG3zGOEb1HEGLIPEW/Developer-Test?node-id=0%3A1). You should be able to
see four screens displaying the same content with multiple user actions to illustrate functionalities and screen sizes.

Run `yarn` to install packages and `yarn dev` to run dev environment.

## Returning test results

Once you complete the assessment, you can host the app (preffered method) online in one of the many hosting services (vercel, netlify...)
and send us the link for review.
The source code should also be hosted in one of the many git hosting providers (github, gitlab...) and a link to the repo must be provided.
If for some reason you can't host your source code online, remove node_modules cached files, zip your source code and send to us.

## Responsabilities

As a store it must implement a cart that allows users to add/update/remove items from the cart.
The application must be responsive as it will be reviewed on different screen sizes. Attention to detail
is a must as the final result must match the mockup as close as possible.

## Dos and Don'ts

| Dos                                                                     | Don'ts                                  |
| :---------------------------------------------------------------------- | :-------------------------------------- |
| Use TailwindCSS                                                         | Don't use a pre-built component library |
| Use plain CSS                                                           | No need to use a preprocessor e.g. Sass |
| Typescript is recommended                                               | You don't have to write Typescript      |
| Use [ Zustand ](https://github.com/pmndrs/zustand) for state management | No need to setup Redux                  |
| Break code into components                                              | Don't write everything on a single file |
| Write idomitic Javascript/Typescript                                    |                                         |
| Remain functional when possible (Avoid bad side effects)                |                                         |

## What's included

### Basic non-dynamic application consisiting of:

---

- src/pages/index.tsx
- src/components/card.tsx
- src/components/cards.tsx
- src/components/footer.tsx
- src/components/header.tsx
- src/components/layout.tsx
- src/styles/\*.css
- src/store/main.store.ts

### Read across the files as we have provided `TODO` annotations with instructions. However, below is a list of what is expected:

---

1. Implement tooltip for `Info` section on each card - done
2. Using the setup provided for the store, implement state management for the cart - done
3. Add cart qty indicator at the cart icon level - done
4. Build carts/cart components replicating UI mockup - done
5. Ensure color selection is dynamic - done
6. Allow users to change color selection from cart level - done
7. Make page responsive following mockup for mobile - done
