<script lang="ts">
	export let data: string = '-';
	export let dayProgress: number = 0;
  export let dayObjective: number = 0;
  export let type: string = '-';
  export let pathImage: string = '-';
  export let isWaterCard: boolean = true;
</script>


<div class={isWaterCard ? 'fill-color-water' : 'fill-color-break'}>
  <div class="image-card">
    <img src={pathImage} alt="custom-identify" class="custom-identify"/>
  </div>
  <div class="type">{dayProgress}/{dayObjective} {type}</div>
  <div class="data">{data}</div>
</div>

<style>
 .data {
    font-weight: 700;
    font-size: 15px;
    line-height: 1;
    display: inline-block;
    vertical-align: top;
    height: auto;
    color: white;
  }

  .type{
    color: white;
  }
  .fill-color-water {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: rgb(137, 207, 240) ;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1vh;
    border-radius: 10px;
  }
  .fill-color-break {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: rgb(137, 207, 240) ;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1vh;
    border-radius: 10px;
  }

  .image-card {
    background-repeat:no-repeat;
    border: none;
		height: 6vh;
		width: 6vh;
		transition: box-shadow 0.15s, transform 0.15s;
    justify-content: center;
    align-items: center;
	}

  .custom-identify{
    width: 30px;
    height: 50px;
  }
</style>
