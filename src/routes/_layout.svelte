<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
</style>

<Nav {segment}/>

<main class='vh-100 mh-100'>
	<slot></slot>
</main>