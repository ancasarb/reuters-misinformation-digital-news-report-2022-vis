import { json } from '@sveltejs/kit';

export async function GET() {
	return json([
		{
			region: 'Europe',
			topic: 'COVID-19',
			percentage: 47
		},
		{
			region: 'North America',
			topic: 'COVID-19',
			percentage: 53
		},
		{
			region: 'Asia',
			topic: 'COVID-19',
			percentage: 45
		},
		{
			region: 'Latin America',
			topic: 'COVID-19',
			percentage: 54
		},
		{
			region: 'Africa',
			topic: 'COVID-19',
			percentage: 47
		},
		{
			region: 'Europe',
			topic: 'Politics',
			percentage: 34
		},
		{
			region: 'North America',
			topic: 'Politics',
			percentage: 43
		},
		{
			region: 'Asia',
			topic: 'Politics',
			percentage: 42
		},
		{
			region: 'Latin America',
			topic: 'Politics',
			percentage: 51
		},
		{
			region: 'Africa',
			topic: 'Politics',
			percentage: 49
		},
		{
			region: 'Europe',
			topic: 'Celebrities',
			percentage: 20
		},
		{
			region: 'North America',
			topic: 'Celebrities',
			percentage: 22
		},
		{
			region: 'Asia',
			topic: 'Celebrities',
			percentage: 29
		},
		{
			region: 'Latin America',
			topic: 'Celebrities',
			percentage: 33
		},
		{
			region: 'Africa',
			topic: 'Celebrities',
			percentage: 48
		},
		{
			region: 'Europe',
			topic: 'Climate change',
			percentage: 19
		},
		{
			region: 'North America',
			topic: 'Climate change',
			percentage: 32
		},
		{
			region: 'Asia',
			topic: 'Climate change',
			percentage: 15
		},
		{
			region: 'Latin America',
			topic: 'Climate change',
			percentage: 21
		},
		{
			region: 'Africa',
			topic: 'Climate change',
			percentage: 19
		},
		{
			region: 'Europe',
			topic: 'Immigration',
			percentage: 20
		},
		{
			region: 'North America',
			topic: 'Immigration',
			percentage: 27
		},
		{
			region: 'Asia',
			topic: 'Immigration',
			percentage: 9
		},
		{
			region: 'Latin America',
			topic: 'Immigration',
			percentage: 18
		},
		{
			region: 'Africa',
			topic: 'Immigration',
			percentage: 16
		},
		{
			region: 'Europe',
			topic: 'Products (e.g. scams)',
			percentage: 16
		},
		{
			region: 'North America',
			topic: 'Products (e.g. scams)',
			percentage: 19
		},
		{
			region: 'Asia',
			topic: 'Products (e.g. scams)',
			percentage: 22
		},
		{
			region: 'Latin America',
			topic: 'Products (e.g. scams)',
			percentage: 26
		},
		{
			region: 'Africa',
			topic: 'Products (e.g. scams)',
			percentage: 29
		}
	]);
}
