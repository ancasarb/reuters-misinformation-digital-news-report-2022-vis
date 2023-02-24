<script>
	import Chart from '../../../components/charts/horizontalgroupedbarchart/Chart.svelte';
	import {
		colorScale,
		regions,
		regionAccessor,
		topics,
		topicAccessor,
		valueAccessor
	} from '../../../lib/accessors.js';


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
	selected={data.context.regions[0]}
/>
