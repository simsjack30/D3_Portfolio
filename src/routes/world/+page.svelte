<script lang="ts">
	import { geoAlbersUsa, geoNaturalEarth1 } from 'd3-geo';
	import { feature } from 'topojson-client';
	import { Field, Switch } from 'svelte-ux';

	import { Canvas, Chart, GeoPath, GeoPoint, Svg, Text, Tooltip, TooltipItem } from 'layerchart';
	import Preview from '$lib/docs/Preview.svelte';

	export let data;

	const states = feature(data.us.geojson, data.us.geojson.objects.states);

	let debugTooltip = false;
</script>

<main class="p-4">
	<div class="m-4">
		<Preview data={states} class="overflow-hidden">
			<div class="h-[600px]">
				<Chart
					data={data.us.airports}
					x="longitude"
					y="latitude"
					geo={{
						projection: geoNaturalEarth1,
						fitGeojson: states
					}}
					tooltip={{ mode: 'voronoi', debug: debugTooltip }}
					let:tooltip
				>
					<Svg>
						<g class="states">
							{#each states.features as feature}
								<GeoPath
									geojson={feature}
									class="fill-surface-content/10 stroke-surface-100 hover:fill-surface-content/20"
								/>
							{/each}
						</g>

						<g class="points pointer-events-none">
							{#each data.us.airports as airport}
								<GeoPoint
									lat={airport.latitude}
									long={airport.longitude}
									r={1}
									class="fill-primary"
								/>
							{/each}

							{#if tooltip.data}
								<GeoPoint
									lat={tooltip.data.latitude}
									long={tooltip.data.longitude}
									r={4}
									class="stroke-primary/50 fill-none"
									spring
								/>
							{/if}
						</g>
					</Svg>

					<Tooltip header={(d) => d.name} let:data>
						<TooltipItem label="Latitude" value={data.latitude} format="decimal" />
						<TooltipItem label="Longitude" value={data.longitude} format="decimal" />
					</Tooltip>
				</Chart>
			</div>
		</Preview>
	</div>
</main>
