<script>
	import ColorLegend from '../components/peripherals/ColorLegend.svelte';
	import ChartTitle from '../components/peripherals/ChartTitle.svelte';
	import ChartFootnote from '../components/peripherals/ChartFootnote.svelte';
	import BarSeries from '../components/BarSeries.svelte';
	import BarPoint from '../components/BarPoint.svelte';

	import { scaleBand, scaleLinear, scaleOrdinal } from 'd3';
	import { filter } from 'lodash';

	export let data;
	export let series;
	export let keys;
	export let colors;

	export let xAccessor;
	export let yAccessor;
	export let seriesAccessor;

	const dimensions = {
		width: 720,
		height: 1024,
		margin: {
			top: 0,
			left: 0,
			bottom: 50,
			right: 50
		},
		series: {
			padding: 20,
			margin: {
				left: 100
			}
		}
	};

	dimensions.innerWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
	dimensions.innerHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

	dimensions.series.height =
		(dimensions.innerHeight - (series.length - 1) * dimensions.series.padding) / series.length;

	$: xScale = scaleLinear().domain([0, 100]).range([0, dimensions.innerWidth]);
	$: yScale = scaleBand().domain(keys).rangeRound([dimensions.series.height, 15]).paddingInner(0.2);

	$: colorScale = scaleOrdinal().domain(keys).range(colors);

	let selected = '';

	function onSelect(value) {
		selected = value;
	}
</script>

<ChartTitle width={dimensions.width} />

<ColorLegend width={dimensions.width} {colorScale} {keys} {selected} />

<svg viewBox="0,0,{dimensions.width},{dimensions.height}" style="max-width: {dimensions.width}px;">
	<g transform={`translate(${dimensions.margin.left}, ${dimensions.margin.top})`}>
		{#each series as key, i}
			{@const filtered = filter(data, (item) => seriesAccessor(item) === key)}
			<BarSeries
				{key}
				leftMargin={dimensions.series.margin.left}
				topMargin={(dimensions.series.padding + dimensions.series.height) * i}
			>
				{#each filtered as datum}
					<BarPoint
						{datum}
						onSelect={() => onSelect(yAccessor(datum))}
						onReset={() => onSelect('')}
						{selected}
						{xAccessor}
						{xScale}
						{yAccessor}
						{yScale}
						{colorScale}
					/>
				{/each}
			</BarSeries>
		{/each}
	</g>
</svg>

<ChartFootnote width={dimensions.width} />
