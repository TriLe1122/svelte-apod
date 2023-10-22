<script>
	import { appState } from '$lib/stores/appState';

	export let data;

	$appState.apodData = data.apodData;
	console.log(data);
</script>

<main class="hero p-10 flex just-center items-center bg-cover bg-center " style="background-image: url({$appState?.apodData?.url}" >
	<h1>{$appState.apodData.title}</h1>

</main>

<style scoped>

  .hero{
    height: 100vh;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
  }
  
</style>
