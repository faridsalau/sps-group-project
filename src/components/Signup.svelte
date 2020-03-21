<script>
  import { createEventDispatcher } from "svelte";
  import ErrorMessage from "./ErrorMessage.svelte";
  import {
    handleEmailBlur,
    handleFirstNameBlur,
    handleLastNameBlur,
    handlePasswordBlur
  } from "../util/homePageBlur.js";
  let newUser = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  let errors = {};
  const dispatch = createEventDispatcher();
  function clicked() {
    dispatch("clicked");
  }
  function _handleFirstNameBlur() {
    handleFirstNameBlur(newUser.firstName, errors);
    errors = errors;
  }
  function _handleLastNameBlur() {
    handleLastNameBlur(newUser.lastName, errors);
    errors = errors;
  }
  function _handleEmailBlur() {
    handleEmailBlur(newUser.email, errors);
    errors = errors;
  }
  function _handlePasswordBlur() {
    handlePasswordBlur(newUser.password, errors);
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

  p {
    color: #0073ba;
    font-size: 16px;
    margin-bottom: 5px;
    cursor: pointer;
    display: inline-block;
  }

  input.error {
    border: rgb(255, 0, 0) 1px solid;
  }
</style>

<form on:submit|preventDefault>
  <div class="form-group">
    <input
      class:error={errors.firstName}
      type="text"
      name="first-name"
      placeholder="First Name"
      bind:value={newUser.firstName}
      on:blur={_handleFirstNameBlur} />
    <ErrorMessage error={errors.firstName} />
  </div>

  <div class="form-group">
    <input
      class:error={errors.lastName}
      type="text"
      name="last-name"
      placeholder="Last Name"
      bind:value={newUser.lastName}
      on:blur={_handleLastNameBlur} />
    <ErrorMessage error={errors.lastName} />
  </div>

  <div class="form-group">
    <input
      class:error={errors.email}
      type="email"
      name="email"
      placeholder="Email"
      bind:value={newUser.email}
      on:blur={_handleEmailBlur} />
    <ErrorMessage error={errors.email} />
  </div>

  <div class="form-group">
    <input
      class:error={errors.password}
      type="password"
      name="password"
      placeholder="Password"
      bind:value={newUser.password}
      on:blur={_handlePasswordBlur} />
    <ErrorMessage error={errors.password} />
  </div>

  <button type="submit" class="btn btn-primary">Sign Up</button>
</form>
Have an account?
<p on:click={clicked}>Login</p>
