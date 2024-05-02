<script setup lang="ts">
	import { computed } from "vue";

	const props = defineProps<{
		label?: string;
		object: "greenPepper" | "okura";
	}>();

	const classes = computed(() => ({
		"circle-okura": props.object == "okura",
	}));

	const objectUrl = computed(() => {
		if (props.object == "greenPepper") {
			return "https://www.yaohiko.co.jp/isshoumochi/assets/img/index/kv/illusts/pc/1x/b-kv_illust01.png.webp";
		} else {
			return "https://www.yaohiko.co.jp/isshoumochi/assets/img/index/kv/illusts/pc/1x/b-kv_illust09.png.webp";
		}
	});
</script>

<template>
	<div class="circle" :class="classes">
		<div v-for="key in 10" :key="key">
			<img class="circle-img" :src="objectUrl" :alt="props.object" />
		</div>
	</div>
</template>

<style scoped lang="scss">
	.circle {
		position: absolute;
		top: -130px;
		left: -200px;
		height: 600px;
		aspect-ratio: 1/1;
		margin: 0;
		animation: 100s linear infinite routeAnime;

		div {
			position: absolute;
			top: 0;
			left: 290px; /* .circleの中に入れる */
			width: 30px;
			height: 300px;
			transform-origin: center bottom;

			@for $i from 2 through 10 {
				&:nth-child(#{$i}) {
					transform: rotate(calc(36deg * ($i - 1)));
				}
			}
		}

		&-okura {
			height: 500px;
			top: calc(-137px + 50px);
			left: calc(-200px + 50px);

			div {
				top: 0px;
				left: 230px;
				height: 250px;
			}
		}

		&-img {
			height: 100px;
			width: auto;
		}
	}

	@keyframes routeAnime {
		0% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
