<script>
	export let Files;
</script>

<style>
    ul {
        list-style: none;
        padding-left: 0;}
</style>


<ul >
	{#each Files as file}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={file.id}">
			{file.name}
		</a></li>
	{/each}
</ul>
