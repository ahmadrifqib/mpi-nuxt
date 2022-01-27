<template>
	<div>
		<div class="flex items-center content-center justify-center w-auto h-full">
			<swiper
				class="z-0 items-center content-center w-full mx-10 text-center shadow-2xl"
				style="height: 40rem"
				:spaceBetween="30"
				:centeredSlides="true"
				:autoplay="{
					delay: 5000,
					disableOnInteraction: false,
				}"
				:pagination="{
					clickable: true,
				}"
			>
				<swiper-slide
					><img
						class="object-cover object-center w-screen h-auto"
						src="https://picsum.photos/300"
						alt="random"
				/></swiper-slide>
				<swiper-slide
					><img
						class="object-cover object-center w-screen h-auto"
						src="https://picsum.photos/seed/picsum/300"
						alt="random"
				/></swiper-slide>
			</swiper>
		</div>
		<div
			class="flex flex-col-reverse items-stretch justify-center w-auto py-20 space-x-4 tracking-wide md:py-24 lg:py-36 bg-gray-100/50 lg:flex-row"
		>
			<div class="grid content-center gap-5 p-5 mx-6 bg-white rounded-lg shadow-lg lg:mx-0 lg:w-3/5">
				<div
					class="text-3xl font-bold underline uppercase decoration-orange-500 decoration-2 underline-offset-4"
				>
					PT Mixa Perkasa Indonesia
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis autem at commodi inventore
						corrupti quis perspiciatis repudiandae mollitia rem, suscipit aliquid tempore reiciendis harum
						placeat earum eaque ullam enim velit!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ea iusto dolorem voluptatum ipsa
						alias enim laudantium veniam cum, non totam sit sint velit repudiandae obcaecati quas magnam,
						corrupti excepturi.
					</p>
				</div>
			</div>
			<div class="hidden w-auto lg:block">
				<img src="https://picsum.photos/200" alt="random" class="rounded-lg shadow-lg h-96" />
			</div>
		</div>
		<div></div>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	// import Swiper core and required modules
	import SwiperCore, { Autoplay, Pagination } from "swiper";

	// install Swiper modules
	SwiperCore.use([Autoplay, Pagination]);

	import "swiper/css";
	// import "swiper/css/navigation";
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
