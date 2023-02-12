<script>
	export let text;
	export let color;
	export let fontSize;
	const lineHeight = parseInt(fontSize, 10) * 1.2;
</script>

<text dominant-baseline="hanging" fill={color} font-size="{fontSize}px">
	{#each text as t, i}
		{#if i == 0}
			<tspan x="0" dy={0}>{t}</tspan>
		{:else}
			<tspan x="0" dy={lineHeight}>{t}</tspan>
		{/if}
	{/each}
</text>
