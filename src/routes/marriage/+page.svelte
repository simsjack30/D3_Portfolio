<script lang="ts">
	import { geoAlbersUsa } from 'd3-geo';
	import { feature } from 'topojson-client';
	import { Chart, GeoPath, Svg, Tooltip, TooltipItem, Legend } from 'layerchart';
	import Preview from '$lib/docs/Preview.svelte';
	import { scaleQuantile } from 'd3-scale';
	import {
		schemeAccent,
		schemeBlues,
		schemeCategory10,
		schemePaired,
		schemePRGn,
		schemePuBu,
		schemeSet3,
		schemeSpectral,
		schemeTableau10
	} from 'd3-scale-chromatic';
	import { Card, SelectField, type MenuOption } from 'svelte-ux';

	export let data;

	const states = feature(data.geojson, data.geojson.objects.states);
	const stateData = data.population;

	const stateDataMap = new Map(stateData.map((d) => [d.stateName, d.data]));

	const enrichedStates = states.features
		.map((feature) => {
			const stateName = feature.properties.name;
			const stateData = stateDataMap.get(stateName);

			return {
				...feature,
				properties: {
					...feature.properties,
					data: stateData
				}
			};
		})
		.filter((feature) => feature.properties.data);

	let numerator = 'Married couple households';
	let denominator = 'Total';

	let numeratorOptions: MenuOption[] = [
		{ label: 'Married couple households', value: 'Married couple households' },
		{ label: 'Opposite-sex-married', value: 'Opposite-sex-married' },
		{ label: 'Same-sex-married', value: 'Same-sex-married' },
		{ label: 'Male householder and male spouse', value: 'Male householder and male spouse' },
		{
			label: 'Female householder and female spouse',
			value: 'Female householder and female spouse'
		},
		{ label: 'Cohabitating couple households', value: 'Cohabitating couple households' },
		{ label: 'Opposite-sex-co', value: 'Opposite-sex-co' },
		{ label: 'Same-sex-co', value: 'Same-sex-co' },
		{ label: 'Male householder and male partner', value: 'Male householder and male partner' },
		{
			label: 'Female householder and female partner',
			value: 'Female householder and female partner'
		}
	];

	let denominatorOptions: MenuOption[] = [
		{ label: 'Total Households', value: 'Total' },
		{ label: 'Married couple households', value: 'Married couple households' },
		{ label: 'Opposite-sex-married', value: 'Opposite-sex-married' },
		{ label: 'Same-sex-married', value: 'Same-sex-married' },
		{ label: 'Male householder and male spouse', value: 'Male householder and male spouse' },
		{
			label: 'Female householder and female spouse',
			value: 'Female householder and female spouse'
		},
		{ label: 'Cohabitating couple households', value: 'Cohabitating couple households' },
		{ label: 'Opposite-sex-co', value: 'Opposite-sex-co' },
		{ label: 'Same-sex-co', value: 'Same-sex-co' },
		{ label: 'Male householder and male partner', value: 'Male householder and male partner' },
		{
			label: 'Female householder and female partner',
			value: 'Female householder and female partner'
		}
	];

	$: colorScale = scaleQuantile<string, string>()
		.domain(
			enrichedStates.map(
				(d) => d.properties.data[numerator] / (d.properties.data[denominator] || 1)
			)
		)
		.range(schemeBlues[9]);
</script>

<main class="p-4">
	<div class="m-4">
		<div class="flex md:flex-row flex-col gap-4 mb-4">
			<SelectField options={numeratorOptions} bind:value={numerator} clearable={false} />
			<Card class="">
				<p class="px-4">Per</p>
			</Card>
			<SelectField options={denominatorOptions} bind:value={denominator} clearable={false} />
		</div>

		<Preview data={enrichedStates}>
			<div class="h-[600px]">
				<Chart
					geo={{
						projection: geoAlbersUsa,
						fitGeojson: states
					}}
					padding={{ top: 60 }}
					let:tooltip
				>
					<Svg>
						<g>
							{#each enrichedStates as feature}
								<GeoPath
									geojson={feature}
									{tooltip}
									fill={colorScale(
										feature.properties.data[numerator] / (feature.properties.data[denominator] || 1)
									)}
									class="stroke-surface-100 hover:fill-surface-content/20"
								/>
							{/each}
						</g>
					</Svg>

					<Legend
						scale={colorScale}
						title={`Proportion of ${numerator} per ${denominator}`}
						tickFormat={(d) => d.toLocaleString()}
						class="absolute bg-surface-100/80 px-2 py-1 backdrop-blur-sm rounded m-1"
					/>

					<Tooltip
						header={(data) => {
							const fraction = (
								data.properties.data[numerator] / (data.properties.data[denominator] || 1)
							).toFixed(3);
							return `${data.properties.name}: ${fraction}`;
						}}
						let:data
					>
						<TooltipItem
							label={`Proportion of ${numerator} per ${denominator}`}
							value={(
								data.properties.data[numerator] / (data.properties.data[denominator] || 1)
							).toFixed(3)}
						/>
						<TooltipItem
							label={numerator}
							value={data.properties.data[numerator]}
							format="integer"
						/>
						<TooltipItem
							label={denominator}
							value={data.properties.data[denominator]}
							format="integer"
						/>
					</Tooltip>
				</Chart>
			</div>
		</Preview>
	</div>
</main>
