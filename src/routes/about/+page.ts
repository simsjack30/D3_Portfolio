// src/routes/your-route/+page.ts
import { parse } from 'svelte-ux';

export async function load({ fetch }) {
	const response = await fetch('/data/examples/date/apple-stock.json');
	const appleStock = parse(await response.text());

	return {
		dataSeries: appleStock
	};
}
