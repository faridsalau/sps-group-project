<script>
  export let comment;
  import { timeSince } from "../../util/utilFunctions.js";
</script>

<style>
  .comment-data {
    display: flex;
    justify-content: space-between;
  }
  .comment-container {
    margin: 1.5rem 0 0.5rem 0;
  }
  p {
    font-size: 0.8rem;
    margin-bottom: 0;
    color: #585b5d;
  }
</style>

<div class="comment-container">
  <div class="comment-data">
    <p>@{comment.username}</p>
    <p>{timeSince(comment.createdAt)}</p>
  </div>
  {comment.body}
</div>
