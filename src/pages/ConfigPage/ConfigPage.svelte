<script>
    import HeaderConfig from "./components/HeaderConfig.svelte";
    import Timer from "./components/Timer.svelte";
</script>

<HeaderConfig></HeaderConfig>
<div class="label">Horário de atividade:</div>
<Timer></Timer>


<style>
    .label{
        margin-left: 5vw;
        height: 5vh;
        width: 40vw;
        background-color: transparent;
        text-align: center;
        justify-content: center;
    }
</style>