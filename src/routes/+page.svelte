<script>
	import { appState } from '$lib/stores/appState';

	export let data;

	$appState.apodData = data.apodData;
	console.log(data);
</script>

<main class=" bg-white dark:bg-zinc-800 p-10  flex just-center items-center">
	<!-- <h1>{$appState.title}</h1> -->
	<!-- {JSON.stringify($appState.apodData)} -->

	
		<div class="">
			<img src={$appState?.apodData?.url} alt="" class="w-1/2" />
		</div>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

</main>

<style scoped>
</style>
