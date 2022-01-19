<template>
	<div>
		<div class="flex items-center content-center justify-center w-auto h-full">
			<swiper
				class="items-center content-center w-screen h-auto mx-10 text-center"
				:spaceBetween="30"
				:centeredSlides="true"
				:autoplay="{
					delay: 2500,
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
		<div class="flex items-center justify-center w-auto border-2 border-black h-96">About</div>
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
