<script>
	import load from '../routes/api/api';
	import GroupedBarChart from './GroupedBarChart.svelte';
</script>

<div class="container">
	{#await load('/api/data')}
		<div class="loading">Loading...</div>
	{:then data}
		<GroupedBarChart {data} />
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
		max-width: 1400px;
		font-family: 'Inter', sans-serif;
	}

	.loading {
		margin: 6rem 0 1rem;
	}
</style>
