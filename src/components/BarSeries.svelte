<script>
	import TextBlock from './generic/TextBlock.svelte';
	import BarPoint from './BarPoint.svelte';

	import { filter } from 'lodash';

	export let condition;
	export let data;
	export let topMargin;
	export let leftMargin;
	export let key;

	export let onSelect;
	export let selected;

	export let xAccessor;
	export let xScale;

	export let yAccessor;
	export let yScale;

	export let colorScale;

	$: series = filter(data, condition);

	const display = function (key) {
		var i = key.indexOf(' ');
		if (i > 0) {
			return [key.substring(0, i), key.substring(i + 1)];
		} else return [key];
	};
</script>

<g transform={`translate(0, ${topMargin})`}>
	<TextBlock text={display(key)} fontSize="16" color="#414140" />

	<g transform={`translate(${leftMargin}, 0)`}>
		{#each series as d}
			<BarPoint
				data={d}
				onSelect={() => onSelect(yAccessor(d))}
				onReset={() => onSelect('')}
				{selected}
				{xAccessor}
				{xScale}
				{yAccessor}
				{yScale}
				{colorScale}
			/>
		{/each}
	</g>
</g>
