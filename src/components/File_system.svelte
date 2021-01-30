<script>
  import { onMount } from "svelte";
  let dir;
  let finder;
  import { stores } from "@sapper/app";
  const { session } = stores();
  let token = $session.token;
  let Files = [];
  let getExistingFiles = async (e) => {
    let path = e === undefined ? "" : dir.value.trim();
    let response = await fetch("/api/getcontent", {
      method: "POST",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, path }),
    }).then((res) => res.json());
    console.debug("Content found", response.contents);
    Files = response.contents.filter((element) => {
      return (element.type =
        "file" && element.name.slice(element.name.length - 3) === ".md");
    });
  };
  onMount(getExistingFiles);

  let accessFile = async (file) => {
    let response = await fetch("/api/getfilecontent", {
      method: "POST",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, path: file.path }),
    }).then((res) => res.json());
    dir.value = file.path;
    updateContent(atob(response.content.content));
    console.debug("Content found", response.content);
  };
  import { md } from '../engine.js'

  let updateContent = (newtext) => {
    document.getElementById("editorContent").innerText = newtext;
    md.set(newtext);
  };
</script>

<ul>
  {#each Files as file}
    <li>
      <button on:click={() => accessFile(file)}>
        {file.name}
      </button>
    </li>
  {/each}
</ul>
<div class="finder" bind:this={finder}>
  <input bind:this={dir} type="text" name="" id="dir" />
  <br />
  <button on:click={getExistingFiles}>ls</button>
</div>

<style>
  ul {
    list-style: none;
    padding-left: 0;
  }
  .finder {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
