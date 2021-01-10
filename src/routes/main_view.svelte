<script>
	import Preview from "../components/Preview.svelte";
	import Editor from "../components/Editor.svelte";
	import File_system from "../components/File_system.svelte";
</script>

<style>
</style>

<svelte:head>
	<title>Editor</title>
</svelte:head>
<div class="container h-100">
	<div class="row h-100">
		<div class="col-sm-1 h-100 d-inline-block"><File_system /></div>
		<div class="col-md-6">
			<Editor />
		</div>
		<div class="col-md-5">
			<Preview />
		</div>
	</div>
</div>
