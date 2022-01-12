<template>
	<div class="">
		<Header />
		<div class="container mx-auto">
			<slot />
		</div>
		<Footer />
	</div>
</template>

<script>
	import Header from "~~/components/Header.vue";
	import Footer from "~~/components/Footer.vue";
	export default { components: { Header, Footer } };
</script>

<style></style>
