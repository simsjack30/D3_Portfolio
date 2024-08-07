<script lang="ts">
	import { geoNaturalEarth1 } from 'd3-geo';
	import { feature } from 'topojson-client';
	import { Field, Switch, Card } from 'svelte-ux';

	import { Chart, GeoPoint, Svg, Text } from 'layerchart';

	export let data;

	const countries = feature(data.world.geojson, data.world.geojson.objects.countries);

	let debugTooltip = true;
</script>

<main class="p-4">
	<div class="grid grid-cols-[1fr,auto] gap-2 items-end">
		<h2>World Capitals</h2>
		<div class="mb-2">
			<Field dense let:id>
				<label class="flex gap-2 items-center text-sm" for={id}>
					Show Voronoi
					<Switch bind:checked={debugTooltip} {id} />
				</label>
			</Field>
		</div>
	</div>
	<h1 class="text-2xl font-bold">World Test</h1>
	<div class="m-4">
		<div class="h-[600px]">
			<Chart
				data={data.world.capitals}
				x="longitude"
				y="latitude"
				geo={{
					projection: geoNaturalEarth1,
					fitGeojson: countries
				}}
				tooltip={{ mode: 'voronoi', debug: debugTooltip }}
				let:tooltip
			>
				<Svg>
					<g class="points pointer-events-none">
						{#each data.world.capitals as capital}
							<GeoPoint
								lat={capital.latitude}
								long={capital.longitude}
								r="1"
								class="fill-white stroke-primary"
							/>

							{#if tooltip.data}
								<GeoPoint lat={tooltip.data.latitude} long={tooltip.data.longitude} spring>
									<circle r="4" class="stroke-primary/50 fill-none" />
									<Text
										y="-6"
										value={tooltip.data.label}
										textAnchor="middle"
										class="text-[8px] stroke-surface-100 [stroke-width:2px]"
									/>
								</GeoPoint>
							{/if}
						{/each}
					</g>
				</Svg>
			</Chart>
		</div>
	</div>
</main>
