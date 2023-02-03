<script>
	import ColorLegend from '../components/peripherals/ColorLegend.svelte';

	import { scaleBand, scaleLinear, scaleOrdinal } from 'd3';
	import ChartTitle from '../components/peripherals/ChartTitle.svelte';
	import ChartFootnote from '../components/peripherals/ChartFootnote.svelte';
	import BarSeries from '../components/BarSeries.svelte';

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
		}
	};

	dimensions.innerWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
	dimensions.innerHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

	const padding = 20;
	const seriesHeight = (dimensions.innerHeight - (series.length - 1) * padding) / series.length;
	const seriesLeftMargin = 100;

	$: xScale = scaleLinear().domain([0, 100]).range([0, dimensions.innerWidth]);
	$: yScale = scaleBand().domain(keys).rangeRound([seriesHeight, 15]).paddingInner(0.2);

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
		{#each series as s, i}
			<BarSeries
				{data}
				key={s}
				condition={(item) => seriesAccessor(item) === s}
				leftMargin={seriesLeftMargin}
				topMargin={(padding + seriesHeight) * i}
				{onSelect}
				{selected}
				{xAccessor}
				{xScale}
				{yAccessor}
				{yScale}
				{colorScale}
			/>
		{/each}
	</g>
</svg>

<ChartFootnote width={dimensions.width} />
