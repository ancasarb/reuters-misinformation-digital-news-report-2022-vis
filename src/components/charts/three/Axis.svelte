<script>
	import { axisLeft, select } from 'd3';
	import lodash from 'lodash';
	const range = lodash.range;

	export let group;
	export let x;
	export let yScale;
	export let format;

	let axis;
	let transform = '';
	$: transform = `translate(${x}, 0)`;

	$: {
		const axisGenerator = axisLeft()
			.scale(yScale)
			.tickValues(range(0, 75, 15))
			.tickFormat((d) => d + format);
		select(axis).call(axisGenerator);
		select(axis).select('.domain').attr('stroke', '#ccc');
		select(axis).selectAll('.tick').select('line').attr('stroke', '#ccc');
	}
</script>

<g class="axis" bind:this={axis} {transform} />

<g transform={`translate(${x}, ${yScale.range()[0] + 10})`}>
	<text dominant-baseline="hanging" fill="#414140" font-size="12px" text-anchor="middle">
		{group}</text
	>
</g>
