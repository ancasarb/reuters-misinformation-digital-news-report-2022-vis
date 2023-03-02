<script>
	import { line, scaleLinear, scalePoint } from 'd3';

	import Chart from '../../generic/Chart.svelte';
	import ColorLegend from '../../peripherals/ColorLegend.svelte';
	import Axis from './Axis.svelte';

	import Path from './Path.svelte';

	export let data;
	export let maxValue;

	export let groups;
	export let categories;

	export let colorScale;
	export let format;

	const dimensions = {
		width: 720,
		height: 600,
		margin: {
			top: 50,
			left: 10,
			bottom: 50,
			right: 10
		}
	};

	dimensions.innerWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
	dimensions.innerHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

	$: xScale = scalePoint().range([0, dimensions.innerWidth]).padding(1).domain(groups);
	$: yScale = scaleLinear().domain([0, maxValue]).range([dimensions.innerHeight, 0]);

	function path(d) {
		return line()(
			groups.map(function (group) {
				return [xScale(group), yScale(d[group])];
			})
		);
	}

	let selected = '';

	function onSelect(value) {
		selected = value;
	}
</script>

<Chart>
	<ColorLegend width={dimensions.width} {colorScale} {categories} {selected} {onSelect} />
	<svg viewBox="0 0 {dimensions.width} {dimensions.height}">
		<g transform={`translate(${dimensions.margin.left}, ${dimensions.margin.top})`}>
			{#each groups as group}
				<Axis x={xScale(group)} {yScale} {format} {group} />
			{/each}
			{#each data as t}
				{@const dimension = t['dimension']}
				<Path
					d={path(t)}
					onSelect={() => onSelect(dimension)}
					onReset={() => onSelect('')}
					isGreyedOut={!(dimension === selected || selected === '')}
					color={colorScale(dimension)}
				/>
			{/each}
		</g>
	</svg>
</Chart>
