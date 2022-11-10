<script lange="ts">
  import { Router, Route, navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import { isSetupStore, siteStore } from "./stores";
  import { Loading } from "./structure";

  // routes
  import {
    Home,
    Login,
    Setup
  } from "./routes/index";
  
  // check the site status
  let loading = true;
  let isSetup = false;
  isSetupStore.subscribe(is => {
    isSetup = is;
  });

  let site = null;
  siteStore.subscribe(s => {
    site = s;
  })

  onMount(() => {
    loading = false;
    navigate("/setup", { replace: true });
  })

</script>
<div class="app">
  <SvelteToast />

  <Router>
    {#if loading}
      <div style="text-align: center; height: 100%; margin-top: 10%">
        <Loading />
      </div>
    {:else}
      <Route path="/" component={Home} />
      <Route path="/setup" component={Setup} />
      <Route path="/login" component={Login} />
    {/if}
    
  </Router>
</div>