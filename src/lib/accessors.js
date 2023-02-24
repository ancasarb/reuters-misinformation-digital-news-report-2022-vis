import { scaleOrdinal } from 'd3';

export const topics = [
	'COVID-19',
	'Politics',
	'Celebrities',
	'Climate change',
	'Immigration',
	'Products (e.g. scams)'
];
export const regions = ['Europe', 'North America', 'Asia', 'Latin America', 'Africa'];

export const colors = ['#0ab1be', '#ec691d', '#b1105d', '#0e1f4f', '#8dc15b'];

export const topicAccessor = (d) => d.topic;
export const regionAccessor = (d) => d.region;
export const valueAccessor = (d) => d.percentage;

export const colorScale = scaleOrdinal().domain(regions).range(colors);
