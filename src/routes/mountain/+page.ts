// +page.ts
import { parse } from 'svelte-ux';
import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	// Import your eight-thousanders data
	const eightThousanders = await import('./eight.js');

	// Optionally, fetch other necessary data (e.g., geojson for country boundaries)
	const response = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json');
	const geojson = await response.json();

	return {
		peaks: eightThousanders.eightThousanders,
		geojson
	};
};
