<script>
	import ChartTitle from '../peripherals/ChartTitle.svelte';
	import ColorLegend from '../peripherals/ColorLegend.svelte';
	import Chart from './Chart.svelte';

	import { scaleBand, scaleLinear, scaleOrdinal } from 'd3';
	import ChartFootnote from '../peripherals/ChartFootnote.svelte';

	export let data;

	export let rows;
	export let points;

	export let xAccessor;
	export let yAccessor;

	export let colorAccessor;
	export let colors;

	const dimensions = {
		width: 720,
		height: 720,
		margin: {
			top: 0,
			left: 0,
			bottom: 0,
			right: 0
		}
	};

	dimensions.innerWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
	dimensions.innerHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

	$: colorScale = scaleOrdinal().domain(rows).range(colors);

	let selected = '';

	function onSelect(value) {
		selected = value;
	}
</script>

<Chart>
	<ChartTitle width={dimensions.width} />

	<ColorLegend width={dimensions.width} {colorScale} keys={points} {selected} />

	<svg
		viewBox="0,0,{dimensions.width},{dimensions.height}"
		style="max-width: {dimensions.width}px;"
	>
		<g transform={`translate(${dimensions.margin.left}, ${dimensions.margin.top})`} />
	</svg>
	<ChartFootnote width={dimensions.width} />
</Chart>
