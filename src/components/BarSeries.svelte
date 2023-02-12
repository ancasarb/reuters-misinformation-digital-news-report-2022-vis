<script>
	import TextBlock from './generic/TextBlock.svelte';

	export let key;

	const display = function (key) {
		var i = key.indexOf(' ');
		if (i > 0) {
			return [key.substring(0, i), key.substring(i + 1)];
		} else return [key];
	};
</script>

<TextBlock text={display(key)} fontSize="16" color="#414140" />

<slot />
