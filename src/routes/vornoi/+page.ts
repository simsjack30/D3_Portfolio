import { autoType, csvParse } from 'd3-dsv';
import pageSource from './+page.svelte?raw';
import type { GeometryCollection, Topology } from 'topojson-specification';

// SvelteKit load function
export async function load({ fetch }) {
	// Fetching World Atlas Data
	const worldAtlasResponse = await fetch(
		'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
	);
	const worldAtlas = await worldAtlasResponse.json();

	// Fetching World Capitals Data
	const capitalsResponse = await fetch('/data/examples/geo/world-capitals.json');
	const capitals = await capitalsResponse.json();

	return {
		world: {
			geojson: worldAtlas,
			capitals: capitals
		},
		meta: {
			pageSource
		}
	};
}
