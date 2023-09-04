<script lang="ts">
  import Header from "$components/Header/Header.svelte";
  import Progress from "$components/Chart/Progress.svelte";
  import Historic from "$components/Historic/Historic.svelte";
</script>

<header>
  <Header />
</header>
<main>
  <div class="chart"><Progress></Progress></div>
  <Historic isWaterHistoric></Historic>
</main>

<style>
  .chart{
    display: flex;
  justify-content: center;
  margin-top: 20px;
  }
</style>
