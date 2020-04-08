<script>
  import Post from "./Post.svelte";
  export let posts;
</script>

<style>
  .bg {
    background-color: #63c2fd;
  }
  h3 {
    color: #63c2fd;
  }
</style>

<div class="col" class:bg={posts}>

  {#if posts}
    {#each posts as post}
      <Post {post} />
    {/each}
  {:else}
    <h3>Seems like there's not posts yet. Make the first post today!</h3>
  {/if}

</div>
