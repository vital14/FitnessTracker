<script lang="ts">
	export let data: string = '-';
	export let dayProgress: number = 0;
    import waterGlass from "$assets/waterGlass.svg"
</script>


<div class="wrapper">
  <h1>{data}</h1>
  <div>{dayProgress} litros</div>
  <div class="image" 
  ><img src={waterGlass} alt="water-lass" class="water-glass"/></div>
</div>

<style>
 h1 {
    font-weight: 700;
    font-size: 15px;
    line-height: 1;
    display: inline-block;
    vertical-align: top;
  }
    .wrapper {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .image {
		background-color: transparent;
    background-repeat:no-repeat;
    border: none;
		height: 45px;
		width: 45px;
		transition: box-shadow 0.15s, transform 0.15s;
    justify-content: center;
    align-items: center;
	}

  .water-glass{
    width: 25px;
    height: 25px;
    margin-top: 10px;
  }
</style>
