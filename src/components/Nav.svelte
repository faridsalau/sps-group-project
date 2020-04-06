<script>
  export let segment;
  import { logout } from "../actions/userActions.js";
  import { goto } from "@sapper/app";
  const handleClick = async () => {
    await goto("/home");
  };
</script>

<style>
  .active {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 10px;
  }

  .page:hover,
  span:last-child:hover {
    /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 10px; */
    transform: scale(0.95);
  }

  .nav-item {
    margin: 0 0.5rem;
  }

  span {
    cursor: pointer;
  }
</style>

<!-- TODO: Figure out why nav does not click onClick while in mobile view -->
<nav class="navbar navbar-expand-lg navbar-light fixed-top">
  <span class="mb-0 h1 logo" on:click={handleClick}>mélangity</span>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>

  <div
    class="collapse navbar-collapse justify-content-end"
    id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link page" class:active={segment === 'home'} href="home">
          home
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link page"
          class:active={segment === 'create'}
          href="create">
          create post
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link page"
          class:active={segment === 'profile'}
          href="profile">
          profile
        </a>
      </li>
      <li class="nav-item">
        <span class="nav-link" on:click={logout}>log out</span>
      </li>
    </ul>
  </div>
</nav>
