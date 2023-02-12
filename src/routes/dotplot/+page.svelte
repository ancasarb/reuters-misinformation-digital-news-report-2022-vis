<script>
	import DotPlot from '../../components/charts/DotPlot.svelte';

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

<DotPlot
	data={data.values}
	rows={topics}
	points={regions}
	{colors}
	xAccessor={valueAccessor}
	colorAccessor={regionAccessor}
	yAccessor={topicAccessor}
/>
