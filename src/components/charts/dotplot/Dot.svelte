<script>
	export let x;
	export let y;
	export let color;

	export let category;
	export let value;
	export let format;

	export let onSelect;
	export let onReset;
	export let selected;

	const radius = 7;
	$: opacity = selected == category ? '1' : '0';
</script>

<circle
	r={radius}
	cx={x}
	cy={y}
	fill={selected == category ? color : '#ccc'}
	fill-opacity={selected == category ? '1' : '0.5'}
	stroke={color}
	stroke-opacity="1"
	on:mouseover={onSelect}
	on:mouseout={onReset}
/>

<line x1={x} x2={x} y1={y - radius} y2={y - radius * 2} stroke={color} stroke-opacity={opacity} />

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
