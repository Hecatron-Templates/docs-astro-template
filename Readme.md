# Readme

This is a documentation template using astro and some plugins / starlight themes

## theme

The main theme is a combination of starlight and the Starlight Terminal addon

  * https://starlight.astro.build/
  * https://starlight.astro.build/resources/themes/#_top
  * https://madlinux7.github.io/starlight-theme-terminal/examples/asides/

## Plugins

  * https://starlight-auto-drafts.netlify.app
  * https://starlight-sidebar-topics.netlify.app/
  * https://starlight-auto-sidebar.netlify.app

## Navigcation

The navigation is setup to use starlight-sidebar-topics
Also there is a custom function within ./src/sidebar_grps.mjs to auto generate group entries into a sidebar
see astro.config.mjs for usage
this should help automate the generation of navigation groups for a given top level topic

## Content

The content is stored within `src/content/docs/`
This can ether be a .mdx or .md file for markdown
Images can be added to `src/assets/` and embedded in Markdown with a relative link.

## Commands

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## TODO

  * https://ryanwelch.co.uk/blog/useful-markdown-plugins-astro/
  * github integration
