<script setup lang="ts"></script>

<template>
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
