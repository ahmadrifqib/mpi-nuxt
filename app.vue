<template>
	<div class="p-0 antialiased bg-zinc-50 lg:mx-auto container-none">
		<Header class="sticky top-0 z-20 drop-shadow-lg" />
		<div class="z-0">
			<NuxtPage />
		</div>
		<Footer class="xl:px-20 lg:px-10" />
	</div>
</template>

<script>
	// definePageMeta({
	// 	layout: "default",
	// });
	import Header from "~/components/Header.vue";
	import Footer from "~/components/Footer.vue";
	export default {
		components: {
			Header,
			Footer,
		},
		// setup() {
		// 	useMeta({
		// 		title: "Mixa Perkasa Indonesia",
		// 		meta: [
		// 			{ charset: "utf-8" },
		// 			{ name: "viewport", content: "width=device-width, initial-scale=1" },
		// 			{
		// 				name: "PT Mixa Perkasa Indonesia",
		// 			},
		// 		],
		// 		link: [{ rel: "icon", type: "image/x-icon", href: "assets/favicon.ico" }],
		// 	});
		// },
	};
</script>
