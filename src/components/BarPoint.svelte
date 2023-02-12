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

	export let colorScale;

	$: percentage = xAccessor(d);
	$: key = yAccessor(d);
	$: x = xScale(percentage);
	$: y = yScale(key);

	const valueOpacity = tweened(1, {
		duration: 500,
		easing: cubicOut
	});

	const textOpacity = tweened(1, {
		duration: 500,
		easing: cubicOut
	});

	$: updateOpacity(key, selected);

	const updateOpacity = (d, s) => {
		if ((d === s || selected === '')) {
			valueOpacity.set(1);
			textOpacity.set(1);
		} else {
			valueOpacity.set(0.125);
			textOpacity.set(0);
		}
	};
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
	fill={colorScale(key)}
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
	opacity={$textOpacity}>{percentage}%</text
>

<style>
	.annotation {
		font-weight: bold;
		fill: white;
	}
</style>
