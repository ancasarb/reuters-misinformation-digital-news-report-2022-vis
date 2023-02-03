<script>
	import TextBlock from './generic/TextBlock.svelte';

	export let top;
	export let left;
	export let key;

	const display = function (key) {
		var i = key.indexOf(' ');
		if (i > 0) {
			return [key.substring(0, i), key.substring(i + 1)];
		} else return [key];
	};
</script>

<g transform={`translate(0, ${top})`}>
	<TextBlock text={display(key)} fontSize="16" color="#414140" />

	<g transform={`translate(${left}, 0)`}>
		<slot />
	</g>
</g>
