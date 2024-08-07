<script lang="ts">
	import {
		AppBar,
		AppLayout,
		Card,
		Button,
		NavItem,
		Tooltip,
		ThemeSwitch,
		settings,
		Icon
	} from 'svelte-ux';

	import {
		faUser,
		faCake,
		faWandMagicSparkles,
		faAppleAlt,
		faAppleWhole,
		faHome,
		faEarth,
		faEarthAsia,
		faMountain,
		faMountainCity,
		faMountainSun,
		faVenusMars,
		faRing
	} from '@fortawesome/free-solid-svg-icons';
	import { faTwitter, faApple, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faChessKing } from '@fortawesome/free-regular-svg-icons';

	import { page } from '$app/stores';
	import '../app.postcss';

	settings({
		components: {
			AppBar: {
				classes: 'bg-secondary text-black shadow-lg'
			},
			AppLayout: {
				classes: {
					nav: 'bg-neutral-800 py-2'
				}
			},
			NavItem: {
				classes: {
					root: 'text-sm text-gray-400 pl-6 py-2 hover:text-white hover:bg-gray-300/10 [&:where(.is-active)]:text-sky-400 [&:where(.is-active)]:bg-gray-500/10'
				}
			}
		}
	});

	// import { Skull, Rabbit } from 'lucide-svelte';
</script>

<AppLayout>
	<svelte:fragment slot="nav">
		<NavItem path="/" text="Home" icon={faHome} currentUrl={$page.url} />
		<NavItem path="/mountain" text="8000 Meter Peaks" icon={faMountain} currentUrl={$page.url} />
		<NavItem path="/marriage" text="Marriage Statistics" icon={faRing} currentUrl={$page.url} />
		<NavItem path="/vornoi" text="Vornoi Capitals" icon={faApple} currentUrl={$page.url} />
		<NavItem path="/world" text="Geo Point" icon={faMountainSun} currentUrl={$page.url} />
		<NavItem path="/goober" text="Apple Stocks" icon={faMountainCity} currentUrl={$page.url} />
		<NavItem path="/world_test2" text="Testing" icon={faEarthAsia} currentUrl={$page.url} />
	</svelte:fragment>

	<AppBar title="NYT Showcase">
		<div slot="actions" class="f lex gap-3">
			<ThemeSwitch />
			<Tooltip title="Discord" placement="left" offset={2}>
				<Button icon={faDiscord} href="https://discord.gg/697JhMPD3t" class="p-2" target="_blank" />
			</Tooltip>

			<Tooltip title="Open Twitter / X" placement="left" offset={2}>
				<Button icon={faTwitter} href="https://twitter.com/techniq35" class="p-2" target="_blank" />
			</Tooltip>

			<Tooltip title="View repository" placement="left" offset={2}>
				<Button
					icon={faGithub}
					href="https://github.com/techniq/svelte-ux"
					class="p-2"
					target="_blank"
				/>
			</Tooltip>
		</div>
	</AppBar>
	<slot />
</AppLayout>
