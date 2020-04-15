<script>
  import { onMount } from "svelte";
  import { handleBody, handleTitle } from "../../util/createPost.js";
  import { isEmpty } from "../../util/utilFunctions.js";
  import { createPost } from "../../actions/postActions.js";
  import ErrorMessage from "../../components/ErrorMessage.svelte";
  import { user } from "../../stores.js";
  import Spinner from "../../components/Spinner.svelte";
  import { goto } from "@sapper/app";
  import { iFeelYous } from "../../stores.js";

  let title = "";
  let quill;
  let errors = {};
  let loading = false;
  $: titleLength = title.length;
  onMount(() => {
    //   TODO: Figure out why Quill is undefined on intial load
    quill = new Quill("#editor", {
      theme: "snow",
      placeholder: "text(required)"
    });
  });
  function handleSubmit() {
    //   TODO: Add formatted text to post
    let bodySummary = quill.getText();
    setErrors(bodySummary);
    if (isEmpty(errors)) {
      loading = true;
      document.querySelector("body").style.pointerEvents = "none";
      bodySummary =
        bodySummary.length > 350
          ? bodySummary.substring(0, 350) + "..."
          : bodySummary;
      const formattedBody = quill.container.firstChild.innerHTML;
      createPost(title, bodySummary, formattedBody)
        .then(async () => {
          loading = false;
          document.querySelector("body").style.pointerEvents = "auto";
          await goto("/home");
        })
        .catch(err => {
          loading = false;
          console.log(err);
          alert("Something went wrong, please try again");
        });
    } else {
      console.error(errors);
    }
  }
  function setErrors(bodySummary) {
    handleBody(bodySummary, errors);
    handleTitle(title, errors);
    errors = errors;
  }
</script>

<style>
  .container {
    margin-top: 5rem;
  }
  .title-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form-container {
    min-height: 70vh;
    background-color: #63c2fd;
    padding-top: 5px;
  }
  .title-input {
    border: none;
    margin: 1rem 0;
    padding: 0.5rem;
    border-radius: 7px;
    min-width: 80%;
  }
  .title-length {
    white-space: nowrap;
    margin: 0 0 0 0.5rem;
    padding: 0.5rem;
    border-radius: 7px;
    background-color: #ffffff;
    max-width: 20%;
    width: 20%;
    text-align: center;
  }
  .title-container {
    width: 80%;
    display: flex;
    align-items: center;
  }
  input::placeholder,
  h4,
  .title-length,
  .title-input {
    color: #546975;
  }

  #editor-container {
    width: 80%;
    margin: 0 auto;
  }
  #editor {
    height: 10rem;
  }

  .btn {
    margin: 1rem 10% 1rem 0;
    background-color: #ffffff;
    color: #546975;
    float: right;
  }
  .body-error {
    margin-left: 10%;
  }
  .centered-spinner {
    margin: auto;
  }
  .spinner-container {
    display: flex;
    justify-content: center;
    min-height: 80vh;
  }
</style>

<svelte:head>

  <title>mélangity | create a post</title>
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
  <script src="https://cdn.quilljs.com/1.3.6/quill.js">

  </script>
</svelte:head>

{#if loading}
  <div class="spinner-container">
    <div class="centered-spinner">
      <Spinner color="blue" size="10" />
    </div>
  </div>
{:else}
  <div class="container">

    <div class="post-form">

      <h4>Create a post</h4>

      <div class="form-container">

        <form on:submit|preventDefault={handleSubmit}>

          <div class="title-flex">
            <ErrorMessage error={errors.title} color="white" />
            <div class="title-container">
              <input
                class="shadow-sm title-input"
                type="text"
                placeholder="title(required)"
                maxlength="100"
                bind:value={title} />
              <span class="title-length shadow-sm">{titleLength} / 100</span>
            </div>
          </div>

          <!-- TODO: Style editor to fit the page styles -->

          <div id="editor-container">
            <div id="editor" />
          </div>

          <div class="body-error">
            <ErrorMessage error={errors.body} color="white" />
          </div>

          <button class="btn shadow-sm" type="submit">create post</button>

        </form>

      </div>

    </div>

  </div>
{/if}
