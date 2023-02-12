<script>
	import GroupedBarChart from './GroupedBarChart.svelte';

	export let data;

	const topics = [
		'COVID-19',
		'Politics',
		'Celebrities',
		'Climate change',
		'Immigration',
		'Products (e.g. scams)'
	];
	const regions = ['Europe', 'North America', 'Asia', 'Latin America', 'Africa'];

	const colors = ['#0ab1be', '#ec691d', '#b1105d', '#0e1f4f', '#8dc15b'];

	const topicAccessor = (d) => d.topic;
	const regionAccessor = (d) => d.region;
	const valueAccessor = (d) => d.percentage;
</script>

<div class="container">
	<GroupedBarChart
		{data}
		series={topics}
		bars={regions}
		{colors}
		xAccessor={valueAccessor}
		yAccessor={regionAccessor}
		seriesAccessor={topicAccessor}
	/>
</div>

<style>
	@import url('https://rsms.me/inter/inter.css');

	.container {
		margin-right: auto;
		margin-left: auto;
		padding-right: 20px;
		padding-left: 20px;
		width: 100%;
		max-width: 1440px;
		font-family: 'Inter', sans-serif;
	}
</style>
