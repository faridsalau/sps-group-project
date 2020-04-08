<script>
  import { onMount } from "svelte";
  let title = "";
  $: titleLength = title.length;
  onMount(() => {
    var quill = new Quill("#editor", {
      theme: "snow",
      placeholder: "text(required)"
    });
  });
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
</style>

<svelte:head>

  <title>mélangity | create a post</title>
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
  <script src="https://cdn.quilljs.com/1.3.6/quill.js">

  </script>
</svelte:head>

<div class="container">

  <div class="post-form">

    <h4>Create a post</h4>

    <div class="form-container">

      <div class="title-flex">

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

      <button class="btn shadow-sm" type="button">create post</button>

    </div>

  </div>

</div>
