<script lang="ts">
	import WaterHistoric from './WaterHistoric.svelte';
	import { historicList } from '$stores/historic';
	import BreakHistoric from './BreakHistoric.svelte';

	export let isWaterHistoric: boolean;
</script>

<div class="historic-container">
	<div class="scroll-container">
        <div class="historic">Historico</div>
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
		height: 30vh;
		overflow: scroll;
	}

	.historic-container {
		width: 100vw;
		height: 33.4vh;
		border-top-right-radius: 40px;
		border-top-left-radius: 40px;
		margin-top: 20vh;
		box-shadow: 0px -4px 4px #ffffff25;
		text-align: center;
		padding-top: 3vh;
	}
    .historic{
        font-weight: 700;
    }
    .swipe{
        font-weight: 300;
        font-size: 5px;
    }
</style>
