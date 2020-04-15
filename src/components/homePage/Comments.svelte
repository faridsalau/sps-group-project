<script>
  export let comments;
  import Comment from "./Comment.svelte";
</script>

<style>
  .comments-container {
    margin: 2rem 0 1rem 0;
    padding: 1rem;
  }
  p {
    color: #6c757d;
  }
</style>

<div class="comments-container shadow-sm">
  <h4>Comments</h4>
  {#if comments.length !== 0}
    {#each comments as comment, i}
      <Comment {comment} />
      {#if i !== comments.length - 1}
        <hr />
      {/if}
    {/each}
  {:else}
    <p>No comments yet...be the first comment</p>
  {/if}

</div>
