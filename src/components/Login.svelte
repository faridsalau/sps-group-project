<script>
  import { createEventDispatcher } from "svelte";
  import { handleEmailBlur, handlePasswordBlur } from "../util/homePageBlur.js";
  import ErrorMessage from "./ErrorMessage.svelte";
  import { user } from "../util/dataRepresentations.js";
  let errors = {};
  const dispatch = createEventDispatcher();
  function clicked() {
    dispatch("clicked");
  }
  function _handleEmailBlur() {
    handleEmailBlur(user.email, errors);
    errors = errors;
  }
  function _handlePasswordBlur() {
    handlePasswordBlur(user.password, errors);
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
    cursor: context-menu;
  }

  input.error {
    border: rgb(255, 0, 0) 1px solid;
  }
</style>

<form on:submit|preventDefault>
  <div class="form-group">
    <input
      class:error={errors.email}
      type="email"
      placeholder="Email"
      bind:value={user.email}
      on:blur={_handleEmailBlur} />
    <ErrorMessage error={errors.email} />
  </div>

  <div class="form-group">
    <input
      class:error={errors.password}
      type="password"
      placeholder="Password"
      bind:value={user.password}
      on:blur={_handlePasswordBlur} />
    <ErrorMessage error={errors.password} />
  </div>

  <button type="submit" class="btn btn-primary">Login</button>
</form>
New here?
<p on:click={clicked}>Sign Up</p>
<p id="last-p">Forgot password</p>
