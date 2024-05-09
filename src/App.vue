<script setup lang="ts">
	import Link from "./components/Molecules/Link/Link.vue";
	import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
	<SpeedInsights/>
	<Link />
	<section class="container">
		<router-view />
	</section>
</template>

<style scoped>
	.container {
		width: 80vw;
		margin: auto;
		animation: 3s linear fadeAnime;
	}

	@keyframes fadeAnime {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>
