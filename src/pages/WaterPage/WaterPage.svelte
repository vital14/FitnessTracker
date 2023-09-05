<script lang="ts">
    import Header from "$components/Header/Header.svelte";
    import Progress from "$components/Chart/Progress.svelte";
    import Historic from "$components/Historic/Historic.svelte";
    import AddAndRemove from "$components/AddAndRemove/AddAndRemove.svelte";
    import { waterObjective, waterProgress } from "$stores/store";
    let actualProgress: number;
	  let objective: number;

	waterObjective.subscribe((value) => (objective = value));
	waterProgress.subscribe((value) => (actualProgress = value));
  </script>
  <div class="page">
  <header>
    <Header text="Nível de hidratação"/>
  </header>
    <div class="chart">
      <Progress {actualProgress} {objective} color="89CFF0" />
    </div>
    <div class="today-progress">
      Consumo hoje: {actualProgress.toFixed(2)} litros
    </div>
    <div class="objective">Objetivo: {objective.toFixed(2)} litros </div>
    <div class="explanation"> Insira o valor a ser adicionado em ML: </div>
    <div class="control-component">  <AddAndRemove {actualProgress} isWater></AddAndRemove></div>
    <Historic isWaterHistoric></Historic>
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
    .today-progress{
      display: flex;
      justify-content: center;
    }
    .control-component{
      display: flex;
      justify-content: center;
      margin-top: 2vh;
    }
    .explanation{
      display: flex;
      justify-content: center;
      margin-top: 2vh;
    }
    .objective{
      display: flex;
      justify-content: center;
    }
  </style>
  