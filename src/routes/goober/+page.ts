// src/routes/your-route/+page.ts
import { parse } from 'svelte-ux';
import { autoType, csvParse } from 'd3-dsv';

export async function load({ fetch }) {
	const response = await fetch('/data/examples/date/apple-stock.json');
	const appleStock = parse(await response.text());
	const response2 = await fetch('/data/examples/date/INTC.csv');
	const intelStock = csvParse(await response2.text(), autoType);
	return {
		dataSeries: appleStock,
		intelStock: intelStock
	};
}
