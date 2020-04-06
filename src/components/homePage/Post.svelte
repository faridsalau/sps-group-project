<script>
  export let post;
  import { timeSince } from "../../util/utilFunctions.js";
  import {
    removeIFeelYou,
    addIFeelYou,
    hasFeltPost
  } from "../../actions/postActions.js";
  import { user, iFeelYous } from "../../stores.js";
  const timeSincePost = timeSince(post.createdAt);
  const handleClick = () => {
    if (post) {
      if (!hasFeltPost(post.postId)) {
        console.log("here");
        addIFeelYou(post.postId).then(() => {
          post.iFeelYouCount += 1;
          post.iFeelYouCount = post.iFeelYouCount;
          $iFeelYous = [
            {
              username: $user.displayName,
              postId: post.postId
            },
            ...$iFeelYous
          ];
        });
      } else {
        removeIFeelYou(post.postId)
          .then(() => {
            post.iFeelYouCount -= 1;
            post.iFeelYouCount = post.iFeelYouCount;
            $iFeelYous = $iFeelYous.filter(
              iFeelYou => iFeelYou.postId !== post.postId
            );
            $iFeelYous = $iFeelYous;
            console.log($iFeelYous);
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  };
</script>

<style>
  .post-card {
    width: 80%;
    background-color: white;
    margin: 1.5rem;
    border-radius: 12px;
  }
  .post-meta {
    display: flex;
    justify-content: space-between;
  }
  .post-meta div {
    margin-top: 1rem;
    color: #6d8491;
    font-size: 12px;
  }

  .post-meta div p {
    margin-bottom: 0.5rem;
  }

  .post-title {
    color: #546975;
  }
  .post-body {
    color: #546975;
    font-size: 14px;
  }
  .card-content {
    margin: 0 10%;
  }
  .eng-btn {
    background-color: #63c2fd;
    border: none;
    margin-bottom: 1.5rem;
    border-radius: 5px;
    color: white;
    padding: 0.2rem 0.5rem;
  }
  .eng-btn:hover {
    background-color: #75caff;
  }
  .count {
    background-color: #ffffff;
    color: #63c2fd;
    border-radius: 2px;
    padding: 0 1rem;
    margin: 0 0.5rem;
  }

  .post-engagment {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }
</style>

<!-- TODO: Figure out design for mobile -->
<div class="post-card shadow-sm ml-auto mr-auto">
  <div class="card-content">

    <div class="post-meta">
      <div class="author-info">
        <p>@{post.username}</p>
      </div>
      <div class="date-posted">{timeSincePost} ago</div>
    </div>

    <h4 class="post-title">{post.title}</h4>

    <p class="post-body">{post.bodySummary}</p>

    <div class="post-engagment">
      <button class="eng-btn shadow-sm" type="button" on:click={handleClick}>
        I feel you
        <span class="count">{post.iFeelYouCount}</span>
      </button>
      <button class="eng-btn shadow-sm" type="button">
        Comments
        <span class="count">{post.commentCount}</span>
      </button>
    </div>

  </div>
</div>
