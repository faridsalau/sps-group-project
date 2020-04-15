<script>
  import { onMount } from "svelte";
  import { getPostComments } from "../../actions/postActions.js";
  import { createEventDispatcher } from "svelte";
  import CommentArea from "./CommentArea.svelte";
  import Comments from "../homePage/Comments.svelte";
  import Spinner from "../Spinner.svelte";
  import { fade } from "svelte/transition";
  export let post;
  const dispatch = createEventDispatcher();
  function close() {
    dispatch("close");
  }
  let postComments = [];
  let loading = true;
  onMount(() => {
    getPostComments(post.postId)
      .then(comments => {
        postComments = comments;
        loading = false;
      })
      .catch(() => {
        loading = false;
      });
  });
  const handleNewComment = event => {
    postComments = [event.detail, ...postComments];
  };
</script>

<style>
  .my-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
    z-index: 1;
  }
  .modal-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem 1.5rem;
    width: 80%;
    border-radius: 0.5rem;
    max-height: 80%;
    overflow: auto;
    margin-top: 1rem;
    -ms-overflow-style: none;
  }
  .modal-container::-webkit-scrollbar {
    display: none;
  }

  .close-button {
    float: right;
    width: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: lightgray;
    position: sticky;
    top: 0;
  }
  .close-button:hover {
    background-color: darkgray;
  }
  .show-modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
  }

  .modal-content-container {
    width: 80%;
  }
</style>

<div class="my-modal show-modal" transition:fade={{ duration: 100 }}>

  <div class="modal-container">
    <span class="close-button" on:click={close}>&times;</span>
    <div class="modal-content-container">

      <div class="modal-header">
        <div class="modal-title">
          <h4>{post.title.toUpperCase()}</h4>
        </div>
      </div>

      <div class="modal-body">
        {@html post.formattedBody}
        <CommentArea postId={post.postId} on:newComment={handleNewComment} />
      </div>

      {#if !loading}
        <Comments comments={postComments} />
      {:else}
        <Spinner color="blue" />
      {/if}

    </div>
  </div>
</div>
