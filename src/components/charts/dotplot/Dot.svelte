<script>
	export let d;
	export let category;
	export let x;
	export let y;
	export let color;

	export let onSelect;
	export let onReset;
	export let selected;

</script>

<circle
	r="7"
	cx={x}
	cy={y}
	fill={selected == category ? color: "#ccc"}
	fill-opacity={selected == category? "1": "0.5"}
	stroke={color}
	stroke-width="1.5px"
	stroke-opacity="1"
	on:mouseover={onSelect}
	on:mouseout={onReset}
/>
