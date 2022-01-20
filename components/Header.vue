<template>
	<div class="flex items-center justify-between py-3 mx-auto bg-orange-50">
		<div class="ml-5 lg:ml-0">
			<img class="w-auto h-16" src="/static/MPI.png" alt="Mixa Perkasa Indonesia logo" />
		</div>
		<div class="hidden space-x-5 text-xl font-semibold lg:block">
			<NuxtLink to="/" class="hover:underline underline-offset-2">Beranda</NuxtLink>
			<NuxtLink to="/project" class="hover:underline underline-offset-2">Proyek</NuxtLink>
			<NuxtLink to="/product" class="hover:underline underline-offset-2">Produk</NuxtLink>
			<NuxtLink to="/about" class="hover:underline underline-offset-2">Tentang Kami</NuxtLink>
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
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
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
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
	</div>
	<div :class="[isOpen ? 'flex mb-5' : 'hidden', 'flex-col space-y-0 text-xl font-semibold']">
		<NuxtLink
			to="/"
			class="px-5 py-3 border-t border-b border-orange-200 hover:border hover:border-b-4 hover:border-orange-400 hover:rounded-lg hover:bg-orange-200"
			>Beranda</NuxtLink
		>
		<NuxtLink
			to="/project"
			class="px-5 py-3 border-b border-orange-200 hover:border hover:border-b-4 hover:border-orange-400 hover:rounded-lg hover:bg-orange-200"
			>Proyek</NuxtLink
		>
		<NuxtLink
			to="/product"
			class="px-5 py-3 border-b border-orange-200 hover:border hover:border-b-4 hover:border-orange-400 hover:rounded-lg hover:bg-orange-200"
			>Produk</NuxtLink
		>
		<NuxtLink
			to="/about"
			class="px-5 py-3 border-b border-orange-200 hover:border hover:border-b-4 hover:border-orange-400 hover:rounded-lg hover:bg-orange-200"
			>Tentang Kami</NuxtLink
		>
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
