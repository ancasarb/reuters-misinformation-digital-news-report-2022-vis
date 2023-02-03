<script>
	import load from '../routes/api/api';
	import GroupedBarChart from './GroupedBarChart.svelte';

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
	const dataAccessor = (d) => d.percentage;
</script>

<div class="container">
	{#await load('/api/data')}
		<div class="loading">Loading...</div>
	{:then data}
		<GroupedBarChart
			{data}
			series={topics}
			keys={regions}
			{colors}
			xAccessor={dataAccessor}
			yAccessor={regionAccessor}
			seriesAccessor={topicAccessor}
		/>
	{/await}
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

	.loading {
		margin: 6rem 0 1rem;
	}
</style>
