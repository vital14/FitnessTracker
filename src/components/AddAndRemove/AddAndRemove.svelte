<script lang='ts'>
	import { waterProgress } from '$stores/store';
    import {breakProgress} from '$stores/store'
    import { LocalNotifications } from '@capacitor/local-notifications';
	export let actualProgress: number;
    export let isWater : boolean;
    function add() {
       const input = document.getElementById('valueAdition') as HTMLInputElement | null;
       const inputContent = input?.value;
       if (inputContent != undefined && inputContent != "") {
        if(isWater){
            let quantity = parseFloat(inputContent)/1000;
		    waterProgress.update((n) => n + quantity);
		    actualProgress.toFixed(2);
            sendWaterNotif();
        }
        else{
            let quantity = parseFloat(inputContent);
		    breakProgress.update((n) => n + quantity);
		    actualProgress.toFixed(2);
            sendRestNotif();
        }
       }
	}
    function remove() {
            const input = document.getElementById('valueAdition') as HTMLInputElement | null;
            const inputContent = input?.value;
            if (inputContent != undefined && inputContent != "") {
                if(isWater){
                    let quantity = parseFloat(inputContent)/1000;
		            waterProgress.update((n) => n - quantity);
		            actualProgress.toFixed(2);
                }
                else{
                    let quantity = parseFloat(inputContent);
		            breakProgress.update((n) => n - quantity);
		            actualProgress.toFixed(2);
                }
            }
    }
     
    function sendWaterNotif(){
        setInterval(function(){ 
	    LocalNotifications.schedule({
        notifications: [
            {
                title: "Tome Água",
                body: "Tome 0.8 ml de água",
                id: 1,
                extra: {
                    route: '/water',
                },
            }
        ]
    })},900000)
    }

    function sendRestNotif(){
        setInterval(function(){ 
	    LocalNotifications.schedule({
        notifications: [
            {
                title: "Pause para Alongar",
                body: "Alongue agora ",
                id: 2,
                extra: {
                    route: '/breaks',
                },
            }
        ]
    })},1800000)
    }
</script>
<button class="add-button" on:click={() => add()}>Adicionar</button>
<input type="number" id="valueAdition" class="value-addition" name="value" maxlength="4"/>
<button class="remove-button" on:click={() => remove()}>Remover</button>


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