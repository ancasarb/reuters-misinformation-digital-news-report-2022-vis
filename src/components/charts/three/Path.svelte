<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let onSelect;
	export let onReset;

	export let color;
    export let isGreyedOut;

	export let d;

	const valueOpacity = tweened(1, {
		duration: 500,
		easing: cubicOut
	});

	$: {
		if (isGreyedOut) {
			valueOpacity.set(0.125);
		} else {
			valueOpacity.set(1);
		}
	}
</script>

<path
	{d}
	fill="none"
	on:mouseover={onSelect}
	on:mouseout={onReset}
	stroke={color}
	stroke-opacity={$valueOpacity}
/>
