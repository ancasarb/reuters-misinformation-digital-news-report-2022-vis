<script>
	import ColorLegend from '../peripherals/ColorLegend.svelte';
	import ChartTitle from '../peripherals/ChartTitle.svelte';
	import ChartFootnote from '../peripherals/ChartFootnote.svelte';
	import BarSeries from '../BarSeries.svelte';
	import BarPoint from '../BarPoint.svelte';

	import Chart from './Chart.svelte';

	import { scaleBand, scaleLinear, scaleOrdinal } from 'd3';
	import lodash from 'lodash';
	const filter = lodash.filter;

	export let data;
	export let series;
	export let bars;
	export let colors;

	export let valueAccessor;
	export let barAccessor;
	export let seriesAccessor;

	const dimensions = {
		width: 720,
		height: 1024,
		margin: {
			top: 20,
			left: 100,
			bottom: 50,
			right: 0
		}
	};

	dimensions.innerWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
	dimensions.innerHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

	$: xScaleSeries = scaleBand().domain(series).range([0, dimensions.innerHeight]).paddingInner(0.2);
	$: xScaleBars = scaleLinear().domain([0, 100]).range([0, dimensions.innerWidth]);
	$: yScale = scaleBand().domain(bars).range([0, xScaleSeries.bandwidth()]).paddingInner(0.2);
	$: colorScale = scaleOrdinal().domain(bars).range(colors);

	let selected = '';

	function onSelect(value) {
		selected = value;
	}
</script>

<Chart>
	<ChartTitle width={dimensions.width} />

	<ColorLegend width={dimensions.width} {colorScale} keys={bars} {selected} />

	<svg
		viewBox="0,0,{dimensions.width},{dimensions.height}"
		style="max-width: {dimensions.width}px;"
	>
		<g transform={`translate(0, ${dimensions.margin.top})`}>
			{#each series as key}
				{@const filtered = filter(data, (item) => seriesAccessor(item) === key)}

				<g transform={`translate(0, ${xScaleSeries(key)})`}>
					<BarSeries {key}>
						{#each filtered as d}
							<g transform={`translate(${dimensions.margin.left}, 0)`}>
								<BarPoint
									{d}
									onSelect={() => onSelect(barAccessor(d))}
									onReset={() => onSelect('')}
									{selected}
									xAccessor={valueAccessor}
									xScale={xScaleBars}
									yAccessor={barAccessor}
									{yScale}
									{colorScale}
								/>
							</g>
						{/each}
					</BarSeries>
				</g>
			{/each}
		</g>
	</svg>

	<ChartFootnote width={dimensions.width} />
</Chart>
