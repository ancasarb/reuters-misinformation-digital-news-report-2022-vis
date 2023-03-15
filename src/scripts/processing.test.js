import { parallelCoordinates } from './processing.js';

const data = [
	{
		group: 'Group1',
		axis: 'Axis1',
		value: 78
	},
	{
		group: 'Group1',
		axis: 'Axis2',
		value: 12
	},

	{
		group: 'Group2',
		axis: 'Axis1',
		value: 45
	},
	{
		group: 'Group2',
		axis: 'Axis2',
		value: 23
	},

	{
		group: 'Group3',
		axis: 'Axis1',
		value: 67
	},
	{
		group: 'Group3',
		axis: 'Axis2',
		value: 54
	}
];

test('test', () => {
	let output = parallelCoordinates(
		data,
		['Axis1', 'Axis2'],
		(d) => d.group,
		(d) => d.axis,
		(d) => d.value
	);
	expect(output.length).toBe(2);
});
