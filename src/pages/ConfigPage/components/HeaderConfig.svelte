<script lang="ts">
    import returnIcon from '$assets/arrowBack.svg';
    import { navigate } from "svelte-routing";
    const routePage = () => {
            navigate("/", {replace:true})
    };
    </script>
    
    <header>
       <div class="wrapper">
        <button class="return-button" on:click={routePage}>
          <img src={returnIcon} alt="Return" class="image-return"/>
        </button>
      <h1>Configurações</h1>
    </div>
    </header>
    
    <style>
       h1 {
        font-weight: 700;
        font-size: 40px;
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
      .image-return{
        width: 25px;
        height: 25px;
      }
    </style>
    