<script lang="ts">
import { navigate } from "svelte-routing";
export let pathImage: string;
export let text: string;
let fillCard: Element;
export let isWaterCard: boolean
const routeWater = () => {
    navigate("/water", {replace:true})
};

const routeBreaks = () => {
    navigate("/breaks", {replace:true})
};
</script>

<button class={isWaterCard ? 'fill-card fill-color-water' : 'fill-card fill-color-break'}
bind:this={fillCard} on:click={isWaterCard? routeWater : routeBreaks}>
    <div class="wrapper">
        <img src={pathImage} alt="water-bottle" class="image-water"/>
        <div>{text}</div>
    </div>
</button>



<style>


	.fill-color-water {
		background-color: rgb(137, 207, 240);
		width: 150px;
        width: 95vw;
        height: 15vh;
        margin-top: 10vh;
        border: none;
        border-radius: 10px;
	}

	.fill-color-break {
		background-color: #F98617;
		width: 90px;
        width: 95vw;
        height: 15vh;
        margin-top: 10vh;
        border: none;
        border-radius: 10px;
	}
    .wrapper {
        color: white;
        font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .image-water{
        width: 10vw;
        height: 10vh;
    }
</style>