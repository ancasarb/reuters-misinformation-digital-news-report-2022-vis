<script>
	import TextBlock from '../../generic/TextBlock.svelte';

	export let category;

	const display = function (category) {
		var i = category.indexOf(' ');
		if (i > 0) {
			return [category.substring(0, i), category.substring(i + 1)];
		} else return [category];
	};
</script>

<TextBlock text={display(category)} fontSize="16" color="#414140" />

<slot />
