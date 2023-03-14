<script>
	import Chart from '../../components/charts/three/Chart.svelte';

	import { max } from 'd3';
	import lodash from 'lodash';
	const filter = lodash.filter;

	import {
		colorScale,
		regionAccessor,
		topicAccessor,
		valueAccessor
	} from '../accessors.ts';
  import { regions, topics } from '../../model/model.js';

	export let data;

	$: maxValue = Math.ceil(max(data.values, valueAccessor) / 10) * 10;

	$: postprocessed = [];
	$: {
		for (let i in regions) {
			const dimension = regions[i];
			const filtered = filter(data.values, (item) => regionAccessor(item) === dimension);

			let d = { dimension: dimension };
			for (let j in filtered) {
				const curr = filtered[j];
				d[topicAccessor(curr)] = valueAccessor(curr);
			}

			postprocessed.push(d);
		}
	}
</script>

<Chart data={postprocessed} groups={topics} categories={regions} {maxValue} {colorScale} format="%" />
