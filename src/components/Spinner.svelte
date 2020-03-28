<script>
  export let size = 4;
  export let color;
</script>

<style>
  .blue {
    color: #67bef4;
  }
  .white {
    color: #ffffff;
  }
</style>

<div
  style={'height:' + size + 'rem;' + ' width:' + size + 'rem;'}
  class={'spinner-border'}
  class:blue={color === 'blue'}
  class:white={color === 'white'}
  role="status">
  <span class="sr-only">Loading...</span>
</div>
