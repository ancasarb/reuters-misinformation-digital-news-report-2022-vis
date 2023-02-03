<script>
	import { onMount } from 'svelte';
	import { select, easeCubicOut } from 'd3';

	export let data;

	export let onSelect;
	export let onReset;
	export let selected;

	export let xAccessor;
	export let xScale;

	export let yAccessor;
	export let yScale;

	export let colorScale;

	$: percentage = xAccessor(data);
	$: key = yAccessor(data);
	$: x = xScale(percentage);
	$: y = yScale(key);

	let valueRef;
	let textRef;

	onMount(() => updateOpacity(key));

	$: updateOpacity(key, selected);

	const updateOpacity = (d, s) => {
		select(valueRef)
			.transition()
			.duration(500)
			.ease(easeCubicOut)
			.attr('opacity', d === s || selected === '' ? 1 : 0.125);
		select(textRef)
			.transition()
			.duration(500)
			.ease(easeCubicOut)
			.style('opacity', d === s || selected === '' ? 1 : 0);
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
	bind:this={valueRef}
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
	bind:this={textRef}>{percentage}%</text
>

<style>
	.annotation {
		font-weight: bold;
		fill: white;
	}
</style>
