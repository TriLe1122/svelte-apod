<script>
  import "../app.css"
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";


let randomProp = 'Prop'
</script>

<Navbar {randomProp}/>
<main class=" h-screen" >
	<slot />
</main>
<Footer/>

<style scoped>

 
</style>
