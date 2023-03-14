<script>
	import Chart from '../../components/charts/two/Chart.svelte';

	import {
		colorScale,
		regionAccessor,
		topicAccessor,
		valueAccessor
	} from '../accessors.ts';
  import { regions, topics } from '../../model/model.js';

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
