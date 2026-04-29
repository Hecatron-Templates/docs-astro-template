// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import Icons from 'starlight-plugin-icons';
import starlightThemeTerminal from 'starlight-theme-terminal';
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightAutoDrafts from 'starlight-auto-drafts'
import starlightAutoSidebar from 'starlight-auto-sidebar'
import { generateSidebarGroups } from './src/sidebar_grps.mjs';
import starlightThemeSix from '@six-tech/starlight-theme-six';



// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Template Docs Page',
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Hecatron-Cad/3DPrinter.Voron.git' }],
      plugins: [
	starlightThemeTerminal(),
	//starlightAutoSidebar(),
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
