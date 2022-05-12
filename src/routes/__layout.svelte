<main>
  <slot />
</main>

<style>
  :global(body, html) {
    height: 100vh;
    overflow: hidden;
    background-image: linear-gradient(
      60deg,
      hsl(0deg 0% 0%) 0%,
      hsl(344deg 0% 11%) 39%,
      hsl(344deg 0% 19%) 61%,
      hsl(0deg 0% 28%) 100%
    );
    font-family: "Open Sans", sans-serif;
  }
</style>
