<script>
	import { axisBottom, select } from 'd3';
	import lodash from 'lodash';
	const range = lodash.range;

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
	<text dominant-baseline="hanging" fill="#414140" font-size="16px"> {category}</text>
</g>

<g class="axis" bind:this={axis} {transform} />
<slot />
