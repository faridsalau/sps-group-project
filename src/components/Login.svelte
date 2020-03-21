<script>
  let email = "";
  let password = "";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function clicked() {
    dispatch("clicked");
  }
</script>

<style>
  input {
    border: #000 1px solid;
    border-radius: 3px;
    padding: 0 10px;
    width: 70%;
    outline: none;
    padding: 5px;
    transition: border 0.5s;
  }

  input:focus {
    border: #8cc9ff 1px solid;
  }

  button {
    margin-bottom: 10px;
  }

  #last-p {
    display: block;
  }

  p {
    color: #0073ba;
    font-size: 16px;
    margin-bottom: 5px;
    cursor: pointer;
    display: inline-block;
  }
</style>

<form on:submit|preventDefault>
  <div class="form-group">
    <input type="email" placeholder="Email" bind:value={email} />
  </div>
  <div class="form-group">
    <input type="password" placeholder="Password" bind:value={password} />
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
New here?
<p on:click={clicked}>Sign Up</p>
<p id="last-p">Forgot password</p>
