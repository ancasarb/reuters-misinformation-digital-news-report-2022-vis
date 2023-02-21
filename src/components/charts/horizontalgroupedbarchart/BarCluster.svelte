<script>
	export let category;
  export let width = 50;
</script>

<div class="cluster">
  <div class="category" style:width="{width}px">{category}</div>
  <div class="bars">
    <slot />
  </div>
</div>

<style>
  .cluster {
      display: flex;
      height: 100%;
  }

  .category {
      font-size: 16px;
      color: #414140;
  }

  .bars {
      flex-grow: 1;
  }
</style>
