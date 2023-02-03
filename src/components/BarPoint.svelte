<script>
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
	opacity={key === selected || selected === '' ? 1 : 0.15}
	on:mouseover={onSelect}
	on:mouseout={onReset}
/>

<text
	class="annotation"
	{x}
	dx={-40}
	{y}
	dy={4}
	dominant-baseline="hanging"
	opacity={key === selected || selected === '' ? 1 : 0}
	on:mouseover={onSelect}
	on:mouseout={onReset}>{percentage}%</text
>

<style>
	.annotation {
		font-weight: bold;
		fill: white;
	}
</style>
