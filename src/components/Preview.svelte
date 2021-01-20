<script>
	import { onMount } from 'svelte';
	let area
	let setId = () => {
		area = document.getElementById('prevArea')
		const unsubscribe = prev.subscribe(value => {
		area.innerHTML = value
	});
	}
	import { prev } from '../engine.js'
	onMount(setId)

</script>

<style>
	#prevArea {
		width: 100%;
		height: 100%;
		border: 1px solid grey

	}
</style>

<div class ='shadow p-3 mb-5 bg-white rounded'  id= "prevArea">
</div>