<script>
	import { cubicInOut } from 'svelte/easing';
	import { scaleOrdinal, scaleTime } from 'd3-scale';
	import { flatGroup } from 'd3-array';
	import { format as formatDate } from 'date-fns';

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
</script>

<main class="p-4">
	<div class="m-4">
		<Preview data={dateSeriesData}>
			<div class="h-[300px] p-4 border rounded">
				<Chart
					data={dateSeriesData}
					x="date"
					xScale={scaleTime()}
					y="value"
					yDomain={[0, null]}
					yNice
					padding={{ left: 16, bottom: 24 }}
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
					</Svg>
				</Chart>
			</div>
		</Preview>
	</div>
	<div class="m-4">
		<Preview data={data.dataSeries}>
			<div class="h-[300px] p-4 border rounded">
				<Chart
					data={data.dataSeries}
					x="date"
					xScale={scaleTime()}
					y="value"
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
					<Tooltip header={(data) => formatDate(data.date, 'eee, MMMM do')} let:data>
						<TooltipItem label="value" value={data.value} />
					</Tooltip>
				</Chart>
			</div>
		</Preview>
	</div>
</main>
