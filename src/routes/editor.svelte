<svelte:head>
	<title>Editor</title>
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import { md } from '../engine.js'
	import Preview from '../components/Preview.svelte'

	let setupEngine = () => {

	}
	onMount(setupEngine);
	let updateContent = (evt) => {
		let current = evt.srcElement.innerText 
		console.log(current)
		md.set(current)
	}

</script>

<style>
	code {
		position: absolute;
		width: '40%';
		height: 100%;
		float: right;

	}
</style>



<code contentEditable on:input={updateContent}>
	relative
</code>

<Preview />