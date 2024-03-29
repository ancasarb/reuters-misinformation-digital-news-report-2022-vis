<script>
	import ColorLegend from '../../peripherals/ColorLegend.svelte';
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
		height: 600,
		margin: {
			top: 0,
			left: 10,
			bottom: 50,
			right: 10
		}
	};

	dimensions.innerWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
	dimensions.innerHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

	$: groupScale = scaleBand().domain(groups).range([0, dimensions.innerHeight]).paddingInner(0.2);

	$: maxValue = max(data, valueAccessor);
	$: maxRange = Math.ceil(maxValue / 10) * 10;
	$: valueScale = scaleLinear().domain([0, maxRange]).range([0, dimensions.innerWidth]);

	let selected = '';

	function onSelect(value) {
		selected = value;
	}
</script>

<Chart>
	<ColorLegend width={dimensions.width} {colorScale} categories={dots} {selected} {onSelect} />
	<svg viewBox="0 0 {dimensions.width} {dimensions.height}">
		<g transform={`translate(${dimensions.margin.left}, ${dimensions.margin.top})`}>
			{#each groups as group}
				{@const groupData = filter(data, (item) => groupAccessor(item) === group)}
				<g transform={`translate(0, ${groupScale(group)})`}>
					<Axis category={group} y={groupScale.bandwidth()} xScale={valueScale} {format}>
						{#each groupData as d}
							{@const category = dotAccessor(d)}
							{@const value = valueAccessor(d)}
							<Dot
								{category}
								{value}
								{format}
								x={valueScale(value)}
								y={groupScale.bandwidth()}
								color={colorScale(category)}
								on:mouseover={() => onSelect(category)}
								on:mouseout={() => onSelect('')}
								{selected}
								padding={d.padding}
							/>
						{/each}
					</Axis>
				</g>
			{/each}
		</g>
	</svg>
</Chart>
