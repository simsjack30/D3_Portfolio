import { parse } from 'svelte-ux';
import { autoType, csvParse } from 'd3-dsv';
import type { GeometryCollection, Topology } from 'topojson-specification';
import pageSource from './+page.svelte?raw';

export async function load({ fetch }) {
	const geojsonResponse = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json');
	const geojson = (await geojsonResponse.json()) as Topology<{
		states: GeometryCollection<{ name: string }>;
	}>;

	const populationResponse = await fetch('/data/examples/date/marriageData.json');
	const population = await populationResponse.json();

	return {
		geojson,
		population,
		meta: {
			pageSource
		}
	};
}
