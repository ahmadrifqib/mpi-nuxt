<template>
	<div>
		<div class="flex items-center justify-between py-1 mx-auto bg-orange-50/90 lg:px-10 xl:px-20">
			<div class="ml-5 lg:ml-0">
				<img class="w-auto h-16" src="~/assets/mpi100px.png" />
			</div>
			<div class="hidden space-x-5 text-2xl font-semibold text-stone-500 lg:block">
				<NuxtLink @click="scrollToTop()" to="/" class="hover:text-stone-800">Beranda</NuxtLink>
				<NuxtLink @click="scrollToTop()" to="/project" class="hover:text-stone-800">Proyek</NuxtLink>
				<NuxtLink @click="scrollToTop()" to="/product" class="hover:text-stone-800">Produk</NuxtLink>
				<NuxtLink @click="scrollToTop()" to="/about" class="hover:text-stone-800">Tentang Kami</NuxtLink>
			</div>
			<div class="block mr-5 lg:hidden">
				<button @click="isOpen = true" :class="[isOpen ? 'hidden' : 'block']">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-10 h-10"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<button @click="isOpen = false" :class="[isOpen ? 'block' : 'hidden']">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-10 h-10"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div
			:class="[
				isOpen ? 'flex mb-5' : 'hidden',
				'flex-col space-y-0 text-3xl text-center font-semibold absolute h-screen w-screen bg-orange-50 z-10 lg:hidden',
			]"
		>
			<NuxtLink
				@click="(isOpen = false), scrollToTop()"
				to="/"
				class="py-6 border-orange-200 border-y-2 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200"
				>Beranda</NuxtLink
			>
			<NuxtLink
				@click="(isOpen = false), scrollToTop()"
				to="/project"
				class="py-6 border-b-2 border-orange-200 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200"
				>Proyek</NuxtLink
			>
			<NuxtLink
				@click="(isOpen = false), scrollToTop()"
				to="/product"
				class="py-6 border-b-2 border-orange-200 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200"
				>Produk</NuxtLink
			>
			<NuxtLink
				@click="(isOpen = false), scrollToTop()"
				to="/about"
				class="py-6 border-b-2 border-orange-200 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200"
				>Tentang Kami</NuxtLink
			>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isOpen: false,
			};
		},
		methods: {
			scrollToTop() {
				window.scrollTo(0, 0);
			},
			// 	navbar: function () {
			// 		!this.isOpen;
			// 	},
		},
	};
</script>

<style></style>
