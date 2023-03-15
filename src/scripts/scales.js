import { scaleOrdinal } from 'd3';
import { regions, colors } from './static';

export const colorScale = scaleOrdinal().domain(regions).range(colors);