<script>
	import {
		colorScale,
		regions,
		regionAccessor,
		topics,
		topicAccessor,
		valueAccessor
	} from '../accessors.js';

	import Chart from '../../components/charts/horizontalgroupedbarchart/Chart.svelte';

	export let data;
</script>

<Chart
	data={data.values}
	format="%"
	clusters={topics}
	bars={regions}
	{colorScale}
	{valueAccessor}
	barAccessor={regionAccessor}
	clusterAccessor={topicAccessor}
/>
