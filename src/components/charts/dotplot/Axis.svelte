<script>
	import { axisBottom, select } from 'd3';
	import lodash from 'lodash';
	const range = lodash.range;

	import TextBlock from '../../generic/TextBlock.svelte';

	export let category;
	export let y;
	export let xScale;
	export let format;

	let axis;
	let transform = '';
	$: transform = `translate(0, ${y})`;

	$: {
		const axisGeneratorBottom = axisBottom()
			.scale(xScale)
			.tickValues(range(0, 75, 15))
			.tickFormat((d) => d + format);
		select(axis).call(axisGeneratorBottom);
		select(axis).select('.domain').attr('stroke', '#ccc');
		select(axis).selectAll('.tick').select('line').attr('stroke-width', 0);
	}
</script>

<g transform={`translate(0, ${y / 3})`}>
	<TextBlock text={[category]} fontSize="16" color="#414140" />
</g>

<g class="axis" bind:this={axis} {transform} />
<slot />
