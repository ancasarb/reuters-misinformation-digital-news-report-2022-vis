<script>
	export let width;
	export let colorScale;
	export let categories;
	export let selected;
	export let onSelect;
</script>

<div class="legend-container" style="width: {width}px;">
	<ul class="color-legend">
		{#each categories as category}
			{@const selection = category === selected || selected === '' ? 'selected' : 'greyed'}
			<li
				class="color-legend-item"
				on:mouseover={() => onSelect(category)}
				on:mouseout={() => onSelect('')}
			>
				<span
					class={`color-legend-item-color ${selection}`}
					style={`background-color: ${colorScale(category)};`}
				/>
				<span class={`color-legend-item-label ${selection}`}>{category}</span>
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

	.selected {
		opacity: 1;
	}

	.greyed {
		opacity: 0.125;
	}

	.legend-container {
		border-bottom: #d1c8d2 solid;
		padding-bottom: 10px;
	}

	span {
		transition: opacity 0.5s ease-out;
	}
</style>
