<script>
  import { createEventDispatcher } from "svelte";
  import { handleEmail, handlePassword } from "../util/accountEntry.js";
  import ErrorMessage from "./ErrorMessage.svelte";
  import { isEmpty } from "../util/utilFunctions.js";
  import { login } from "../actions/accountEntryActions.js";
  import Spinner from "./Spinner.svelte";
  // 'user' variable acts as component state, should not be refactored to another file
  let user = {
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

  function setErrors() {
    handleEmail(user.email, errors);
    handlePassword(user.password, errors);
    errors = errors;
    submissionError = "";
  }

  function handleSubmit() {
    setErrors();
    if (isEmpty(errors)) {
      loading = true;
      login(user)
        .then(() => {
          loading = false;
        })
        .catch(err => {
          loading = false;
          submissionError = err;
        });
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

  .error {
    cursor: context-menu;
  }

  input.error {
    border: rgb(255, 0, 0) 1px solid;
  }

  .flex {
    display: flex;
    justify-content: center;
  }

  .sign-up {
    display: flex;
    flex-direction: column;
  }
</style>

{#if loading}
  <div class="flex">
    <Spinner color="blue" />
  </div>
{:else}
  <form on:submit|preventDefault={handleSubmit}>
    <div class="form-group">
      <input
        class:error={errors.email}
        type="email"
        placeholder="Email"
        bind:value={user.email}
        required />
      <ErrorMessage error={errors.email} />
    </div>

    <div class="form-group">
      <input
        class:error={errors.password}
        type="password"
        placeholder="Password"
        bind:value={user.password}
        required />
      <ErrorMessage error={errors.password} />
    </div>

    <button type="submit" class="btn btn-primary">Login</button>
    <ErrorMessage error={submissionError} />
  </form>
  <div class="sign-up">
    <div>
      New here?
      <p on:click={clicked}>Sign Up</p>
    </div>
    <div>
      <p>Forgot password</p>
    </div>
  </div>
{/if}
