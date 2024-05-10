<script setup lang="ts">
	import { List } from "../../../types/types";

	const props = defineProps<{
		lists: List[];
	}>();

	const slideLists = props.lists;
</script>

<template>
	<div class="slide-infinity">
		<div class="slide-infinity-container">
			<ul class="slide-infinity-list is-left">
				<li class="slide-infinity-list__col" v-for="lists in slideLists" :key="lists.id">
					<div class="slide-infinity-list__col-img">
						<iframe :src="lists.iframe" width="300" height="300" frameBorder="0" class="gifmagazine-embed" allowFullScreen alt="image"></iframe>
						<p>
							<a :href="lists.href" target="_blank">via GIFMAGAZINE</a>
						</p>
					</div>
				</li>
			</ul>
			<ul class="slide-infinity-list is-left">
				<li class="slide-infinity-list__col" v-for="lists in slideLists" :key="lists.id">
					<div class="slide-infinity-list__col-img">
						<iframe :src="lists.iframe" width="300" height="300" frameBorder="0" class="gifmagazine-embed" allowFullScreen alt="image"></iframe>
						<p>
							<a :href="lists.href" target="_blank">via GIFMAGAZINE</a>
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.slide-infinity {
		&-container {
			display: flex;
			overflow: hidden;
		}

		&-list {
			display: flex;
			padding: 0;
			list-style: none;

			&.is-left {
				animation: 20s linear infinite infinity-slide-left 0.5s both;
			}
		}

		&:hover .is-left {
			animation-play-state: paused;
		}

		&-list__col {
			width: calc(100vw / 6);
			height: auto;
			aspect-ratio: 1/1;
			// margin: 0 4px;
			border-radius: 100%;

			&-img {
				display: flex;
				flex-direction: column;
				align-items: center;
				overflow: hidden;

				> iframe {
					width: 90%;
					height: auto;
					aspect-ratio: 1/1;
					background-color: #fff;
					border-radius: 100%;
				}
			}
		}
	}

	@keyframes infinity-slide-left {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
