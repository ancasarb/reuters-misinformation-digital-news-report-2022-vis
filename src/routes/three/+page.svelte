<script>
	import Chart from '../../components/charts/three/Chart.svelte';

	import { max } from 'd3';
	import lodash from 'lodash';
	const filter = lodash.filter;

	import { regionAccessor, topicAccessor, valueAccessor } from '../../scripts/accessors.js';
	import { topics, regions } from '../../scripts/static.js';
	import { colorScale } from '../../scripts/scales.js';
	import { parallelCoordinates } from '../../scripts/processing.js';

	export let data;

	$: maxValue = Math.ceil(max(data.values, valueAccessor) / 10) * 10;

	$: postprocessed = parallelCoordinates(data, regions, regionAccessor, topicAccessor, valueAccessor);

</script>

<Chart
	data={postprocessed}
	groups={topics}
	categories={regions}
	{maxValue}
	{colorScale}
	format="%"
/>
