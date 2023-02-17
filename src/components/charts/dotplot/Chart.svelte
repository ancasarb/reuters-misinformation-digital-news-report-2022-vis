<script>
	import ChartTitle from '../../peripherals/ChartTitle.svelte';
	import ColorLegend from '../../peripherals/ColorLegend.svelte';
	import ChartFootnote from '../../peripherals/ChartFootnote.svelte';
	import Chart from '../../generic/Chart.svelte';

	import Axis from './Axis.svelte';
	import Dot from './Dot.svelte';

	import { max, scaleBand, scaleLinear } from 'd3';
	import lodash from 'lodash';
	const filter = lodash.filter;

	export let data;

	export let groups;
	export let dots;

	export let valueAccessor;
	export let groupAccessor;
	export let dotAccessor;

	export let colorScale;
	export let format;

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

	$: groupScale = scaleBand().domain(groups).range([0, dimensions.innerHeight]).paddingInner(0.1);

	$: maxValue = max(data, valueAccessor);
	$: maxRange = Math.ceil(maxValue / 10) * 10;
	$: valueScale = scaleLinear().domain([0, maxRange]).range([0, dimensions.innerWidth]);

	let selected = '';

	function onSelect(value) {
		selected = value;
	}
</script>

<Chart>
	<ChartTitle width={dimensions.width} />

	<ColorLegend width={dimensions.width} {colorScale} keys={dots} {selected} />

	<svg
		viewBox="0,0,{dimensions.width},{dimensions.height}"
		style="max-width: {dimensions.width}px;"
	>
		<g transform={`translate(${dimensions.margin.left}, ${dimensions.margin.top})`}>
			{#each groups as group}
				{@const groupData = filter(data, (item) => groupAccessor(item) === group)}
				<g transform={`translate(0, ${groupScale(group)})`}>
					<Axis category={group} y={groupScale.bandwidth()} xScale={valueScale} {format}>
						{#each groupData as d}
							{@const category = dotAccessor(d)}
							{@const value = valueAccessor(d)}
							<Dot
								{value}
								{category}
								x={valueScale(value)}
								y={groupScale.bandwidth()}
								color={colorScale(category)}
								onSelect={() => onSelect(category)}
								onReset={() => onSelect('')}
								{selected}
							/>
						{/each}
					</Axis>
				</g>
			{/each}
		</g>
	</svg>
	<ChartFootnote width={dimensions.width} />
</Chart>
