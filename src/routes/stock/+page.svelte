<script>
	import { cubicInOut } from 'svelte/easing';
	import { scaleOrdinal, scaleTime } from 'd3-scale';
	import { flatGroup } from 'd3-array';
	import { format as formatDate } from 'date-fns';
	import { format as d3Format } from 'd3-format';

	import { faChessKing } from '@fortawesome/free-regular-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faUser,
		faCake,
		faWandMagicSparkles,
		faArrowRight,
		faArrowAltCircleRight,
		faArrowCircleRight,
		faLongArrowRight,
		faLongArrowLeft,
		faHome
	} from '@fortawesome/free-solid-svg-icons';

	import { Card, Button } from 'svelte-ux';

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
	const formatSigFig = d3Format('.3g');
	const formatSigFig2 = d3Format('.4~s');
</script>

<main class="p-2 lg:p-4">
	<div class="m-2 lg:m-4">
		<div class="flex justify-between flex-row mb-4 lg:mb-8">
			<Card class="elevation-none">
				<div class="flex justify-between flex-col p-2 lg:p-4 lg:space-y-2 space-y-1 h-full">
					<h1 class="text-xl lg:text-3xl">Intel Stock Crash</h1>
					<h3 class="text-sm lg:text-lg italic">On August 1st, 2024 INTC Stock Plummets</h3>
				</div>
			</Card>
			<div class="relative hidden md:flex w-16 lg:w-24 rounded overflow-hidden">
				<img
					class="object-cover w-full h-full transition-transform duration-1000 hover:scale-105"
					src="https://s3-symbol-logo.tradingview.com/intel--600.png"
					alt=""
				/>
				<div
					class="absolute inset-0 bg-red-500 opacity-0 hover:opacity-70 transition-opacity duration-1000"
				></div>
			</div>
		</div>
	</div>

	<div class="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 gap-x-0 lg:gap-y-0 m-2 lg:m-4">
		<div class="flex flex-col space-y-4 w-full lg:w-1/2">
			<Card class="text-sm lg:text-base p-2 lg:p-4 elevation-none h-full"
				>Intel announced it would layoff more than 15% of its staff, or 15,000 employees, in a memo
				to employees on Thursday August 1st, 2024. The massive headcount is part of a large plan to
				reduce spending by $10 billion in 2025, following a dismal Q2 earnings report and outlook.</Card
			>
			<div class="w-full">
				<h2 class="text-md lg:text-xl p-2">Adjusted Share Price YTD</h2>
				<Preview data={data.intelStock}>
					<div class="h-[10rem] md:h-[13rem] lg:h-[15rem] xl:h-[25rem] p-4 border rounded">
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
							<Tooltip header={(data) => formatDate(new Date(data.Date), 'eee, MMMM do')} let:data>
								<TooltipItem label="Adj Close" value={data['Adj Close']} format={formatSigFig} />
							</Tooltip>
						</Chart>
					</div>
				</Preview>
			</div>
		</div>
		<div class="flex flex-col space-y-4 w-full lg:w-1/2">
			<Card class="text-sm lg:text-base p-2 lg:p-4 elevation-none h-full"
				>The surge in trading volume directly corresponds with the rapid drop in Intel's stock
				price. On the day when the market was at its most volatile, a staggering 300.9 million
				shares were sold, marking the peak of this intense sell-off.</Card
			>
			<div class="w-full">
				<h2 class="text-md lg:text-xl p-2">Volume Sold YTD</h2>
				<Preview data={data.intelStock}>
					<div class="h-[10rem] lg:h-[15rem] xl:h-[25rem] p-4 border rounded">
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
								<Axis placement="left" grid rule format={formatSigFig2} />
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
							<Tooltip header={(data) => formatDate(new Date(data.Date), 'eee, MMMM do')} let:data>
								<TooltipItem label="Volume" value={data['Volume']} format={formatSigFig2} />
							</Tooltip>
						</Chart>
					</div>
				</Preview>
			</div>
		</div>
	</div>
	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://www.google.com/finance/quote/INTC:NASDAQ"
	>
		<Button variant="fill-outline" color="primary" class="m-2 lg:m-4" rounded>INTC Live Data</Button
		>
	</a>
	<div class="flex flex-row m-2 lg:m-4 gap-2 w-full mx-auto justify-center mt-16">
		<a href="/marriage">
			<Button variant="fill-outline" color="primary" rounded
				><FontAwesomeIcon icon={faLongArrowLeft}></FontAwesomeIcon></Button
			></a
		>
		<a href="/">
			<Button variant="fill-outline" color="primary" rounded
				><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Button
			></a
		>
		<a href="/">
			<Button variant="fill-outline" color="primary" rounded
				><FontAwesomeIcon icon={faLongArrowRight}></FontAwesomeIcon></Button
			></a
		>
	</div>
	<div class="h-[10vh]"></div>
	<div class=""></div>
</main>
