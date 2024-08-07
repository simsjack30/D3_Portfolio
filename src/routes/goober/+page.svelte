<script>
	import { cubicInOut } from 'svelte/easing';
	import { scaleOrdinal, scaleTime } from 'd3-scale';
	import { flatGroup } from 'd3-array';
	import { format as formatDate } from 'date-fns';
	import { Card } from 'svelte-ux';

	import {
		Area,
		Axis,
		Chart,
		ChartClipPath,
		Highlight,
		Labels,
		LinearGradient,
		Point,
		RectClipPath,
		Spline,
		Svg,
		Text,
		Tooltip,
		TooltipItem,
		pivotLonger
	} from 'layerchart';

	import { format, Field, Switch, Toggle, PeriodType } from 'svelte-ux';

	import Preview from '$lib/docs/Preview.svelte';
	import { createDateSeries } from '$lib/utils/genData';

	const dateSeriesData = createDateSeries({ count: 30, min: 50, max: 100, value: 'integer' });

	export let data;
	console.log(data);
</script>

<main class="p-4">
	<div class="m-4">
		<div class="flex justify-between items-end flex-row mb-4">
			<Card>
				<div class="p-2 space-y-2">
					<h1 class="text-3xl">INTC Stock Crash</h1>
					<h3 class="italic">On August 2nd, 2024 Intel Stock Plummets</h3>
				</div>
			</Card>
		</div>
	</div>
	<div class="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 gap-x-0 lg:gap-y-0 m-4">
		<div class="w-full">
			<Preview data={data.intelStock}>
				<div class="h-[300px] p-4 border rounded">
					<Chart
						data={data.intelStock}
						x="Date"
						xScale={scaleTime()}
						y="Volume"
						yDomain={[0, null]}
						yNice
						padding={{ left: 16, bottom: 24 }}
						tooltip={{ mode: 'bisect-x' }}
					>
						<Svg>
							<Axis placement="left" grid rule />
							<Axis
								placement="bottom"
								format={(d) => format(d, PeriodType.Day, { variant: 'short' })}
								rule
							/>
							<LinearGradient class="from-primary/50 to-primary/0" vertical let:url>
								<Area line={{ class: 'stroke-2 stroke-primary' }} fill={url} />
							</LinearGradient>
							<Highlight points lines />
						</Svg>
						<Tooltip let:data>
							<TooltipItem label="Volume" value={data['Volume']} />
						</Tooltip>
					</Chart>
				</div>
			</Preview>
		</div>
		<div class="w-full">
			<Preview data={data.intelStock}>
				<div class="h-[300px] p-4 border rounded">
					<Chart
						data={data.intelStock}
						x="Date"
						xScale={scaleTime()}
						y="Adj Close"
						yDomain={[15, null]}
						yNice
						padding={{ left: 16, bottom: 24 }}
						tooltip={{ mode: 'bisect-x' }}
					>
						<Svg>
							<Axis placement="left" grid rule />
							<Axis
								placement="bottom"
								format={(d) => format(d, PeriodType.Day, { variant: 'short' })}
								rule
							/>
							<LinearGradient class="from-primary/50 to-primary/0" vertical let:url>
								<Area line={{ class: 'stroke-2 stroke-primary' }} fill={url} />
							</LinearGradient>
							<Highlight points lines />
						</Svg>
						<Tooltip let:data>
							<TooltipItem label="Adj Close" value={data['Adj Close']} />
						</Tooltip>
					</Chart>
				</div>
			</Preview>
		</div>
	</div>
	<div class="flex flex-col lg:flex-row m-4 gap-4">
		<div class=" bg-white rounded-md p-4 max-w-fit">
			<blockquote class="twitter-tweet">
				<p lang="en" dir="ltr">
					Intel announced it would layoff more than 15% of its staff, or 15,000 employees, in a memo
					to employees on Thurs. The massive headcount is part of a large plan to reduce spending by
					$10 billion in 2025, following a dismal Q2 earnings report and outlook.<a
						href="https://t.co/ciNK8FEfCt">https://t.co/ciNK8FEfCt</a
					>
				</p>
				&mdash; Amit Paranjape (@aparanjape)<a
					href="https://twitter.com/aparanjape/status/1819169347140501559?ref_src=twsrc%5Etfw"
					>August 2, 2024</a
				>
			</blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>
		<Card class="p-4"
			>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis officia earum fuga ipsam ipsa
			non beatae quibusdam itaque, pariatur dolores impedit minus, corporis quas vel, ex incidunt
			accusantium error saepe.</Card
		>
	</div>
</main>
