<script>
	import { Button, Card, Icon, Tooltip } from 'svelte-ux';
	import {
		faUser,
		faCake,
		faWandMagicSparkles,
		faHome,
		faLongArrowLeft,
		faLongArrowRight,
		faMountain,
		faRing,
		faChartLine
	} from '@fortawesome/free-solid-svg-icons';
	import { faApple } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<main class="p-4">
	<div
		class="flex flex-col gap-y-4 justify-center items-center w-2/3 mx-auto lg:w-1/2 xl:w-1/3 m-4"
	>
		<Card class="elevation-none p-2 lg:p-4 w-fit">
			<h1 class="text-xl md:text-3xl text-center">Welcome!</h1>
			<h3 class="text-sm md:text-lg italic text-center">Select an experience to explore</h3>
		</Card>
		<div class="flex flex-row justify-center gap-4">
			<Tooltip title="8000 Meter Peaks" placement="top" offset={10}>
				<a href="/mountain">
					<Button variant="fill-outline" color="primary" size="md"
						><FontAwesomeIcon icon={faMountain} size="2x"></FontAwesomeIcon></Button
					></a
				>
			</Tooltip>
			<Tooltip title="US Marriage Stats" placement="top" offset={10}>
				<a href="/marriage">
					<Button variant="fill-outline" color="primary" size="md"
						><FontAwesomeIcon icon={faRing} size="2x"></FontAwesomeIcon></Button
					></a
				>
			</Tooltip>
			<Tooltip title="Intel Stock Crash" placement="top" offset={10}>
				<a href="/stock">
					<Button variant="fill-outline" color="primary" size="md"
						><FontAwesomeIcon icon={faChartLine} size="2x"></FontAwesomeIcon></Button
					></a
				>
			</Tooltip>
		</div>
		<Card class="text-sm lg:text-base elevation-none p-2 lg:p-4">
			I'm Jack Sims, a creative software developer with a passion for data visualization and
			interactive experiences. I built this project using Svelte, the Layer Cake graphics framework,
			and the LayerCharts UI library to bring complex data to life in an engaging way. This site is
			a showcase of my work, where you can explore interactive charts and graphs that highlight
			interesting trends and insights!</Card
		>
		<Card class="elevation-none flex flex-row items-center justify-between gap-4 w-full">
			<div class="text-sm lg:text-base p-2 lg:p-4 w-4/5">
				To see other projects I've worked on, visit my website!
			</div>
			<Button
				href="https://jacksims.dev/"
				class="p-2 m-2"
				target="_blank"
				variant="fill-outline"
				color="primary"
			>
				<!-- <img class="opacity-50" src="android-chrome-512x512_jack.png" alt="" /> -->
				jacksims.dev
			</Button>
		</Card>
	</div>
</main>
