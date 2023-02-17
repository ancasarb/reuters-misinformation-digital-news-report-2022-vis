<script>
	import ColorLegend from '../../peripherals/ColorLegend.svelte';
	import ChartTitle from '../../peripherals/ChartTitle.svelte';
	import ChartFootnote from '../../peripherals/ChartFootnote.svelte';

	import BarCluster from './BarCluster.svelte';
	import Bar from './Bar.svelte';

	import Chart from '../../generic/Chart.svelte';

	import { scaleBand, scaleLinear } from 'd3';
	import lodash from 'lodash';
	const filter = lodash.filter;

	export let data;
	export let format;

	export let clusters;
	export let bars;
	export let colorScale;

	export let valueAccessor;
	export let barAccessor;
	export let clusterAccessor;

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

	$: xScaleClusters = scaleBand()
		.domain(clusters)
		.range([0, dimensions.innerHeight])
		.paddingInner(0.2);
	$: xScaleBars = scaleLinear().domain([0, 100]).range([0, dimensions.innerWidth]);
	$: yScale = scaleBand().domain(bars).range([0, xScaleClusters.bandwidth()]).paddingInner(0.2);

	let selected = '';

	function onSelect(value) {
		selected = value;
	}
</script>

<Chart>
	<ChartTitle width={dimensions.width} />

	<ColorLegend width={dimensions.width} {colorScale} categories={bars} {selected} />

	<svg
		viewBox="0,0,{dimensions.width},{dimensions.height}"
		style="max-width: {dimensions.width}px;"
	>
		<g transform={`translate(0, ${dimensions.margin.top})`}>
			{#each clusters as cluster}
				{@const clusterData = filter(data, (item) => clusterAccessor(item) === cluster)}

				<g transform={`translate(0, ${xScaleClusters(cluster)})`}>
					<BarCluster category={cluster}>
						{#each clusterData as d}
							<g transform={`translate(${dimensions.margin.left}, 0)`}>
								<Bar
									{d}
									onSelect={() => onSelect(barAccessor(d))}
									onReset={() => onSelect('')}
									{selected}
									xAccessor={valueAccessor}
									xScale={xScaleBars}
									yAccessor={barAccessor}
									{yScale}
									color={colorScale(barAccessor(d))}
									{format}
								/>
							</g>
						{/each}
					</BarCluster>
				</g>
			{/each}
		</g>
	</svg>

	<ChartFootnote width={dimensions.width} />
</Chart>
