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
	import { Field, Switch, Card } from 'svelte-ux';

	import GeoDebug from '$lib/docs/GeoDebug.svelte';
	import Preview from '$lib/docs/Preview.svelte';
	import TilesetField from '$lib/docs/TilesetField.svelte';

	export let data;

	let serviceUrl: ComponentProps<GeoTile>['url'];
	let zoomDelta = 0;
	let debug = false;

	const initialLongitude = 66.925;
	const initialLatitude = 37.9881;
	const initialZoom = 1500;
	const initialTranslate: [number, number] = [0, 0];

	let debugTooltip = false;

	import { onMount } from 'svelte';

	let showModal = false;

	// Function to open the modal
	function openModal() {
		showModal = true;
		document.body.style.overflow = 'hidden'; // Disable scrolling
	}

	// Function to close the modal
	function closeModal() {
		showModal = false;
		document.body.style.overflow = 'auto'; // Enable scrolling
	}
</script>

<main class="p-4">
	<div class="m-4">
		<div class="flex justify-between items-end flex-row mb-4">
			<Card>
				<div class="p-2 space-y-2">
					<h1 class="text-3xl">14 Peaks</h1>
					<h3 class="italic">The world's 8000 meter peaks</h3>
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
		<div class="flex flex-col lg:flex-row gap-4 mt-4">
			<div class="flex flex-col gap-4">
				<Card class="">
					<div class="m-4">
						<p>
							The 14 peaks over 8000 meters in height, also known as the 8000ers, are a group of
							mountains that are all 8000 meters or higher in height. The 14 peaks are all located
							in the Himalayas and Karakoram mountain ranges in Asia. Mount Everest, the highest
							peak in the world, is also the most frequently climbed of the 14 peaks but also the
							least deadly. K2 is the second highest peak in the world and is considered the most
							difficult and dangerous of the 14 peaks to climb.
						</p>
					</div>
				</Card>
				<img
					class="rounded-md"
					src="https://www.earths-edge.com/wp-content/uploads/2019/03/iStock-636019160.jpg"
					alt=""
				/>
			</div>
			<button on:click={openModal}>
				<img
					class="rounded-md h-full w-full object-cover hover:scale-105 transition-transform"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/K2%2C_Mount_Godwin_Austen%2C_Chogori%2C_Savage_Mountain.jpg/1200px-K2%2C_Mount_Godwin_Austen%2C_Chogori%2C_Savage_Mountain.jpg"
					alt="K2"
				/>
			</button>
		</div>
		<div class="flex flex-col lg:flex-row gap-4 mt-4">
			<Card class="">
				<p class="m-4">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas labore dolores
					dignissimos ut, illum enim id quia, accusantium quod hic dolorem optio esse earum ad culpa
					maiores eos ea quibusdam.
				</p>
			</Card>
			<Card class="">
				<p class="m-4">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas labore dolores
					dignissimos ut, illum enim id quia, accusantium quod hic dolorem optio esse earum ad culpa
					maiores eos ea quibusdam.
				</p>
			</Card>
			<Card class="">
				<p class="m-4">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas labore dolores
					dignissimos ut, illum enim id quia, accusantium quod hic dolorem optio esse earum ad culpa
					maiores eos ea quibusdam.
				</p>
			</Card>
		</div>
		<div class="h-[30vh]"></div>
	</div>
</main>

{#if showModal}
	<div
		class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
		on:click={closeModal}
	>
		<div class="relative">
			<!-- Image in the modal -->
			<img
				class="rounded-md max-h-[90vh] max-w-[90vw] object-contain"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/K2%2C_Mount_Godwin_Austen%2C_Chogori%2C_Savage_Mountain.jpg/1200px-K2%2C_Mount_Godwin_Austen%2C_Chogori%2C_Savage_Mountain.jpg"
				alt="K2"
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
