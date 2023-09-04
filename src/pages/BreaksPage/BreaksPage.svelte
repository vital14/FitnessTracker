<script lang="ts">
    import Header from "$components/Header/Header.svelte";
    import Progress from "$components/Chart/Progress.svelte";
    import Historic from "$components/Historic/Historic.svelte";
    import AddAndRemove from "$components/Button/AddAndRemove.svelte";
    import { breakObjective, breakProgress } from "$stores/store";
    let actualProgress: number;
	  let objective: number;

	breakObjective.subscribe((value) => (objective = value));
	breakProgress.subscribe((value) => (actualProgress = value));
  </script>
  <div class="page">
  <header>
    <Header text="Controle de Pausas"/>
  </header>
    <div class="chart">
      <Progress {actualProgress} {objective} color="F98617" />
    </div>
    <div class="today-progress">
      Pausas hoje: {actualProgress.toFixed(2)} pausas
    </div>
    <div class="objective">Objetivo: {objective.toFixed(2)} pausas </div>
    <div class="explanation"> Insira o valor a ser adicionado: </div>
    <div class="control-component">  <AddAndRemove {actualProgress} isWater={false}></AddAndRemove></div>
    <Historic isWaterHistoric={false}></Historic>
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
  