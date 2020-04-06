<script>
  export let error = false;
  export let color = "red";
</script>

<style>
  p {
    margin-bottom: 0;
    cursor: context-menu;
  }
  .error {
    color: rgb(255, 0, 0);
  }
  .error-white {
    color: #ffffff !important;
  }
</style>

{#if error}
  <p class="error" class:error-white={color === 'white'}>{error}</p>
{/if}
