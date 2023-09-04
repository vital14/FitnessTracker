<script lang="ts">
	export let data: string = '-';
	export let dayProgress: number = 0;
    import waterGlass from "$assets/waterBottle.svg"
</script>


<div class="wrapper">
  <div class="image" 
  ><img src={waterGlass} alt="water-glass" class="water-glass"/></div>
  <div class="litros">{dayProgress} litros</div>
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

  .litros{
    color: white;
  }
  .wrapper {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: rgb(137, 207, 240) ;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1vh;
    border-radius: 10px;
  }

  .image {
    background-repeat:no-repeat;
    border: none;
		height: 6vh;
		width: 6vh;
		transition: box-shadow 0.15s, transform 0.15s;
    justify-content: center;
    align-items: center;
	}

  .water-glass{
    width: 30px;
    height: 50px;
  }
</style>
