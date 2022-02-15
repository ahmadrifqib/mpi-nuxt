<template>
	<div>
		<div class="relative flex items-center content-center justify-center w-auto h-full">
			<swiper
				:style="{
					'--swiper-navigation-color': '#DFE0DF',
					'--swiper-pagination-color': '#DFE0DF',
					'--swiper-navigation-size': '50px',
				}"
				class="z-0 items-center content-center w-full mx-10 text-center shadow-2xl mySwiper"
				style="height: 40rem"
				:spaceBetween="30"
				:centeredSlides="true"
				:autoplay="{
					delay: 5000,
					disableOnInteraction: false,
				}"
				:effect="'fade'"
				:navigation="true"
				:loop="true"
				:modules="modules"
			>
				<swiper-slide
					><img class="object-cover object-center w-screen h-screen" src="~~/assets/mixa01.jpeg"
				/></swiper-slide>
				<swiper-slide
					><img class="object-cover object-center w-screen h-screen" src="~~/assets/mixa02.jpeg"
				/></swiper-slide>
			</swiper>
			<!-- <div class="bottom-0 left-0 z-10 hidden w-16 h-16 bg-white">asd</div> -->
		</div>
		<div
			class="flex flex-col-reverse items-stretch justify-center w-auto py-20 space-x-4 tracking-wide md:py-24 lg:py-36 lg:flex-row"
		>
			<div class="grid content-center gap-5 p-5 mx-6 lg:mx-0 lg:w-3/5">
				<div class="text-6xl font-semibold tracking-widest capitalize text-stone-800">tentang MIXA</div>
				<hr class="h-1 text-orange-500 bg-orange-500 rounded-full w-96" />
				<div class="text-5xl leading-tight text-stone-700/90">
					PT MIXA Perkasa Indonesia adalah perusahaan yang bergerak di bidang stuktur dan beton.
				</div>
				<div class="mt-10">
					<NuxtLink
						@click="scrollToTop()"
						to="/about"
						class="p-5 text-xl font-medium leading-tight tracking-widest transition rounded-lg bg-stone-300/90 text-stone-800/90 hover:bg-stone-400/80 duration-0 hover:duration-300"
						>Selengkapnya</NuxtLink
					>
				</div>
			</div>
			<div class="hidden w-auto lg:block">
				<img src="https://picsum.photos/200" alt="random" class="rounded-lg shadow-lg h-96" />
			</div>
		</div>
		<div class="pt-10">
			<div class="flex flex-col items-center justify-center text-center">
				<div class="text-4xl font-light tracking-wider uppercase text-stone-800">Lokasi</div>
				<div class="py-2 pb-10">
					<hr class="w-48 h-1 text-orange-500 bg-orange-500 rounded-full" />
				</div>
			</div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d505.1341227572045!2d106.70406578313826!3d-6.274443064078472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x776d5184b4a01d34!2sPT%20Mixa%20Perkasa%20Indonesia!5e0!3m2!1sid!2sid!4v1643777627807!5m2!1sid!2sid"
				class="w-full border-none"
				style="height: 32rem"
				allowfullscreen=""
				loading="lazy"
			></iframe>
		</div>
	</div>
</template>

<script lang="js">
	import { Swiper, SwiperSlide } from "swiper/vue";
	// import Swiper core and required modules SwiperCore,
	import { EffectFade, Autoplay, Navigation } from "swiper";

	// install Swiper modules
	// SwiperCore.use([Autoplay]);

	import "swiper/css";
	import "swiper/css/effect-fade";
	import "swiper/css/navigation";
	// import "swiper/css/pagination";

	export default {
		components: {
			Swiper,
			SwiperSlide,
		},
		setup() {
			return {
				modules: [Autoplay, EffectFade, Navigation],
			};
		},
		data() {
			return {};
		},
		methods: {
			scrollToTop() {
				window.scrollTo(0, 0);
			},
		},
	};
</script>
