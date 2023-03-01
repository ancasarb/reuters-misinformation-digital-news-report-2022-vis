<script>
	import ChartTitle from '../peripherals/ChartTitle.svelte';
</script>

<div class="container">
	<ChartTitle />

	<slot />
</div>

<style>
	.container {
		margin-right: auto;
		margin-left: auto;
		padding-right: 20px;
		padding-left: 20px;
		padding-bottom: 20px;
		padding-top: 20px;
		width: 720px;
		font-family: 'Inter', sans-serif;
	}
</style>
