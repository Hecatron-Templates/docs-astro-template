// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeTerminal from 'starlight-theme-terminal';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightAutoDrafts from 'starlight-auto-drafts';
import { generateSidebarGroups } from './src/sidebar_grps.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://hecatron-templates.github.io/Astro-Docs-Template/',
  base: '/Astro-Docs-Template',
  integrations: [
    starlight({
      title: 'Template Docs Page',
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Hecatron-Templates/Astro-Docs-Template' }],
      plugins: [
	starlightThemeTerminal(),
        starlightSidebarTopics([
          {
            label: 'Topic1',
            icon: 'open-book',
            link: '/topic1/',
	    items: generateSidebarGroups('topic1/', './src/content/docs/topic1'),
          },
          {
            label: 'Topic2',
            icon: 'open-book',
            link: '/topic2/',
            items: generateSidebarGroups('topic2/', './src/content/docs/topic2'),
          },
          ],
	),
        starlightAutoDrafts(),
      ],
    }),
  ],
});
