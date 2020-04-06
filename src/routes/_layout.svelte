<script>
  import Nav from "../components/Nav.svelte";
  import { user } from "../stores.js";
  import { authState } from "rxfire/auth";
  import { collectionData } from "rxfire/firestore";
  import { onMount } from "svelte";
  import { map } from "rxjs/operators";
  export let segment;
  let loggedIn$;
  let userInfo;
  onMount(() => {
    if (window.auth) {
      authState(window.auth).subscribe(u => ($user = u));
      loggedIn$ = authState(auth).pipe(map(user => (user ? user : null)));
      loggedIn$.subscribe(user => {
        userInfo = user;
      });
    }
  });
</script>

<!-- TODO: Implement Nav component with cookie so quick flash does not occur-->
{#if userInfo !== null}
  <Nav {segment} />
{:else}
  <nav class="navbar">
    <span class="navbar-brand mb-0 h1 logo">mélangity</span>
  </nav>
{/if}

<main>
  <slot />
</main>
