<script>
	import load from '../routes/api/api';
</script>

<main>
	{#await load('/api/data')}
		<p>loading</p>
	{:then data}
	{/await}
</main>

<style>
	main {
		font-family: 'Inter', sans-serif;
	}
</style>