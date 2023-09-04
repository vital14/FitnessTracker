<!-- App.svelte -->
<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "$pages/Home/Home.svelte";
  import WaterPage from "$pages/WaterPage/WaterPage.svelte";
  import BreaksPage from "$pages/BreaksPage/BreaksPage.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/water" component={WaterPage} />
    <Route path="/breaks" component={BreaksPage} />
  </div>
</Router>

<style></style>