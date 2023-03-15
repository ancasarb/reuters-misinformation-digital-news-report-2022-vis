<script>
	import { regionAccessor, topicAccessor, valueAccessor } from '../../scripts/accessors.js';
	import { topics, regions } from '../../scripts/static.js';
	import { colorScale } from '../../scripts/scales.js';

	import Chart from '../../components/charts/one/Chart.svelte';

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
