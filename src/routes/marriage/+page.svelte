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
	import { Card, Button, SelectField, type MenuOption } from 'svelte-ux';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faLongArrowLeft, faHome, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

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
		{ label: 'Married Households', value: 'Married couple households' },
		{ label: 'Opposite-Sex Marriages', value: 'Opposite-sex-married' },
		{ label: 'Same-Sex-Marriages', value: 'Same-sex-married' },
		{ label: 'Male With Male Spouse', value: 'Male householder and male spouse' },
		{
			label: 'Female With Female Spouse',
			value: 'Female householder and female spouse'
		},
		{ label: 'Cohabitating Households', value: 'Cohabitating couple households' },
		{ label: 'Opposite-Sex Cohabitants', value: 'Opposite-sex-co' },
		{ label: 'Same-Sex Cohabitants', value: 'Same-sex-co' },
		{ label: 'Male With Male Cohabitant', value: 'Male householder and male partner' },
		{
			label: 'Female With Female Cohabitant',
			value: 'Female householder and female partner'
		}
	];

	let denominatorOptions: MenuOption[] = [
		{ label: 'Total Households', value: 'Total' },
		{ label: 'Married Households', value: 'Married couple households' },
		{ label: 'Opposite-Sex Marriages', value: 'Opposite-sex-married' },
		{ label: 'Same-Sex-Marriages', value: 'Same-sex-married' },
		{ label: 'Male With Male Spouse', value: 'Male householder and male spouse' },
		{
			label: 'Female With Female Spouse',
			value: 'Female householder and female spouse'
		},
		{ label: 'Cohabitating Households', value: 'Cohabitating couple households' },
		{ label: 'Opposite-Sex Cohabitants', value: 'Opposite-sex-co' },
		{ label: 'Same-Sex Cohabitants', value: 'Same-sex-co' },
		{ label: 'Male With Male Cohabitant', value: 'Male householder and male partner' },
		{
			label: 'Female With Female Cohabitant',
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

	function getLabel(options, value) {
		return options.find((option) => option.value === value)?.label || value;
	}

	$: numeratorLabel = getLabel(numeratorOptions, numerator);
	$: denominatorLabel = getLabel(denominatorOptions, denominator);
</script>

<main class="p-2 lg:p-4">
	<div class="m-2 lg:m-4">
		<div class="flex justify-between flex-row mb-4 lg:mb-8">
			<Card class="elevation-none">
				<div class="flex justify-between flex-col p-2 lg:p-4 lg:space-y-2 space-y-1 h-full">
					<h1 class="text-xl lg:text-3xl">US Marriage Stats</h1>
					<h3 class="text-sm lg:text-lg italic">Based on 2022 Census Data</h3>
				</div>
			</Card>
		</div>
		<div class="flex flex-col lg:flex-row gap-4 mb-4 items-start lg:w-fit md:w-1/2 w-3/5">
			<Button
				on:click={() => {
					numerator = 'Married couple households';
					denominator = 'Total';
				}}
				variant="fill-outline"
				color="primary"
				class="w-full"
				rounded>Married Households</Button
			>
			<Button
				on:click={() => {
					numerator = 'Cohabitating couple households';
					denominator = 'Total';
				}}
				variant="fill-outline"
				color="primary"
				class="w-full"
				rounded>Cohabitating Households</Button
			>
			<Button
				on:click={() => {
					numerator = 'Same-sex-married';
					denominator = 'Married couple households';
				}}
				variant="fill-outline"
				color="primary"
				class="w-full"
				rounded>Same-Sex Marriages</Button
			>
		</div>
		<h2 class="text-md lg:text-xl p-2">
			{numeratorLabel} per {denominatorLabel}
		</h2>

		<Preview data={enrichedStates}>
			<div class="h-[18rem] md:h-[26rem] lg:h-[600px]">
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
						tickFormat={(d) => d.toLocaleString()}
						width={300}
						placement="top"
						height={25}
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
							label={`${numeratorLabel} per ${denominatorLabel}`}
							value={(
								data.properties.data[numerator] / (data.properties.data[denominator] || 1)
							).toFixed(3)}
						/>
						<TooltipItem
							label={numeratorLabel}
							value={data.properties.data[numerator]}
							format="integer"
						/>
						<TooltipItem
							label={denominatorLabel}
							value={data.properties.data[denominator]}
							format="integer"
						/>
					</Tooltip>
				</Chart>
			</div>
		</Preview>
		<div class="flex md:flex-row flex-col gap-4 my-4">
			<SelectField options={numeratorOptions} bind:value={numerator} clearable={false} />
			<SelectField options={denominatorOptions} bind:value={denominator} clearable={false} />
		</div>
	</div>
	<div class="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 gap-x-0 lg:gap-y-0 m-2 lg:m-4">
		<div class="flex flex-col lg:flex-row space-y-4 lg:-space-y-0 space-x-0 lg:space-x-4 w-full">
			<Card class="text-sm lg:text-base p-2 lg:p-4 elevation-none h-full"
				>States in the Mountain West, such as Utah, Wyoming, and Idaho show higher proportions of
				married households, possibly influenced by cultural and religious factors prevalent in these
				areas. Conversely, states along the West Coast and North East, including places like Nevada,
				Oregon, and New York tend to have lower marriage rates.</Card
			>
			<Card class="text-sm lg:text-base p-2 lg:p-4 elevation-none h-full"
				>The distribution of cohabitating households across the United States reveals notable
				cultural and regional differences. In the Southeast, with the exception of Florida,
				cohabitating households are relatively rare. This pattern may be influenced by cultural and
				religious beliefs that emphasize marriage before cohabitation. In contrast, there is a
				significant increase in cohabitating households as you move West, as well as in the
				Northeast. These areas may reflect more liberal attitudes toward cohabitation and marriage.</Card
			>
			<Card class="text-sm lg:text-base p-2 lg:p-4 elevation-none h-full"
				>Explore the data by adjusting the parameters to uncover your own insights and trends. The
				visualizations are based on the 2022 U.S. Census data, offering a snapshot of household
				dynamics across the country. For more details, you can access the full dataset through the
				link provided at the bottom of the page.</Card
			>
		</div>
	</div>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://data.census.gov/table/ACSDT1Y2022.B11009?q=B11009:%20COUPLED%20HOUSEHOLDS%20BY%20TYPE&g=010XX00US$0400000&moe=true&tp=true"
	>
		<Button variant="fill-outline" color="primary" class="m-2 lg:m-4" rounded>Census Data</Button>
	</a>
	<div class="flex flex-row m-2 lg:m-4 gap-2 w-full mx-auto justify-center mt-16">
		<a href="/mountain">
			<Button variant="fill-outline" color="primary" rounded
				><FontAwesomeIcon icon={faLongArrowLeft}></FontAwesomeIcon></Button
			></a
		>
		<a href="/">
			<Button variant="fill-outline" color="primary" rounded
				><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Button
			></a
		>
		<a href="/stock">
			<Button variant="fill-outline" color="primary" rounded
				><FontAwesomeIcon icon={faLongArrowRight}></FontAwesomeIcon></Button
			></a
		>
	</div>
	<div class="h-[10vh]"></div>
</main>
