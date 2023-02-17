<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let d;

	export let onSelect;
	export let onReset;
	export let selected;

	export let xAccessor;
	export let xScale;

	export let yAccessor;
	export let yScale;

	export let color;
	export let format;

	$: category = yAccessor(d);
	$: value = xAccessor(d);
	$: x = xScale(value);
	$: y = yScale(category);

	const valueOpacity = tweened(1, {
		duration: 500,
		easing: cubicOut
	});

	const textOpacity = tweened(1, {
		duration: 500,
		easing: cubicOut
	});

	$: {
		const isGreyedOut = !(category === selected || selected === '');
		if (isGreyedOut) {
			valueOpacity.set(0.125);
			textOpacity.set(0);
		} else {
			valueOpacity.set(1);
			textOpacity.set(1);
		}
	}

</script>

<rect
	x={0}
	{y}
	height={yScale.bandwidth()}
	width={xScale.range()[1]}
	fill="#ececec"
	on:mouseover={onSelect}
	on:mouseout={onReset}
/>
<rect
	x={0}
	{y}
	height={yScale.bandwidth()}
	width={x}
	fill={color}
	on:mouseover={onSelect}
	on:mouseout={onReset}
	opacity={$valueOpacity}
/>

<text
	class="annotation"
	{x}
	dx={-40}
	{y}
	dy={4}
	dominant-baseline="hanging"
	on:mouseover={onSelect}
	on:mouseout={onReset}
	opacity={$textOpacity}>{value}{format}</text
>

<style>
	.annotation {
		font-weight: bold;
		fill: white;
	}
</style>
