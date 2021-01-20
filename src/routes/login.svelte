
<script context="module">
  let codeReceived = ""
  export async function preload(page, session) {
    codeReceived = page.query.code

	}
</script>
<script>
  import { onMount } from "svelte";

  import { stores, goto } from '@sapper/app';
  const { session } = stores();

onMount(async () => {
  try {

    let response = await fetch('/api/token', {
      method: 'POST',
      withCredentials:true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({codeReceived})
    }).then(res => res.json());

    if (response.token) {
			$session.token = response.token;
			goto('/');
		}
  } catch (e) {
    console.log(e)
  }
});
</script>
Hello