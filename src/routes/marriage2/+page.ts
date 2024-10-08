// import type { Load } from '@sveltejs/kit';
// import { parse } from 'svelte-ux';

// export async function load({ fetch }) {
// 	const response = await fetch('/data/examples/date/marriageData.json');
// 	const marriageData = parse(await response.text());

// 	return {
// 		marriageData
// 	};
// }

import type { GeometryCollection, Topology } from 'topojson-specification';
import pageSource from './+page.svelte?raw';

export async function load({ fetch }) {
	// TODO: Support different US (https://github.com/topojson/us-atlas) and World (https://github.com/topojson/world-atlas) files
	// TODO: Cache: https://github.com/sveltejs/kit/issues/3642
	return {
		geojson: (await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/counties-albers-10m.json').then(
			(r) => r.json()
		)) as Topology<{
			states: GeometryCollection<{ name: string }>;
			counties: GeometryCollection<{ name: string }>;
		}>,
		population: await fetch('/data/examples/geo/us-county-population-2020.json').then((r) =>
			r.json()
		),
		meta: {
			pageSource
		}
	};
}
