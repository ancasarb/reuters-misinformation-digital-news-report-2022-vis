<script>
	import { regionsLegend } from '../ui/metadata';
	import { keys } from 'lodash';
</script>

<div class="legend-container">
	<ul class="color-legend">
		{#each keys(regionsLegend) as region}
			<li class="color-legend-item">
				<span
					class="color-legend-item-color"
					style={`background-color: ${regionsLegend[region]};`}
				/>
				<span class="color-legend-item-label">{region}</span>
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
</style>
