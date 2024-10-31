// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({

			title: 'KrzakiPudło 2',
			social: {
				github: 'https://github.com/mr00k3/KrzakiPudlo2-webpage',
			},
			sidebar: [
				{
					label: 'How 2 install',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Wybór launchera', slug: 'guides-install/launchers' },
						{ label: 'CurseForge App', slug: 'guides-install/curseforge' },
						{ label: 'Crystal Launcher', slug: 'guides-install/crystallauncher' },
						{ label: 'Minecraft Launcher', slug: 'guides-install/minecraft-launcher' },
					],
				},
				{
					label: 'Mody, Wymiary, Zasady',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Zasady', slug: 'guides/rules' },
						{ label: 'Mody, Wymiary', slug: 'guides/mods-etc' },
						{ label: 'Wymagania', slug: 'guides/reqs' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
