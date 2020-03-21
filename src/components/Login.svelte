<script>
  import { createEventDispatcher } from "svelte";
  import { handleEmailBlur, handlePasswordBlur } from "../util/homePageBlur.js";
  let email = "";
  let password = "";
  let errors = {};
  const dispatch = createEventDispatcher();
  function clicked() {
    dispatch("clicked");
  }
  function _handleEmailBlur() {
    handleEmailBlur(email, errors);
    errors = errors;
  }
  function _handlePasswordBlur() {
    handlePasswordBlur(password, errors);
    errors = errors;
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

  .error {
    color: rgb(255, 0, 0);
  }
</style>

<form on:submit|preventDefault>
  <div class="form-group">
    <input
      type="email"
      placeholder="Email"
      bind:value={email}
      on:blur={_handleEmailBlur} />
    {#if errors.email}
      <p class="error">{errors.email}</p>
    {/if}
  </div>

  <div class="form-group">
    <input
      type="password"
      placeholder="Password"
      bind:value={password}
      on:blur={_handlePasswordBlur} />
    {#if errors.password}
      <p class="error">{errors.password}</p>
    {/if}
  </div>

  <button type="submit" class="btn btn-primary">Login</button>
</form>
New here?
<p on:click={clicked}>Sign Up</p>
<p id="last-p">Forgot password</p>
