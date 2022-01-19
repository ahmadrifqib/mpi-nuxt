<template>
	<div class="p-0 lg:mx-auto xl:px-20 container-none lg:container">
		<Header />
		<div class="">
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
