<script>
    import HeaderConfig from "./components/HeaderConfig.svelte";
    import Timer from "./components/Timer.svelte";
    import NewObjective from "./components/NewObjective.svelte";
</script>

<HeaderConfig></HeaderConfig>
<div class="time">Horário de atividade:</div>
<Timer></Timer>
<div class="objectives">Objetivos:</div>
<NewObjective></NewObjective>


<style>
    .time{
        margin-left: 5vw;
        margin-top: 2vh;
        height: 5vh;
        width: 40vw;
        background-color: transparent;
        text-align: center;
        justify-content: center;
    }
    .objectives{
        margin-left: 5vw;
        margin-top: 2vh;
        height: 5vh;
        width: 40vw;
        background-color: transparent;
    }
</style>