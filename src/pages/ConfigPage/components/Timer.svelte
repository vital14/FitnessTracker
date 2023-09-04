<script lang="ts">
	import { startHour, finishHour } from '$stores/store';
	import { imask } from '@imask/svelte';

	const hourMask = {
		mask: '[#]0:&0',
		definitions: {
			'#': /[0-2]/,
			'&': /[0-5]/
		}
	};

	function updateHour(isStartHour: boolean) {
		const startHourInput = document.getElementById('start') as HTMLInputElement;
		const finishHourInput = document.getElementById('finish') as HTMLInputElement;

		const startContent = startHourInput?.value;
		const finishContent = finishHourInput?.value;

		const startSplitTime = startContent.split(':');
		const finishSplitTime = finishContent.split(':');

		const preStartHourValue = $startHour;
		const preFinishHourValue = $finishHour;

		if (startContent != undefined && finishContent != undefined) {
			const startHourInSeconds = parseInt(startSplitTime[0]) * 3600;
			const startMinutesInSeconds = parseInt(startSplitTime[1]) * 60;
			const startFinalTime = startHourInSeconds + startMinutesInSeconds;

			const finishHourInSeconds = parseInt(finishSplitTime[0]) * 3600;
			const finishMinutesInSeconds = parseInt(finishSplitTime[1]) * 60;
			const finishFinalTime = finishHourInSeconds + finishMinutesInSeconds;

			if (isStartHour) {
				if (startFinalTime > finishFinalTime) {
					startHourInput.value = preStartHourValue;
					return;
				}

				startHour.set(startContent);
			} else {
				if (finishFinalTime < startFinalTime) {
					finishHourInput.value = preFinishHourValue;
					return;
				}
				finishHour.set(finishContent);
			}
		}
	}
</script>

<div class = "wrapper">
	<input type="time" id="start" name="start" value={$startHour} on:blur={() => updateHour(true)} required class="start"/>
	<div class="text">ÀS</div>
	<input type="time" id="finish" name="finish" value={$finishHour}  on:blur={() => updateHour(true)} required class="start"/>
</div>

<style>
.wrapper {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
	text-align: center;
  }
.start{
	background-color: rgb(137, 207, 240) ;
	border: none;
	border-radius: 10px;
	text-align: center;
}

</style>