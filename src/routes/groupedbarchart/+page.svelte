<script>
	import GroupedBarChart from '../../components/charts/GroupedBarChart.svelte';

	import {
		regionAccessor,
		valueAccessor,
		topicAccessor,
		topics,
		regions,
		colors
	} from '../accessors.js';

	export let data;
</script>

<GroupedBarChart
	data={data.values}
	series={topics}
	bars={regions}
	{colors}
	{valueAccessor}
	barAccessor={regionAccessor}
	seriesAccessor={topicAccessor}
/>
