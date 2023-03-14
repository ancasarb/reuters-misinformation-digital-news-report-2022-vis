// TODO: rename this file to reflect domain names!!!

export const topics = [
  'COVID-19',
  'Politics',
  'Celebrities',
  'Climate change',
  'Immigration',
  'Products (e.g. scams)'
] as const;

// Nice trick ;)
type Topic = typeof topics[number];

export const regions = ['Europe', 'North America', 'Asia', 'Latin America', 'Africa'] as const;

type Region = typeof regions[number];

export interface Datum {
  region: Region;
  topic: Topic;
  percentage: number;
  padding?: number; // What is this?
}

export type Data = Array<Datum>;
