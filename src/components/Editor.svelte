
<style>
	code {
		width: 100%;
        height: 100%;
		float:right;
		border: 1px solid grey
	}
</style>


<script>
	import { onMount } from 'svelte';
	import { md } from '../engine.js'

	let setupEngine = () => {

	}
	onMount(setupEngine);
	let updateContent = (evt) => {
		let current = evt.srcElement.innerText 
		console.log(current)
		md.set(current)
	}

</script>

<code class ='shadow p-3 mb-5 bg-white rounded' contentEditable on:input={updateContent}>
</code>