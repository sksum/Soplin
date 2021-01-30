<script context="module">
  export async function preload(page, session) {
    let { token } = session;

    let client_id = process.env.CLIENT_ID_GIT;
    if (!token)
      return this.redirect(
        302,
        `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user%20repo`
      );
    return { token };
  }
</script>

<script>
  export let token;
  import { stores } from "@sapper/app";
  const { session } = stores();

  import { onMount } from "svelte";
  onMount(async () => {
    if ($session.userLogin !== undefined) {
      user = $session.userLogin;
    }
    let response = await fetch("/api/sync", {
      method: "POST",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    }).then((res) => res.json());
    user = response.user.login;
    $session.userLogin = user;
  });

  let createRep = async () => {
    let response = await fetch("/api/repo", {
      method: "POST",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    }).then((res) => res.json());
  };

  let user;
</script>

<svelte:head>
  <title>Homepage</title>
</svelte:head>Hello ${user}
<!-- currently disabled -->
<button on:click={createRep}>Create Repository</button>
