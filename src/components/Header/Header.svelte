<script>
import configIcon from '$assets/config.svg';
import returnIcon from '$assets/arrowBack.svg';
</script>

<header>
   <div class="wrapper">
    <button class="return-button" 
    ><img src={returnIcon} alt="Return" class="image-return"/></button>
  <h1>Nível de Hidratação</h1>
  <button class="config-button" 
  ><img src={configIcon} alt="Configuration" class="image-config"/></button>
</div>
</header>

<style>
   h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    display: inline-block;
    vertical-align: top;
  }
  .return-button {
		background-color: transparent;
    background-repeat:no-repeat;
    background-size:auto;
    border: none;
		height: 45px;
		width: 45px;
		transition: box-shadow 0.15s, transform 0.15s;
    margin-top: 3px;
  }
    .wrapper {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .config-button {
		background-color: transparent;
    background-repeat:no-repeat;
    border: none;
		height: 45px;
		width: 45px;
    margin-top: 5px;
		transition: box-shadow 0.15s, transform 0.15s;
	}
  .image-return{
    width: 20px;
    height: 20px;
  }

  .image-config{
    width: 25px;
    height: 25px;
  }
</style>
