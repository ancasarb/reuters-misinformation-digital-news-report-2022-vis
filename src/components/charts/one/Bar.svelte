<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  export let d;

  export let selected;

  export let xAccessor;
  export let xScale;

  export let yAccessor;
  export let yScale;

  export let color;
  export let format;

  $: category = yAccessor(d);
  $: value = xAccessor(d);
  $: x = xScale(value);
  $: y = yScale(category);

  const valueOpacity = tweened(1, {
    duration: 500,
    easing: cubicOut
  });

  const textOpacity = tweened(1, {
    duration: 500,
    easing: cubicOut
  });

  $: {
    const isGreyedOut = !(category === selected || selected === '');
    if (isGreyedOut) {
      valueOpacity.set(0.125);
      textOpacity.set(0);
    } else {
      valueOpacity.set(1);
      textOpacity.set(1);
    }
  }

  $: width = xScale.range()[1];
  $: height = yScale.bandwidth();
</script>

<div style:position="absolute" style:height="{height}px" style:top="{y}px" style:width="{width}px">
  <svg viewBox="0 0 {width} {height}">
    <rect
      x={0}
      y={0}
      height={height}
      width={width}
      fill="#ececec"
      on:mouseover
      on:mouseout
    />
    <rect
      x={0}
      y={0}
      height={height}
      width={x}
      fill={color}
      on:mouseover
      on:mouseout
      opacity={$valueOpacity}
    />
  </svg>

  <div
    class="annotation"
    style:right="{width-x}px"
    on:mouseover
    on:mouseout
    style:opacity="{$textOpacity}">
    {value}{format}
  </div>
</div>

<style>
    .annotation {
        position: absolute;
        margin-right: 0.5em;
        top: 0;
        font-size: 15px;
        line-height: 23px;
        font-weight: bold;
        color: white;
    }
</style>
