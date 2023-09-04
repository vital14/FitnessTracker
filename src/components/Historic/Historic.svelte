<script lang="ts">
	import WaterHistoric from './WaterHistoric.svelte';
	import { historicList } from '$stores/historic';
	import BreakHistoric from './BreakHistoric.svelte';

	export let isWaterHistoric: boolean;
</script>
<div class="historic-container">
	<div class="scroll-container">
        <div class="historic">Histórico</div>
        <div class="swipe">Deslize para baixo para ver mais</div>
		{#if isWaterHistoric}
			{#each historicList as day}
				<WaterHistoric data={day.date} dayProgress={day.water} />
			{/each}
		{:else}
			{#each historicList as day}
				<BreakHistoric
					data={day.date}
					dayProgress={day.breaks}
				/>
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
		margin-top: 18vh;
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
