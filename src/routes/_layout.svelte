<script>
  import Nav from "../components/Nav.svelte";
  import { authState } from "rxfire/auth";
  import { collectionData } from "rxfire/firestore";
  import { onMount } from "svelte";
  import { map } from "rxjs/operators";
  export let segment;
  let loggedIn$;
  let userInfo;
  onMount(() => {
    if (window.auth) {
      loggedIn$ = authState(auth).pipe(map(user => (user ? user : null)));
      loggedIn$.subscribe(user => {
        userInfo = user;
      });
    }
  });
</script>

<style>

</style>

<!-- TODO: Implement Nav component with cookie so quick flash does not occur-->
{#if userInfo !== null}
  <Nav {segment} />
{/if}

<main>
  <slot />
</main>
