<script setup lang="ts">
	const props = defineProps<{
		shoppingList: any;
	}>();

	const emits = defineEmits<{
		(e: "click", value: string): void;
	}>();

	const ClickHandler = (value: string) => {
		emits("click", value);
	};
</script>

<template>
	<section class="payment">
		<ul>
			<li v-for="merchandise in props.shoppingList" key="merchandise">
				<img :src="merchandise.img" alt="apple" />
				<a v-bind:href="merchandise.url" target="_blank" rel="noreferrer" title="前往购买网站">
					{{ merchandise.name }}
				</a>
				<form action="#">
					<button type="button" @click="ClickHandler(merchandise.name)">购买</button>
				</form>
			</li>
		</ul>
	</section>
</template>

<style scoped lang="scss">
	.payment {
		display: flex;
		justify-content: space-between;
		margin: 0 auto 70px;
		font-size: 20px;

		ul {
			display: flex;
			height: fit-content;
			margin: 50px 0 100px;
			text-align: left;
			list-style: none;
		}

		img {
			width: 100%;
			height: 300px;
			aspect-ratio: 2/1;
			padding: 0;
			margin-top: 0;
			object-fit: cover;
			border-radius: 30px;
			box-shadow: 5px 5px 2px 1px rgba(15, 28, 63, 0.125);
		}

		li {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 250px;
			height: 500px;
			color: #fff;

			a {
				color: #e9c872;

				&:hover {
					color: #98b9d2;
					transition: all 0.5s ease-out;
				}
			}

			&:hover {
				z-index: 2;
				box-shadow: none;
				transition: all 0.25s ease-out;
				transform: scale(1.69);
			}

			&:nth-child(2) {
				z-index: 1;
				transition: all 0.3s ease-out;
				transform: scale(1.55);
			}

			/* TODO: !important修正 */
			&:nth-child(2):hover {
				transition: all 0.3s ease-out;
				transform: scale(1.7) !important;
			}

			button {
				width: 120px;
				height: 32px;
				font-size: 20px;
				color: #fff;
				text-align: center;
				background-color: #f3b8af;
				border-radius: 12px;

				&:hover {
					color: #fff;
					background-color: #98b9d2;
					transition: all 0.5s ease-out;
				}
			}
		}

		:not(li:nth-child(2)):hover li:nth-child(2) {
			transition: all 0.3s ease-out;
			transform: scale(1);
		}
	}
</style>
