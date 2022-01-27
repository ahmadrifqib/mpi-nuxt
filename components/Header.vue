<template>
	<div>
		<div class="flex items-center justify-between py-3 mx-auto bg-orange-50 lg:px-10 xl:px-20">
			<div class="ml-5 lg:ml-0">
				<img class="w-auto h-16" src="/static/MPI.png" />
			</div>
			<div class="hidden space-x-5 text-xl font-semibold lg:block">
				<NuxtLink
					to="/"
					class="hover:underline underline-offset-2 decoration-wavy decoration-orange-600 decoration-2"
					>Beranda</NuxtLink
				>
				<NuxtLink
					to="/project"
					class="hover:underline underline-offset-2 decoration-wavy decoration-orange-600 decoration-2"
					>Proyek</NuxtLink
				>
				<NuxtLink
					to="/product"
					class="hover:underline underline-offset-2 decoration-wavy decoration-orange-600 decoration-2"
					>Produk</NuxtLink
				>
				<NuxtLink
					to="/about"
					class="hover:underline underline-offset-2 decoration-wavy decoration-orange-600 decoration-2"
					>Tentang Kami</NuxtLink
				>
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
				'flex-col space-y-0 text-3xl text-center font-semibold absolute h-screen w-screen bg-orange-50 z-10',
			]"
		>
			<NuxtLink
				@click="isOpen = false"
				to="/"
				class="py-6 border-orange-200 border-y-2 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200"
				>Beranda</NuxtLink
			>
			<NuxtLink
				@click="isOpen = false"
				to="/project"
				class="py-6 border-b-2 border-orange-200 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200"
				>Proyek</NuxtLink
			>
			<NuxtLink
				@click="isOpen = false"
				to="/product"
				class="py-6 border-b-2 border-orange-200 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200"
				>Produk</NuxtLink
			>
			<NuxtLink
				@click="isOpen = false"
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
		// methods: {
		// 	navbar: function () {
		// 		!this.isOpen;
		// 	},
		// },
	};
</script>

<style></style>
