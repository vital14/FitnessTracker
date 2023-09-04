<script>
  import ObjectiveCard from "$components/Objective/ObjectiveCard.svelte";
  import imageWater from "$assets/waterBottle.svg";
  import imageFitness from "$assets/fitness.svg"
</script>

<div class="title">
  Fitness Tracker
</div>
<div class = "page">
<div class="text-container">
  <h1>Seja Bem-vindo,</h1>
  <h2>Venha monitorar seu dia</h2>
  
</div>
<ObjectiveCard 
  pathImage={imageWater} 
  text="Gerencie a quantidade de água ingerida" 
  isWaterCard={true}
/>

<ObjectiveCard 
  pathImage={imageFitness} 
  text="Gerencie as pausas para alongamento" 
  isWaterCard={false}
/>
</div>

<style>
  .text-container{
    justify-content: center;
    margin-top: 10vh;
  }
  .page{
    height: 100%;
    width: 100%;
    overflow: hidden;
    justify-content: center;

  }
  h2{
    font-size: 15px;
  }
  .title{
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    font-family:'Courier New', Courier, monospace;
  }
</style>