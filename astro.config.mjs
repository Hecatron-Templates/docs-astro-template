// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import Icons from 'starlight-plugin-icons';
import starlightThemeTerminal from 'starlight-theme-terminal';
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightAutoDrafts from 'starlight-auto-drafts'
import starlightAutoSidebar from 'starlight-auto-sidebar'
import { generateSidebarGroups } from './src/sidebar_grps.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Hecatronic.3DPrinter.Voron',
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
            label: 'Filament',
            icon: 'open-book',
            link: '/filament/',
            //items: [{ label: 'Filament2', autogenerate: { directory: 'filament' }, }],
	    items: generateSidebarGroups('filament/', './src/content/docs/filament'),
          },
          {
            label: 'Guides',
            icon: 'open-book',
            link: '/guides/',
            items: [{ label: 'Guides2', autogenerate: { directory: 'guides' }, }],
          },
        ]),
        starlightAutoDrafts(),
      ],
    }),
  ],
});
