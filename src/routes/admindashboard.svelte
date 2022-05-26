<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import supabase from "$lib/external/supa";

  onMount(() => {
    const user = supabase.auth.user();

    console.log(user.user_metadata.role);

    if (user.user_metadata.role != "Admin") {
      goto("/dashboard");
    }
  });
</script>

<h1>Admin Dash!</h1>

<style>
  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 3em;
    margin: 0;
    color: white;
  }
</style>
