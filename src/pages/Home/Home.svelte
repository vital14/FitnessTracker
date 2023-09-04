<script>
  import ObjectiveCard from "$components/Objective/ObjectiveCard.svelte";
  import imageWater from "$assets/waterBottle.svg";
  import imageFitness from "$assets/fitness.svg";
  import configIcon from '$assets/config.svg';
  import { navigate } from "svelte-routing";
  const routeConfig = () => {
    navigate("/config", {replace:true})
};
</script>

<div class="title">
  Fitness Tracker
</div>
<div class = "page">
<div class="text-container">
  <div class="wrapper">
    <h1>Seja Bem-vindo,</h1>
    <button class="config-button" on:click={routeConfig}><img src={configIcon} alt="Configuration" class="image-config"/></button>
  </div>
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
  .wrapper {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .config-button {
		background-color: transparent;
    background-repeat:no-repeat;
    border: none;
		height: 45px;
		width: 45px;
    margin-top: 5px;
		transition: box-shadow 0.15s, transform 0.15s;
	}
  .image-config{
    width: 25px;
    height: 25px;
  }
</style>