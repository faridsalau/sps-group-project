<script>
  export let segment;
</script>

<style>
  .navbar {
    padding: 1rem 2rem;
  }

  .logo {
    color: #67bef4;
    font-size: 24px;
    font-weight: bold;
  }
  .active {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    padding: 5px 10px;
    margin: 0 2px;
  }

  .page:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    padding: 5px 10px;
  }

  span {
    cursor: pointer;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-light">
  <span class="navbar-brand mb-0 h1 logo">mélangity</span>
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
        <a class="nav-link page" class:active={segment === undefined} href=".">
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
        <span class="nav-link">log out</span>
      </li>
    </ul>
  </div>
</nav>
