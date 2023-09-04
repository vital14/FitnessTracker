<!-- App.svelte -->
<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "$pages/Home/Home.svelte";
  import WaterPage from "$pages/WaterPage/WaterPage.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/water" component={WaterPage} />
  </div>
</Router>

<style></style>