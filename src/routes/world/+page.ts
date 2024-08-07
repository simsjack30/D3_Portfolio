import { parse } from 'svelte-ux';
import { autoType, csvParse } from 'd3-dsv';
import pageSource from './+page.svelte?raw';
import type { GeometryCollection, Topology } from 'topojson-specification';

export async function load({ fetch }) {
	// Fetching US Atlas Data
	const usAtlasResponse = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json');
	const usAtlas = (await usAtlasResponse.json()) as Topology<{
		states: GeometryCollection<{ name: string }>;
	}>;

	// Fetching Airports Data
	const airportsResponse = await fetch('/data/examples/geo/us-airports.csv');
	const airports = csvParse(await airportsResponse.text(), autoType);

	return {
		us: {
			geojson: usAtlas,
			airports: airports
		},
		meta: {
			pageSource
		}
	};
}
