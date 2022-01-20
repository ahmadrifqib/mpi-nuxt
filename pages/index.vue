<template>
	<div>
		<div class="flex items-center content-center justify-center w-auto h-full">
			<swiper
				class="items-center content-center w-screen h-auto mx-10 text-center rounded-lg shadow-2xl"
				:spaceBetween="30"
				:centeredSlides="true"
				:autoplay="{
					delay: 5000,
					disableOnInteraction: false,
				}"
				:pagination="{
					clickable: true,
				}"
				:navigation="true"
			>
				<swiper-slide
					><img class="object-cover object-center w-full h-96" src="https://picsum.photos/300" alt="random"
				/></swiper-slide>
				<swiper-slide
					><img
						class="object-cover object-center w-full h-96"
						src="https://picsum.photos/seed/picsum/300"
						alt="random"
				/></swiper-slide>
			</swiper>
		</div>
		<div
			class="flex items-center justify-center w-auto font-mono text-2xl font-bold tracking-wide underline h-96 decoration-wavy decoration-orange-500 decoration-4 underline-offset-4"
		>
			Ini About
		</div>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	// import Swiper core and required modules
	import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

	// install Swiper modules
	SwiperCore.use([Autoplay, Pagination, Navigation]);

	import "swiper/css";
	import "swiper/css/navigation";
	import "swiper/css/pagination";

	export default {
		components: {
			Swiper,
			SwiperSlide,
		},
		data() {
			return {};
		},
		methods: {},
	};
</script>
