<script>
  export let error = false;
</script>

<style>
  .error {
    color: rgb(255, 0, 0);
    cursor: context-menu;
  }
</style>

{#if error}
  <p class="error">{error}</p>
{/if}
