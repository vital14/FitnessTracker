<script lang="ts">
	import waterBottle from '$assets/waterBottle.svg';
	import breakImage from '$assets/fitness.svg';

	import { waterObjective, breakObjective } from '$stores/store';

	let _breakObjective: string;
	let _waterObjective: string;

	breakObjective.subscribe((value) => (_breakObjective = value.toString()));
	waterObjective.subscribe((value) => (_waterObjective = value.toString()));

	function updateBreaks() {
		const input = document.getElementById('breakObjective') as HTMLInputElement | null;
		const inputContet = input?.value;
		if (inputContet != undefined) {
			let newValue: number = parseInt(inputContet);
			breakObjective.set(newValue);
		}
	}

	function updateWaterObjective() {
		const input = document.getElementById('waterObjective') as HTMLInputElement | null;
		const inputContet = input?.value;
		if (inputContet != undefined) {
			let newValue: number = parseFloat(inputContet);
			waterObjective.set(newValue);
		}
	}
</script>


		<div class="wrapper-water">
			<img class="objective-water" src={waterBottle} alt="Water" />
			<div class="objective-data">
				<input
					type="number"
					class="custom"
					id="waterObjective"
					inputmode="decimal"
					value={_waterObjective}
					on:change={() => updateWaterObjective()}
				/>
			</div>
		</div>

        <div class="wrapper-break">
			<img class="objective-break" src={breakImage} alt="Water" />
			<div class="objective-data">
				<input
					type="number"
					class="custom-break"
					id="waterObjective"
					inputmode="decimal"
					value={_breakObjective}
					on:change={() => updateBreaks()}
				/>
			</div>
		</div>

<style>
.objective-water{
    width: 30px;
    height: 30px;
    margin-left: 3vw;
}
.objective-break{
    width: 30px;
    height: 30px;
    margin-left: 1vw;
}
.wrapper-water {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 15px 20px;
    display: flex;
    background-color: rgb(137, 207, 240) ;
    width: 55vw;
    align-items: center;
    justify-content: space-between;
    margin-left: 5vw;
    margin-top: 2vw;
  }
  .wrapper-break {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 15px 20px;
    display: flex;
    background-color: #F98617;
    width: 55vw;
    align-items: center;
    justify-content: space-between;
    margin-left: 5vw;
    margin-top: 2vw;
  }
  .custom{
	background-color: rgb(137, 207, 240) ;
	border: none;
	text-align: center;
    margin-left: 2vw;
}
.custom-break{
	background-color: #F98617;
	border: none;
	text-align: center;
    margin-left: 1vw;
}
</style>
