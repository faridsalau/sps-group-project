<script>
  import { createComment } from "../../actions/postActions.js";
  import { createEventDispatcher } from "svelte";
  export let postId;
  let body = "";
  const dispatch = createEventDispatcher();
  function emitNewComment(newComment) {
    dispatch("newComment", newComment);
  }
  const handleSubmit = () => {
    createComment(body, postId)
      .then(createdComment => {
        body = "";
        emitNewComment(createdComment);
      })
      .catch(err => {
        console.error(err);
      });
  };
</script>

<style>
  textarea {
    width: 100%;
    resize: none;
    border: #000 0.5px solid;
    padding: 10px;
  }
  button {
    float: right;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <textarea
    placeholder="Add a new comment!"
    name=""
    id=""
    cols="30"
    rows="5"
    bind:value={body} />
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
