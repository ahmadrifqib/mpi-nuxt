<template>
	<div class="antialiased bg-orange-50">
		<NuxtPage />
	</div>
</template>

<script lang="js">
	export default {
		setup() {
			useMeta({
				title: "Mixa Perkasa Indoensia",
				meta: [
					{ charset: "utf-8" },
					{ name: "viewport", content: "width=device-width, initial-scale=1" },
					{
						name: "PT Mixa Perkasa Indonesia",
					},
				],
				link: [{ rel: "icon", type: "image/x-icon", href: "~/assets/favicon.ico" }],
			});
		},
	};
</script>
