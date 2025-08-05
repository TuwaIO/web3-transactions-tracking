# Applications

This directory contains the runnable applications for the TUWA project.

Unlike the `/packages` directory, these are standalone sites (like the documentation and landing page) and are not intended to be published as libraries to npm.

## Included Applications

* **`./main`**: The official landing page and project showcase for the TUWA suite.
* **`./docs`**: The project documentation website, built with Nextra.

## Development

To run any application locally, use the `pnpm --filter` command from the root of the monorepo.

For example, to start the documentation site:

```bash
pnpm --filter docs dev
````