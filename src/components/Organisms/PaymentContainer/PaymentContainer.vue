<script setup lang="ts">
	const props = defineProps<{
		shoppingList: any
	}>()

	const emits = defineEmits<{
		(e: "click", value: string): void
	}>()

	const ClickHandler = (value: string) => {
		emits("click", value)
	}
</script>

<template>
	<section class="payment">
		<ul>
			<li
				v-for="merchandise in props.shoppingList"
				key="merchandise">
				<img
					:src="merchandise.img"
					alt="apple" />
				<a
					v-bind:href="merchandise.url"
					target="_blank"
					rel="noreferrer"
					title="前往购买网站">
					{{ merchandise.name }}
				</a>
				<form action="#">
					<button
						type="button"
						@click="ClickHandler(merchandise.name)">
						购买
					</button>
				</form>
			</li>
		</ul>
	</section>
</template>

<style scoped lang="scss">
	.payment {
		font-size: 20px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto 70px;

		ul {
			list-style: none;
			text-align: left;
			display: flex;
			height: fit-content;
			margin: 50px 0 100px;
		}

		img {
			width: 100%;
			height: 300px;
			border-radius: 30px;
			margin-top: 0;
			padding: 0;
			box-shadow: 5px 5px 2px 1px rgba(15, 28, 63, 0.125);
			object-fit: cover;
			aspect-ratio: 2/1;
		}

		li {
			width: 250px;
			height: 500px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: #fff;

			a {
				color: #e9c872;

				&:hover {
					color: #98b9d2;
					transition: all 0.5s ease-out;
				}
			}

			&:hover {
				transform: scale(1.69);
				transition: all 0.25s ease-out;
				z-index: 2;
				box-shadow: none;
			}

			&:nth-child(2) {
				transform: scale(1.55);
				z-index: 1;
				transition: all 0.3s ease-out;
			}

			/* TODO: !important修正 */
			&:nth-child(2):hover {
				transform: scale(1.7) !important;
				transition: all 0.3s ease-out;
			}

			button {
				font-size: 20px;
				background-color: #f3b8af;
				color: #fff;
				width: 120px;
				height: 32px;
				text-align: center;
				border-radius: 12px;

				&:hover {
					background-color: #98b9d2;
					color: #fff;
					transition: all 0.5s ease-out;
				}
			}
		}

		:not(li:nth-child(2)):hover li:nth-child(2) {
			transform: scale(1);
			transition: all 0.3s ease-out;
		}
	}
</style>
