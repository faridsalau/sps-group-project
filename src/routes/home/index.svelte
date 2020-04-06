<script context="module">
  import { collectionData } from "rxfire/firestore";
  import { getAllPosts } from "../../actions/postActions.js";
  export async function preload(page, session) {
    const unResolvedPosts = await getAllPosts();
    const posts = await unResolvedPosts;
    return { posts };
  }
</script>

<script>
  import { getUserIFeelYous } from "../../actions/userActions.js";
  import Posts from "../../components/homePage/Posts.svelte";
  import Filter from "../../components/homePage/Filter.svelte";
  import { onMount } from "svelte";
  import { user, iFeelYous } from "../../stores.js";

  let hasIFeelYous = false;

  $: if ($user && !$iFeelYous && !hasIFeelYous) {
    getUserIFeelYous().then(iFeelYouList => {
      $iFeelYous = iFeelYouList;
      hasIFeelYous = true;
    });
  }

  export let posts;
</script>

<style>
  :global(body) {
    background: white;
  }
  .top-text {
    color: #546975;
  }
  .container {
    margin-top: 5rem;
  }
</style>

<svelte:head>
  <title>mélangity | home</title>
</svelte:head>

<div class="container">
  <p class="top-text">
    Share your experiences in tech, or learn about others experiences!
  </p>
  <div class="row">
    <Posts {posts} />
    <div class="col-md-5">
      <Filter />
    </div>
  </div>
</div>
