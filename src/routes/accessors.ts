import { scaleOrdinal } from 'd3';
import type { Datum } from "../model/model";
import { regions } from "../model/model";

export const colors = ['#0ab1be', '#ec691d', '#b1105d', '#0e1f4f', '#8dc15b'];

export const topicAccessor = (d: Datum) => d.topic;
export const regionAccessor = (d: Datum) => d.region;
export const valueAccessor = (d: Datum): number => d.percentage;

export const colorScale = scaleOrdinal().domain(regions).range(colors);
