<script>
  import Preview from "../components/Preview.svelte";
  import Editor from "../components/Editor.svelte";
  import File_system from "../components/File_system.svelte";

</script>

<svelte:head>
  <title>Editor</title>
</svelte:head>
<div class="container h-100 col-12">
  <div class="row h-100 no-gutters">
    <div class="col-1 "><File_system /></div>
    <div class="col-6">
      <Editor />
    </div>
    <div class="col-5">
      <Preview />
    </div>
  </div>
</div>

<style>
  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }
</style>
