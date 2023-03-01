<script>
	const text = [
		'PROPORTION WHO SAW FALSE OR MISLEADING',
		'INFORMATION ABOUT EACH TOPIC IN THE LAST WEEK',
		'– SELECTED REGIONS'
	];
</script>

<div>
	{#each text as t}
		<p>{t}</p>
	{/each}
</div>

<style>
	p {
		font-size: 20px;
		color: #424f75;
	}
</style>
