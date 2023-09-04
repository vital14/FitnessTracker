<script lang="ts">
	import HistoricCard from './HistoricCard.svelte';
	import { historicList } from '$stores/historic';
	import waterBottle from '$assets/waterBottle.svg';
	import fitness from '$assets/fitness.svg'

	export let isWaterHistoric: boolean;
</script>
<div class="historic-container">
	<div class="scroll-container">
        <div class="historic">Histórico</div>
        <div class="swipe">Deslize para baixo para ver mais</div>
		{#if isWaterHistoric}
			{#each historicList as day}
				<HistoricCard data={day.date} dayProgress={day.water} dayObjective={day.waterObjective} pathImage={waterBottle} type="litros" isWaterCard/>
			{/each}
		{:else}
			{#each historicList as day}
				<HistoricCard data={day.date} dayProgress={day.breaks} dayObjective={day.breaksObjective} pathImage={fitness} type="pausas" isWaterCard={false} />
			{/each}
		{/if}
	</div>
</div>


<style>
	.scroll-container {
		height: 34vh;
		overflow: scroll;
		justify-content: center;
		text-align: center;
		justify-items: center;
	}

	.historic-container {
		width: 96.5vw;
		height: 33.2vh;
		margin-top: 12.5vh;
		text-align: center;
	}
    .historic{
        font-weight: 700;
    }
    .swipe{
        font-weight: 300;
        font-size: 5px;
    }
</style>
