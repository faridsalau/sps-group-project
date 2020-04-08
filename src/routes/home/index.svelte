<script>
  import Posts from "../../components/homePage/Posts.svelte";
  import Filter from "../../components/homePage/Filter.svelte";
  const body =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris";
  const posts = [
    {
      username: "faridsalau",
      createdAt: "2018-03-31T20:05:09.522Z",
      title: "Writing articles about the problems we face",
      body: body,
      iFeelYouCount: 18,
      commentCount: 29
    },
    {
      username: "emmanouf",
      createdAt: "2020-03-31T20:05:09.522Z",
      title: "Learning English while pursing a CS Major",
      body: body + " " + body,
      iFeelYouCount: 180,
      commentCount: 299
    },
    {
      username: "rebehe",
      createdAt: "2020-02-31T20:05:09.522Z",
      title: "Working at Google",
      body: body + " " + body,
      iFeelYouCount: 10,
      commentCount: 303
    }
  ];
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
