<script>
  import supabase from "$lib/external/supa";

  async function giveAdmin() {
    const { user, error } = await supabase.auth.update({
      data: {
        role: "Admin",
      },
    });
  }
  async function removeAdmin() {
    const { user, error } = await supabase.auth.update({
      data: {
        role: "user",
      },
    });
  }
</script>

<h1>You're In!</h1>

<a href="/admindashboard">Admin Dashboard</a>

<br />

<button on:click|preventDefault={giveAdmin}>Give Admin</button>
<button on:click|preventDefault={removeAdmin}>Remove Admin</button>

<style>
  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 3em;
    margin: 0;
    color: white;
  }
</style>
