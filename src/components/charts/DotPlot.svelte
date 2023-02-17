<script>
	import ChartTitle from '../peripherals/ChartTitle.svelte';
	import ColorLegend from '../peripherals/ColorLegend.svelte';
	import ChartFootnote from '../peripherals/ChartFootnote.svelte';
	import Chart from './Chart.svelte';
	import DotPlotPoint from '../DotPlotPoint.svelte';
	import DotPlotLine from '../DotPlotLine.svelte';

	import { scaleBand, scaleLinear, scaleOrdinal, max, color } from 'd3';
	import { filter } from 'lodash';

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
			left: 10,
			bottom: 40,
			right: 10
		}
	};

	dimensions.innerWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
	dimensions.innerHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

	$: colorScale = scaleOrdinal().domain(rows).range(colors);
	$: yScale = scaleBand().domain(rows).range([0, dimensions.innerHeight]).paddingInner(0.1);

	$: maxValue = max(data, xAccessor);
	$: rangeMaxValue = Math.ceil(maxValue / 10) * 10;
	$: xScale = scaleLinear().domain([0, rangeMaxValue]).range([0, dimensions.innerWidth]);

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
		<g transform={`translate(${dimensions.margin.left}, ${dimensions.margin.top})`}>
			{#each rows as key}
				{@const filtered = filter(data, (item) => yAccessor(item) === key)}
				<g transform={`translate(0, ${yScale(key)})`}>
					<DotPlotLine {key} y={yScale.bandwidth()} {xScale}>
						{#each filtered as d}
							{@const key = colorAccessor(d)}
							<DotPlotPoint
								d={xAccessor(d)}
								{key}
								x={xScale(xAccessor(d))}
								y={yScale.bandwidth()}
								color={colorScale(colorAccessor(d))}
								onSelect={() => onSelect(key)}
								onReset={() => onSelect('')}
								{selected}
							/>
						{/each}
					</DotPlotLine>
				</g>
			{/each}
		</g>
	</svg>
	<ChartFootnote width={dimensions.width} />
</Chart>
