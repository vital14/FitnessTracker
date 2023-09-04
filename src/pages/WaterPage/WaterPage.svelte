<script lang="ts">
    import Header from "$components/Header/Header.svelte";
    import Progress from "$components/Chart/Progress.svelte";
    import Historic from "$components/Historic/Historic.svelte";
    import AddAndRemove from "$components/Button/AddAndRemove.svelte";
  </script>
  <div class="page">
  <header>
    <Header />
  </header>
  <main>
    <div class="chart"><Progress></Progress></div>
    <AddAndRemove></AddAndRemove>
    <Historic isWaterHistoric></Historic>
  </main>
</div>
  
  <style>
    .page{
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .chart{
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  </style>
  