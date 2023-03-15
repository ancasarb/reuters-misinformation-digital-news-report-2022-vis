<script>
	import Chart from '../../components/charts/two/Chart.svelte';

	import { regionAccessor, topicAccessor, valueAccessor } from '../../scripts/accessors.js';
	import { topics, regions } from '../../scripts/static.js';
	import { colorScale } from '../../scripts/scales.js';

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
