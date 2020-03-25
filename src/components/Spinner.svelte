<script>
  export let position;
  export let color;
  export let size;
</script>

<div class={position}>
  <div
    style={'height:' + size + 'rem;' + ' width:' + size + 'rem;'}
    class={'spinner-border ' + color}
    role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
