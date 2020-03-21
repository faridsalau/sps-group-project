<script>
  import Signup from "../components/Signup.svelte";
  import Login from "../components/Login.svelte";
  let clicked = false;
  const handleClick = () => (clicked = !clicked);
</script>

<style>
  :global(body) {
    background: url(/images/home-image.svg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  nav {
    color: #67bef4;
  }
  span {
    font-size: 24px;
    font-weight: bold;
  }
  .navbar {
    padding: 1rem 2rem;
  }
  .definition {
    font-style: italic;
    color: #8cc9ff;
  }
  .quote-card {
    width: 300px;
    margin: 20px;
    background-color: #fff;
    border-radius: 3px;
    max-height: 120px;
  }

  .quote-card p {
    margin: 10px auto;
    color: #000;
    font-size: 18px;
  }

  .col-md-5 {
    margin: 20px 15px;
    background: #ffffff;
    color: #000;
    border-radius: 3px;
  }
</style>

<svelte:head>
  <title>mélangity | share your diverse perspective</title>
</svelte:head>

<nav class="navbar ">
  <span class="navbar-brand mb-0 h1">mélangity</span>
</nav>

<div class="container">

  <p class="definition">mé·lange - a mixture; a medley.</p>
  <div class="row">
    <div class="quote-card col">
      <p>
        “Diversity is about all of us, and about us having to figure out how to
        walk through this world together.” - Jacqueline Woodson
      </p>
    </div>

    <div class="col-md-5">
      <h4>
        We all have different experiences in tech.
        <b>Share your diverse perspective today!</b>
      </h4>
      {#if clicked}
        <Login on:clicked={handleClick} />
      {:else}
        <Signup on:clicked={handleClick} />
      {/if}
    </div>

  </div>
</div>
