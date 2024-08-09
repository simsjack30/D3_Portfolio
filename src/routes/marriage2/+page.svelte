<script lang="ts">
	import { index } from 'd3-array';

	import { geoIdentity, type GeoProjection } from 'd3-geo';
	import { feature } from 'topojson-client';

	import { Chart, GeoPath, Svg, Tooltip } from 'layerchart';

	import Preview from '$lib/docs/Preview.svelte';

	export let data;
	const states = feature(data.geojson, data.geojson.objects.states);
	const counties = feature(data.geojson, data.geojson.objects.counties);

	const projection = geoIdentity as unknown as () => GeoProjection;

	const statesById = index(states.features, (d) => d.id);

	const population = data.population.map((d) => {
		return {
			id: d.state + d.county,
			state: statesById.get(d.state)?.properties.name,
			population: +d.DP05_0001E,
			populationUnder18: +d.DP05_0019E,
			percentUnder18: +d.DP05_0019PE
		};
	});

	const populationByFips = index(population, (d) => d.id);

	const enrichedCountiesFeatures = counties.features.map((feature) => {
		return {
			...feature,
			properties: {
				...feature.properties,
				data: populationByFips.get(feature.id as string)
			}
		};
	});
</script>

<main>
	<Preview data={states}>
		<div class="h-[600px] overflow-hidden">
			<Chart
				geo={{
					projection,
					fitGeojson: states
				}}
				padding={{ top: 60 }}
				let:tooltip
			>
				<Svg>
					<g>
						{#each enrichedCountiesFeatures as feature}
							<GeoPath
								geojson={feature}
								{tooltip}
								fill="white"
								class="stroke-none hover:stroke-black"
							/>
						{/each}
					</g>
				</Svg>
				<Tooltip header={(data) => data.properties.name}></Tooltip>
			</Chart>
		</div>
	</Preview>
</main>
