# 🏗️ Backstage UI Experiment

This project is intended as an experiment to find the best structure for Backstage open source UI library. There is no plan for now to bring this back to Backstage in its current for nor to publish this library directly.

# Storybook

This repo is using React + Vite and we are using Storybook to test out the different components.

To run Storybook, launch this command:

`npm run storybook`

# Test 1

This version is using MUI System + Base UI. While this version is working well, this is not aligned with MUI's vision to remove MUI system.

- we are using `@mui/system` as the base for the theming system + layout components (Box, Stack, Container, etc.)
- we are using `@mui/base` as unstyled components to insure we have a solid accessible foundation.

### Pros

- Out of the box, we have a solid theming system and layout components similar to what we have today with MUI.
- With Base UI, we can build components the way we want with a solid base.

### Cons

- The MUI team vision is to remove MUI System from MUI v7/8 and move forward with a new theming system.

# Test 2

In this new version we are exploring how to leverage Emotion theming system directly and Base UI.

### Pros

- Since MUI is using Emotion under the hood, we are using it directly and build our theme system on top of it.
- With Base UI, we can build components the way we want with a solid base.

### Cons

- Backstage is heavily using layout components like `Box`, `Stack`, `Container`, etc. We would probably have to fork them from MUI.

# Test 3

Since future versions of MUI will be quite a departure from the current theming system, we are exploring how to build a unique theming system based 100% on CSS variables.
