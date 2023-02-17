<script>
	import TextBlock from './generic/TextBlock.svelte';
	import { axisBottom, select } from 'd3';
	import { range } from 'lodash';

	export let key;
	export let y;
	export let xScale;

	let axis;
	let transform = '';

	$: {
		const axisGeneratorBottom = axisBottom()
			.scale(xScale)
			.tickValues(range(0, 75, 15))
			.tickFormat((d) => d + '%');
		select(axis).call(axisGeneratorBottom);
		select(axis).select('.domain').attr('stroke', '#ccc');
		select(axis).selectAll('.tick').select('line').attr('stroke-width', 0);
		transform = `translate(0, ${y})`;
	}
</script>

<g transform={`translate(0, ${y / 3})`}>
	<TextBlock text={[key]} fontSize="16" color="#414140" />
</g>

<g class="axis" bind:this={axis} {transform} />
<slot />
