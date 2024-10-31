// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mr00k3.github.io',
	base: 'krzakipudlo2webpage',  
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
						{ label: 'Wybór launchera', slug: 'krzakipudlo2webpage/guides-install/launchers' },
						{ label: 'CurseForge App', slug: 'krzakipudlo2webpage/guides-install/curseforge' },
						{ label: 'Crystal Launcher', slug: 'krzakipudlo2webpage/guides-install/crystallauncher' },
						{ label: 'Minecraft Launcher', slug: 'krzakipudlo2webpage/guides-install/minecraft-launcher' },
					],
				},
				{
					label: 'Mody, Wymiary, Zasady',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Zasady', slug: 'krzakipudlo2webpage/guides/rules' },
						{ label: 'Mody, Wymiary', slug: 'krzakipudlo2webpage/guides/mods-etc' },
						{ label: 'Wymagania', slug: 'krzakipudlo2webpage/guides/reqs' },
					],
				},
			],
		}),
	],
});
