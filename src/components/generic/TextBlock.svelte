<script>
	export let text;
	export let color;
	export let fontSize;
	const lineHeight = parseInt(fontSize, 10) * 1.2;
</script>

<text dominant-baseline="hanging" fill={color} font-size="{fontSize}px">
	{#each text as t}
		<tspan x="0" dy={lineHeight}>{t}</tspan>
	{/each}
</text>
