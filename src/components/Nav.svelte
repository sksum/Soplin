<script>
import { onMount } from "svelte";
	let text = ""
	export let segment;
	let setId = () => {
		const unsubscribe = md.subscribe(value => {
			text = value
		});

	}
	import { md } from '../engine.js'
	onMount(setId)

	async function getValPolka () {
		const res = await fetch(`login`)
		.then(res => res.json())
		.then(res => console.log(res))
	}
	let login = ()=>{
		getValPolka()
	}

	function download(e) {
		let filename = document.getElementById("filename").value.trim()
		console.log(filename)
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download',filename );

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);

	}

	import { stores } from '@sapper/app';
	const {session} = stores();
	let commit = async () => {
		let token = $session.token;
		let content = btoa(text)
		let path = document.getElementById("filename").value.trim()
		let response = await fetch('/api/commit', {
			method: 'POST',
			withCredentials:true,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({token, content, path})
		})
	}
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'edit' ? 'page' : undefined}" href="main_view">edit</a></li>

		<li><input type="text" name="" id="filename" ></li>
		<li><button id  = "download" on:click={download}>Download </button></li>
		<li><button on:click={commit}>Git commit</button></li>
		<li><button>3</button></li>
	</ul>
</nav>
