<script lang='ts'>
	import { waterProgress } from '$stores/store';
	export let actualProgress: number;
    function addWater() {
       const input = document.getElementById('valueAdition') as HTMLInputElement | null;
       const inputContent = input?.value;
       if (inputContent != undefined) {
        let quantity = parseFloat(inputContent)/1000;
		waterProgress.update((n) => n + quantity);
		actualProgress.toFixed(2);
       }
	}
    function removeWater(quantity: number) {
        if(actualProgress !=0){
            const input = document.getElementById('valueAdition') as HTMLInputElement | null;
            const inputContent = input?.value;
            if (inputContent != undefined) {
                let quantity = parseFloat(inputContent)/1000;
		        waterProgress.update((n) => n - quantity);
		        actualProgress.toFixed(2);
            }
        }
    }
</script>
<button class="add-button" on:click={() => addWater()}>Adicionar</button>
<input type="number" id="valueAdition" class="value-addition" name="value" maxlength="4"/>
<button class="remove-button" on:click={() => removeWater(1)}>Remover</button>


<style>
    .add-button{
        border:none;
        background-color: #2DC574;
        width: 18vw;
    }
    .value-addition{
        width: 10vw;
        text-align: center;
        
    }
    .remove-button{
        border:none;
        background-color: red;
        width: 18vw;
    }
</style>