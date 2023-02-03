<script>
	export let width;
	export let colorScale;
	export let keys;
	export let selected;
</script>

<div class="legend-container" style="max-width: {width}px;">
	<ul class="color-legend">
		{#each keys as key}
			<li class="color-legend-item">
				<span
					class="color-legend-item-color"
					style={`background-color: ${colorScale(key)}; opacity: ${
						key === selected || selected === '' ? 1 : 0.125
					}`}
				/>
				<span
					class="color-legend-item-label"
					style={`opacity: ${key === selected || selected === '' ? 1 : 0.125}`}>{key}</span
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	.color-legend {
		display: flex;
		flex-wrap: wrap;
		margin: 0;
		padding-left: 0;
	}

	.color-legend-item {
		margin: 5px 12px;
	}

	.color-legend span {
		display: inline-block;
	}

	.color-legend-item-color {
		position: relative;
		top: 4px;
		width: 24px;
		height: 24px;
		margin-right: 5px;
	}

	.color-legend-item-label {
		color: '#414140';
	}

	li {
		list-style: none;
	}

	.legend-container {
		border-bottom: #d1c8d2 solid;
		padding-bottom: 10px;
	}

	span {
		transition: opacity 0.2s ease-out;
	}
</style>
