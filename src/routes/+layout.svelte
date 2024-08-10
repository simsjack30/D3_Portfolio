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
		Icon,
		getSettings
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
		faRing,
		faChartSimple,
		faChartLine
	} from '@fortawesome/free-solid-svg-icons';
	import { faTwitter, faApple, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faChessKing } from '@fortawesome/free-regular-svg-icons';

	import { page } from '$app/stores';
	import '../app.postcss';

	const { currentTheme } = getSettings();
	currentTheme.setTheme('dark');

	settings({
		components: {
			AppBar: {
				classes: 'bg-primary text-black shadow-lg'
			},
			AppLayout: {
				classes: {
					nav: 'bg-surface-300 py-2'
				}
			},
			NavItem: {
				classes: {
					root: 'text-sm text-surface-content pl-6 py-2 hover:bg-surface-100 [&:where(.is-active)]:text-accent-900 dark:[&:where(.is-active)]:text-primary-50 [&:where(.is-active)]:bg-surface-100'
				}
			}
		}
	});
</script>

<AppLayout>
	<svelte:fragment slot="nav">
		<NavItem path="/" text="Home" icon={faHome} currentUrl={$page.url} />
		<NavItem path="/mountain" text="8000 Meter Peaks" icon={faMountain} currentUrl={$page.url} />
		<NavItem path="/marriage" text="Marriage Statistics" icon={faRing} currentUrl={$page.url} />
		<NavItem path="/stock" text="Intel Stock Crash" icon={faChartLine} currentUrl={$page.url} />
	</svelte:fragment>

	<AppBar title="NYT Showcase">
		<div slot="actions" class="flex gap-3 items-center">
			<!-- <ThemeSwitch
				checked
				classes={{
					switch: 'dark:bg-primary-700 dark:border-primary-900',
					toggle: ''
				}}
			/> -->

			<Tooltip title="Open jacksims.dev" placement="left" offset={2}>
				<Button href="https://jacksims.dev/" class="p-2" target="_blank">
					<img class="w-8 opacity-60" src="android-chrome-512x512_jack.png" alt="" /></Button
				>
			</Tooltip>
		</div>
	</AppBar>
	<slot />
</AppLayout>
