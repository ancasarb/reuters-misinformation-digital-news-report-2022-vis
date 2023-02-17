<script>
	import Chart from '../../components/charts/dotplot/Chart.svelte';

	import {
		colorScale,
		regions,
		regionAccessor,
		topics,
		topicAccessor,
		valueAccessor
	} from '../accessors.js';

	export let data;
</script>

<Chart
	data={data.values}
	groups={topics}
	dots={regions}
	{valueAccessor}
	dotAccessor={regionAccessor}
	groupAccessor={topicAccessor}
	{colorScale}
	format="%"
/>
