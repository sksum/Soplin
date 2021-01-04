<script>
	import { onMount } from 'svelte';
	let area
	let setId = () => {
		area = document.getElementById('prevArea')
		const unsubscribe = prev.subscribe(value => {
		console.log(value)
		area.innerHTML = value
	});
	}
	import { prev } from '../engine.js'
	onMount(setId)

</script>

<style>
	div {
		position: relative;
		width: 40%;
		height: 100%;
		float: right;
	}
</style>

<div id= "prevArea">
</div>