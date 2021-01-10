<svelte:head>
	<title>Sapper project template</title>
</svelte:head>
<script>
	// communicate with polka
	let authenticate = () => {}
	let loadClient = () => {}
	let execute = () => {}
</script>
<button on:click={()=>authenticate().then(loadClient)}>authorize and load</button>
<button on:click={execute}>execute</button>
