<script>
	import ColorLegend from '../components/ColorLegend.svelte';
	import TextBlock from '../components/TextBlock.svelte';
	import { regionsLegend, topicsLegend } from '../ui/metadata';

	import { filter, keys } from 'lodash';
	import { scaleBand, scaleLinear } from 'd3';

	export let data;

	const dimensions = {
		width: 800,
		height: 1000,
		margin: {
			top: 0,
			left: 0,
			bottom: 40,
			right: 50
		}
	};

	dimensions.innerWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
	dimensions.innerHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

	const titleHeight = 125;
	const footnoteHeight = 110;

	const topics = keys(topicsLegend);
	const regions = keys(regionsLegend);

	const padding = 20;
	const barChartHeight = (dimensions.innerHeight - (topics.length - 1) * padding) / topics.length;
	const barChartLeftMargin = 100;

	const topicAccessor = (d) => d.topic;
	const regionAccessor = (d) => d.region;
	const dataAccessor = (d) => d.percentage;

	$: xScale = scaleLinear().domain([0, 100]).range([0, dimensions.innerWidth]);
	$: yScale = scaleBand().domain(regions).rangeRound([barChartHeight, 15]).paddingInner(0.2);
</script>

<div class="title max-width-wrapper">
	<svg viewBox="0,0,{dimensions.width}, {titleHeight}" class="max-width-wrapper">
		<TextBlock
			text={[
				'PROPORTION WHO SAW FALSE OR MISLEADING',
				'INFORMATION ABOUT EACH TOPIC IN THE LAST WEEK',
				'– SELECTED REGIONS'
			]}
			color="#424f75"
			fontSize="24"
		/>
	</svg>
</div>

<div class="legend max-width-wrapper">
	<ColorLegend />
</div>

<svg viewBox="0,0,{dimensions.width},{dimensions.height}" class="max-width-wrapper">
	<g transform={`translate(${dimensions.margin.left}, ${dimensions.margin.top})`}>
		{#each topics as topic, i}
			{@const filteredData = filter(data, (item) => topicAccessor(item) === topic)}
			{@const xMax = xScale(100)}

			<g transform={`translate(0, ${(padding + barChartHeight) * i})`}>
				<TextBlock text={topicsLegend[topic]} fontSize="16" color="#414140" />
				<g transform={`translate(${barChartLeftMargin}, 0)`}>
					{#each filteredData as d}
						{@const x = xScale(dataAccessor(d))}
						{@const y = yScale(regionAccessor(d))}
						<rect x={0} {y} height={yScale.bandwidth()} width={xMax} fill="#ececec" />
						<rect
							x={0}
							{y}
							height={yScale.bandwidth()}
							width={x}
							fill={regionsLegend[regionAccessor(d)]}
						/>
						<text class="annotation" {x} dx={-40} {y} dy={4} dominant-baseline="hanging"
							>{dataAccessor(d)}%</text
						>
					{/each}
				</g>
			</g>
		{/each}
	</g>
</svg>

<div class="footnote max-width-wrapper">
	<svg viewBox="0,0,{dimensions.width},{footnoteHeight}" class="max-width-wrapper">
		<TextBlock
			text={[
				'Have you seen false or misleading information about any of the',
				'following topics, in the last week? Base: Total sample in each region: Europe = 48,836, North',
				'America = 4048, Asia = 20,349, Latin America = 12,104, Africa = 6057. Note: Africa average is Kenya,',
				'South Africa, and Nigeria only (English speakers in South Africa and Nigeria).'
			]}
			color="#414140"
			fontSize="14"
		/>
	</svg>
</div>

<style>
	:root {
		--border: #d1c8d2 solid;
	}

	.title {
		padding-bottom: 20px;
	}

	.legend {
		border-bottom: var(--border);
		padding-bottom: 20px;
	}

	.footnote {
		border-bottom: var(--border);
		border-top: var(--border);
	}

	.max-width-wrapper {
		max-width: 800px;
	}

	.annotation {
		font-weight: bold;
		fill: white;
	}
</style>
