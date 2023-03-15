import lodash from 'lodash';
const filter = lodash.filter;

export function parallelCoordinates(
	data,
	dimensions,
	dimensionAccessor,
	headingAccessor,
	valueAccessor
) {
	let postprocessed = [];
	for (let i in dimensions) {
		const dimension = dimensions[i];
		const filtered = filter(data.values, (item) => dimensionAccessor(item) === dimension);

		let d = { dimension: dimension };
		for (let j in filtered) {
			const curr = filtered[j];
			d[headingAccessor(curr)] = valueAccessor(curr);
		}

		postprocessed.push(d);
	}

    return postprocessed;
}
