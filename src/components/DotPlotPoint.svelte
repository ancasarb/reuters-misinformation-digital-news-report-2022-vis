<script>
	export let d;
	export let key;
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
	fill={selected == key ? color: "#ccc"}
	fill-opacity={selected == key? "1": "0.5"}
	stroke={color}
	stroke-width="1.5px"
	stroke-opacity="1"
	on:mouseover={onSelect}
	on:mouseout={onReset}
/>
