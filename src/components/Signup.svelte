<script>
  import { createEventDispatcher } from "svelte";
  import ErrorMessage from "./ErrorMessage.svelte";
  import { isEmpty } from "../util/utilFunctions.js";
  import { signup } from "../actions/accountEntryActions.js";
  import Spinner from "./Spinner.svelte";
  import {
    handleEmail,
    handleFirstName,
    handleLastName,
    handlePassword,
    handleUserName
  } from "../util/accountEntry.js";

  // 'newUser' variable acts as component state, should not be refactored to another file
  let newUser = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };
  let errors = {};
  let submissionError = "";
  let loading = false;
  const dispatch = createEventDispatcher();
  function clicked() {
    dispatch("clicked");
  }

  function handleSubmit() {
    setErrors();
    if (isEmpty(errors)) {
      loading = true;
      newUser.username = newUser.username.toLowerCase();
      signup(newUser)
        .then(() => {
          loading = false;
        })
        .catch(err => {
          loading = false;
          submissionError = err;
        });
    }
  }

  function setErrors() {
    handleFirstName(newUser.firstName, errors);
    handleLastName(newUser.lastName, errors);
    handleEmail(newUser.email, errors);
    handlePassword(newUser.password, errors);
    handleUserName(newUser.username, errors);
    errors = errors;
    submissionError = "";
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

  .flex {
    display: flex;
    justify-content: center;
  }
</style>

{#if loading}
  <div class="flex">
    <Spinner color="blue" />
  </div>
{:else}

  <form on:submit|preventDefault={handleSubmit}>
    <!-- TODO: Figure out how to place first name and last name fields next to each other -->
    <div class="form-group">
      <input
        class:error={errors.firstName}
        type="text"
        name="first-name"
        placeholder="First Name"
        bind:value={newUser.firstName}
        required />
      <ErrorMessage error={errors.firstName} />
    </div>

    <div class="form-group">
      <input
        class:error={errors.lastName}
        type="text"
        name="last-name"
        placeholder="Last Name"
        bind:value={newUser.lastName}
        required />
      <ErrorMessage error={errors.lastName} />
    </div>

    <div class="form-group">
      <input
        class:error={errors.username}
        type="text"
        name="username"
        placeholder="Username"
        bind:value={newUser.username}
        required />
      <ErrorMessage error={errors.username} />
    </div>

    <div class="form-group">
      <input
        class:error={errors.email}
        type="email"
        name="email"
        placeholder="Email"
        bind:value={newUser.email}
        required />
      <ErrorMessage error={errors.email} />
    </div>

    <div class="form-group">
      <input
        class:error={errors.password}
        type="password"
        name="password"
        placeholder="Password"
        bind:value={newUser.password}
        required />
      <ErrorMessage error={errors.password} />
    </div>

    <button type="submit" class="btn btn-primary">Sign Up</button>
    <ErrorMessage error={submissionError} />
  </form>
  Have an account?
  <p on:click={clicked}>Login</p>
{/if}
