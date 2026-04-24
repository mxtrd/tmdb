# Architecture Context (RTK + FSD Segments)

This document records the agreed architecture baseline for this project.

## Source References

- RTK style guide recommendation:
  - [Structure Files as Feature Folders with Single-File Logic](https://redux.js.org/style-guide/#structure-files-as-feature-folders-with-single-file-logic)
- Layer segmentation idea:
  - inspired by FSD, but used in a reduced form for this project

## Agreed Architecture Approach

The project uses the RTK-oriented folder model:

- `src/app` - global app setup and app-level composition
- `src/common` - shared, generic building blocks (reusable UI, routing helpers, utils, etc.)
- `src/features` - feature folders with colocated logic

Inside each feature folder, we keep the structure lightweight and use only FSD-style segments:

- `ui` - presentation components and feature styles
- `api` - requests, DTO/types for backend communication, mapping helpers
- `model` - feature state, schemas, business logic
- `lib` - internal helpers used by this feature
- `config` - feature-level config and flags

Important: this is **not full FSD**. Only the segment split is used to keep features organized.

## Current Baseline in `src`

Current top-level folders:

- `src/app`
- `src/common`
- `src/features`

Current initialized feature folders:

- `src/features/playlists`
- `src/features/tracks`

## Practical Rules (No Overengineering)

- Keep one task per branch and avoid large architectural refactors.
- Create segments only when needed; do not generate empty folders preemptively.
- Keep Redux/RTK logic close to its feature.
- Prefer simple imports and clear ownership over strict architectural ceremony.

## Component Props Convention

To keep component signatures consistent across the codebase, use this props style:

- Define props via a local `type Props = { ... }` (or `type <ComponentName>Props = { ... }` when helpful).
- Declare component as `const Component = (props: Props) => { ... }`.
- Destructure props inside the function body, not in the function parameter list.

Example:

```tsx
type Props = {
  value: string
}

export const Example = (props: Props) => {
  const { value } = props
  return <div>{value}</div>
}
```
