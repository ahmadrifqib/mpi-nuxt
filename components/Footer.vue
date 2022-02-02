<template>
	<div class="px-10 py-3 md:px-5 lg:mx-auto bg-orange-50">
		<div class="my-5">
			<img src="~/assets/mpi250px.png" class="w-auto h-36" />
		</div>
		<div class="flex flex-col items-start justify-between my-5 tracking-wide md:mx-5 lg:mx-auto lg:flex-row">
			<div class="md:w-3/5 lg:w-2/5">
				<div class="mb-3 text-3xl font-bold uppercase text-stone-800">PT Mixa Perkasa Indonesia</div>
				<div class="mb-4 text-lg text-stone-700/90">
					Emerald Avenue Comercial Park Blok EA-A27 Jl. Boulevard CBD Bintaro, RT. 003 RW. 007, Perigi Pondok
					Aren, Kota Tangerang Selatan Banten
				</div>
				<div class="mb-4 text-lg text-stone-700/70">
					<td>
						<tr>
							Email
						</tr>
						<tr>
							:
						</tr>
						<tr>
							<a href="mailto:mpi@mixaperkasa.com">mpi@mixaperkasa.com</a>
						</tr>
					</td>
					<div>
						<tr>
							Telp
						</tr>
						<tr>
							:
						</tr>
						<tr>
							<a href="tel:+642122210280">(021) 222 10 280</a>
						</tr>
					</div>
				</div>
			</div>
			<!-- <div class="mt-10 space-y-2 md:space-y-3 lg:mt-0">
				<div class="mb-4 text-3xl font-semibold lg:mb-7">Perusahaan</div>
				<div>
					<NuxtLink
						class="text-lg font-medium hover:underline underline-offset-4 decoration-orange-600 decoration-2"
						to="/about"
						>Tentang</NuxtLink
					>
				</div>
				<div>
					<NuxtLink
						class="text-lg font-medium hover:underline underline-offset-4 decoration-orange-600 decoration-2"
						to="/project"
						>Proyek</NuxtLink
					>
				</div>
				<div>
					<NuxtLink
						class="text-lg font-medium hover:underline underline-offset-4 decoration-orange-600 decoration-2"
						to="/product"
						>Produk</NuxtLink
					>
				</div>
			</div> -->
		</div>
		<div
			class="flex items-center justify-center pt-5 mb-5 text-lg font-semibold border-t-4 border-zinc-900/50 text-stone-700/90"
		>
			&copy; {{ new Date().getFullYear() }} PT Mixa Perkasa Indonesia
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
