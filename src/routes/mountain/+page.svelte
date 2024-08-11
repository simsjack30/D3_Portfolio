<script lang="ts">
	import { type ComponentProps } from 'svelte';
	import { geoMercator } from 'd3-geo';

	import {
		Text,
		Chart,
		GeoPoint,
		GeoTile,
		Svg,
		Tooltip,
		TooltipItem,
		TransformControls
	} from 'layerchart';
	import { Field, Switch, Card, Button, Tooltip as TooltipUX } from 'svelte-ux';

	import GeoDebug from '$lib/docs/GeoDebug.svelte';
	import Preview from '$lib/docs/Preview.svelte';
	import TilesetField from '$lib/docs/TilesetField.svelte';

	export let data;

	let serviceUrl: ComponentProps<GeoTile>['url'];
	let zoomDelta = -1;
	let debug = false;

	const initialLongitude = 66.925;
	const initialLatitude = 37.9881;
	const initialZoom = 1500;
	const initialTranslate: [number, number] = [0, 0];

	let debugTooltip = false;

	import { onMount } from 'svelte';
	import { faHome, faLongArrowLeft, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	let showModal = false;
	let modalTitle = '';
	let modalImageUrl = '';

	function openModal(title: string, url: string) {
		modalTitle = title;
		modalImageUrl = url;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}
</script>

<main class="p-2 lg:p-4">
	<div class="m-2 lg:m-4">
		<div class="flex justify-between items-end flex-row mb-4 lg:mb-8 space-x-2">
			<Card class="elevation-none">
				<div class="flex justify-between flex-col p-2 lg:p-4 lg:space-y-2 space-y-1 h-full">
					<h1 class="text-xl lg:text-3xl">14 Peaks</h1>
					<h3 class="text-sm lg:text-lg italic">The world's 8000 meter peaks</h3>
				</div>
			</Card>
			<div class="">
				<div class="">
					<Field dense let:id>
						<label class="flex gap-2 items-center" for={id}>
							Show Voronoi
							<Switch bind:checked={debugTooltip} {id} />
						</label>
					</Field>
				</div>
			</div>
		</div>
		<div class="hidden">
			<TilesetField bind:serviceUrl />
		</div>

		<Preview data={data.peaks}>
			<div class="h-[300px] md:h-[600px] relative overflow-hidden rounded-md">
				<Chart
					data={data.peaks}
					x="longitude"
					y="latitude"
					geo={{
						projection: geoMercator,
						center: [initialLongitude, initialLatitude],
						scale: initialZoom,
						applyTransform: ['translate', 'scale']
					}}
					transform={{
						initialScale: initialZoom,
						initialTranslate: {
							x: initialTranslate[0],
							y: initialTranslate[1]
						},
						translateOnScale: true,
						initialScrollMode: 'scale'
					}}
					tooltip={{ mode: 'voronoi', debug: debugTooltip }}
					let:tooltip
				>
					<TransformControls />

					<Svg>
						<GeoTile url={serviceUrl} {zoomDelta} {debug} />

						<g class="points pointer-events-none">
							{#each data.peaks as peak}
								<GeoPoint
									lat={peak.latitude}
									long={peak.longitude}
									r="10"
									class="fill-black stroke-white stroke-2"
								/>
								{#if tooltip.data}
									<GeoPoint lat={tooltip.data.latitude} long={tooltip.data.longitude} spring>
										<circle r="10" class="stroke-red-600 fill-none stroke-2" />
										<!-- <Text
											y="-20"
											value={tooltip.data.label}
											textAnchor="middle"
											class="text-3xl stroke-black fill-white stroke-2"
										/> -->
									</GeoPoint>
								{/if}
							{/each}
						</g>
					</Svg>
					<Tooltip header={(d) => d.label} let:data>
						<TooltipItem label="Elevation (m)" value={data.height} />
						<TooltipItem label="Summits" value={data.climbed} />
						<TooltipItem label="Deaths" value={data.deaths} />
					</Tooltip>
				</Chart>
			</div>
		</Preview>
		<div class="flex flex-col lg:flex-row gap-4 mt-4 w-full">
			<div class="flex flex-col gap-4 w-full lg:w-2/3">
				<Card class=" text-sm lg:text-base p-2 lg:p-4 elevation-none h-full">
					The 8000-meter peaks represent some of the most formidable challenges in mountaineering.
					Located primarily in the ranges of the Himalayas and the Karakoram, these 14 peaks are
					spread across Nepal, Pakistan, Tibet, and China. Among them are the world-renowned Mount
					Everest, the highest at 8,848 meters, and K2, often referred to as the "Savage Mountain"
					due to its treacherous ascent. These mountains are not just known for their height but
					also for the extreme dangers they pose. Climbers face severe challenges such as
					unpredictable weather, avalanches, and the perilous "death zone," where oxygen levels are
					critically low.
				</Card>
				<button
					class="w-full"
					on:click={() =>
						openModal(
							'Annapurna',
							'https://www.earths-edge.com/wp-content/uploads/2019/03/iStock-636019160.jpg'
						)}
				>
					<img
						class="rounded-md object-cover hover:scale-105 transition-transform"
						src="https://www.earths-edge.com/wp-content/uploads/2019/03/iStock-636019160.jpg"
						alt="8000 Meter Peaks"
					/>
				</button>
			</div>
			<button
				class="w-full lg:w-1/3"
				on:click={() =>
					openModal(
						'K2',
						'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/K2%2C_Mount_Godwin_Austen%2C_Chogori%2C_Savage_Mountain.jpg/1200px-K2%2C_Mount_Godwin_Austen%2C_Chogori%2C_Savage_Mountain.jpg'
					)}
			>
				<img
					class="rounded-md h-full object-cover hover:scale-105 transition-transform"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/K2%2C_Mount_Godwin_Austen%2C_Chogori%2C_Savage_Mountain.jpg/1200px-K2%2C_Mount_Godwin_Austen%2C_Chogori%2C_Savage_Mountain.jpg"
					alt="K2"
				/>
			</button>
		</div>
		<div class="flex flex-col lg:flex-row gap-4 mt-4">
			<Card class=" text-sm lg:text-base p-2 lg:p-4 elevation-none h-full">
				K2's Treacherous Reputation: K2, the second-highest peak in the world at 8,611 meters, is
				often referred to as the "Savage Mountain." Despite being slightly shorter than Mount
				Everest, K2 has a significantly higher fatality rate. For every four climbers who reach the
				summit, one climber does not make it back, making it one of the most dangerous climbs in the
				world.
			</Card>
			<Card class=" text-sm lg:text-base p-2 lg:p-4 elevation-none h-full">
				Annapurna's Deadly History: Annapurna I, standing at 8,091 meters, has the highest fatality
				rate of all the 8000-meter peaks. Historically, about 32% of climbers attempting to reach
				the summit have perished. This high fatality rate is due to the mountain's frequent
				avalanches and treacherous weather conditions.
			</Card>
			<Card class=" text-sm lg:text-base p-2 lg:p-4 elevation-none h-full">
				First Winter Ascents: The first successful winter ascent of Mount Everest, the tallest of
				the 8000-meter peaks, was made on February 17, 1980, by Polish climbers Krzysztof Wielicki
				and Leszek Cichy. Climbing any 8000-meter peak in winter is considered one of the most
				extreme challenges in mountaineering due to the freezing temperatures, high winds, and
				shorter days.
			</Card>
		</div>
	</div>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://en.wikipedia.org/wiki/Eight-thousander"
	>
		<Button variant="fill-outline" color="primary" class="m-2 lg:m-4" rounded>Wikipedia</Button>
	</a>
	<div class="flex flex-row m-2 lg:m-4 gap-2 w-full mx-auto justify-center mt-16">
		<a href="/">
			<Button variant="fill-outline" color="primary" rounded
				><FontAwesomeIcon icon={faLongArrowLeft}></FontAwesomeIcon></Button
			></a
		>
		<a href="/">
			<Button variant="fill-outline" color="primary" rounded
				><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Button
			></a
		>
		<a href="/marriage">
			<Button variant="fill-outline" color="primary" rounded
				><FontAwesomeIcon icon={faLongArrowRight}></FontAwesomeIcon></Button
			></a
		>
	</div>
	<div class="h-[10vh]"></div>
</main>

{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
		on:click={closeModal}
	>
		<div class="relative">
			<!-- Title in the modal -->
			<div class="absolute top-2 left-2 bg-white bg-opacity-50 rounded-full p-1 px-4 text-black">
				{modalTitle}
			</div>

			<!-- Image in the modal -->
			<img
				class="rounded-md max-h-[90vh] max-w-[90vw] object-contain"
				src={modalImageUrl}
				alt={modalTitle}
			/>

			<!-- Close button -->
			<button
				class="absolute top-2 right-2 bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-1"
				on:click={closeModal}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-black"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
	</div>
{/if}
