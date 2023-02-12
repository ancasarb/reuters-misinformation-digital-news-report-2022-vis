<script>
	import TextBlock from '../generic/TextBlock.svelte';

	export let width;
	const height = 100;
</script>

<svg viewBox="0,0,{width}, {height}" style="max-width: {width}px;">
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

<style>
	svg {
		padding-bottom: 10px;
	}
</style>
