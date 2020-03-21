<script>
  import { createEventDispatcher } from "svelte";
  import {
    isValidEmail,
    isValidName,
    isValidPassword,
    isEmpty
  } from "../util/validators.js";
  import signupErrors from "../util/signup/signupErrors.js";
  let email = "";
  let password = "";
  let firstName = "";
  let lastName = "";
  let errors = {};
  const dispatch = createEventDispatcher();
  function clicked() {
    dispatch("clicked");
  }
  function handleBlur(e) {
    if (e.target.name === "first-name") {
      if (isEmpty(firstName) || !isValidName(firstName)) {
        errors.firstName = signupErrors.firstName;
      } else {
        delete errors.firstName;
      }
    }
    if (e.target.name === "last-name") {
      if (isEmpty(lastName) || !isValidName(lastName)) {
        errors.lastName = signupErrors.lastName;
      } else {
        delete errors.lastName;
      }
    }
    if (e.target.name === "email") {
      if (isEmpty(email) || !isValidEmail(email)) {
        errors.email = signupErrors.email;
      } else {
        delete errors.email;
      }
    }
    if (e.target.name === "password") {
      if (isEmpty(password) || !isValidPassword(password)) {
        errors.password = signupErrors.password;
      } else {
        delete errors.password;
      }
    }
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
</style>

<form on:submit|preventDefault>
  <div class="form-group">
    <input
      type="text"
      name="first-name"
      placeholder="First Name"
      bind:value={firstName}
      on:blur={handleBlur} />
  </div>
  <div class="form-group">
    <input
      type="text"
      name="last-name"
      placeholder="Last Name"
      bind:value={lastName}
      on:blur={handleBlur} />
  </div>
  <div class="form-group">
    <input
      type="email"
      name="email"
      placeholder="Email"
      bind:value={email}
      on:blur={handleBlur} />
  </div>
  <div class="form-group">
    <input
      type="password"
      name="password"
      placeholder="Password"
      bind:value={password}
      on:blur={handleBlur} />
  </div>
  <button type="submit" class="btn btn-primary">Sign Up</button>
</form>
Have an account?
<p on:click={clicked}>Login</p>
