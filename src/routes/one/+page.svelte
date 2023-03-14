<script lang="ts">
	import {
		colorScale,
		regionAccessor,
		topicAccessor,
		valueAccessor
	} from '../accessors.ts';

	import Chart from '../../components/charts/one/Chart.svelte';
  import { regions, topics } from '../../model/model.ts';
	import type { LayoutResponse } from "../+layout.ts";

	export let data: LayoutResponse;
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
