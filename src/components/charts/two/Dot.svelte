<script>
	export let x;
	export let y;
	export let color;

	export let category;
	export let value;
	export let format;

	export let selected;

	export let padding;

	const radius = 7;
	$: isSelected = selected == category;
	$: opacity = selected == category ? '1' : '0';
	$: padding = padding ? padding : 0;
</script>

<circle
	r={radius}
	cx={x}
	cy={y + padding}
	fill={isSelected ? color : '#ccc'}
	fill-opacity={isSelected ? '1' : '0.5'}
	stroke={color}
	stroke-opacity="1"
	on:mouseover
	on:mouseout
/>

<line x1={x} x2={x} y1={y - radius + padding} y2={y - radius * 2 + padding} stroke={color} stroke-opacity={opacity} />

<text class="annotation" font-weight="bold" {x} y={y - radius * 5.5} {opacity}>{category}</text>
<text class="annotation" {x} y={y - radius * 3} {opacity}>{value}{format}</text>

<style>
	circle,
	line {
		stroke-width: 1.5px;
	}

	.annotation {
		fill: #414140;
		text-anchor: middle;
		font-size: 14px;
	}
</style>
