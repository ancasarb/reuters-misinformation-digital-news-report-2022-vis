<script>
	import TextBlock from '../generic/TextBlock.svelte';

	export let width;
	const height = 80;
</script>

<svg viewBox="0,0,{width},{height}" style="max-width: {width}px;">
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

<style>
	:root {
		--border: #d1c8d2 solid;
	}

	svg {
		padding-top: 20px;
		border-bottom: var(--border);
		border-top: var(--border);
	}
</style>
