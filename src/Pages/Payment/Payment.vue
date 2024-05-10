<script setup lang="ts">
	import { computed, ref, onMounted } from "vue";
	import Circle from "../../components/Molecules/Circle/Circle.vue";
	import Modal from "../../components/Molecules/Modal/Modal.vue";
	import PaymentContainer from "../../components/Organisms/PaymentContainer/PaymentContainer.vue";
	import Slide from "../../components/Molecules/Slide/Slide.vue";
	import { List } from "../../types/types";

	const shoppingList = ref([
		{
			id: 1,
			name: "羽衣甘蓝",
			url: "https://hitohana.tokyo/dryflower/dry-flower-swag-blue-1",
			img: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			name: "苹果树",
			url: "https://hitohana.tokyo/dryflower/dry-flower-swag-blue-1",
			img: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 3,
			name: "豆奶",
			url: "https://hitohana.tokyo/dryflower/dry-flower-swag-blue-1",
			img: "https://images.unsplash.com/photo-1639843606783-b2f9c50a7468?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	]);

	const commentList: List[] = [
		{
			id: 1,
			comment: "苹果树",
			iframe: "https://gifmagazine.net/embed/glp/4587905",
			href: "https://gifmagazine.net/post_images/4587905",
		},
		{
			id: 2,
			comment: "苹果树",
			iframe: "https://gifmagazine.net/embed/glp/4484697",
			href: "https://gifmagazine.net/post_images/4484697",
		},
		{
			id: 3,
			comment: "苹果树",
			iframe: "https://gifmagazine.net/embed/glp/4484693",
			href: "https://gifmagazine.net/post_images/4484693",
		},
		{
			id: 4,
			comment: "苹果树",
			iframe: "https://gifmagazine.net/embed/glp/3916203",
			href: "https://gifmagazine.net/post_images/3916203",
		},
		{
			id: 5,
			comment: "苹果树",
			iframe: "https://gifmagazine.net/embed/glp/3937585",
			href: "https://gifmagazine.net/post_images/3937585",
		},
		{
			id: 6,
			comment: "苹果树",
			iframe: "https://gifmagazine.net/embed/glp/4378007",
			href: "https://gifmagazine.net/post_images/4378007",
		},
	];

	const commentAddNumber = ref(0);
	const messages = ref("这是好👌");

	onMounted(() => {
		if (commentList.length < 12) {
			commentAddNumber.value = 12 - Number(commentList.length);
		} else {
			commentAddNumber.value = 0;
		}

		console.log(commentAddNumber.value);
	});

	const modalFlag = ref<boolean>(false);
	const merchandiseNames = ref<String>("");

	const OnModalClose = () => {
		modalFlag.value = false;
	};

	const ClickHandler = (merchandiseName: string) => {
		merchandiseNames.value = merchandiseName;
		modalFlag.value = true;
		console.log(`谢谢🫧 ${merchandiseName}也是高兴！`);
	};

	const InputHandler = (ev: Event) => {
		messages.value = (ev.target as HTMLInputElement).value;
	};

	const MessageChecker = computed(() => {
		if (messages.value.length >= 10) {
			return "😣";
		} else {
			return messages.value;
		}
	});

	const Reset = () => {
		messages.value = "这是好👌";
	};
</script>
<template>
	<Circle :flag="false" />
	<div class="payment-container">
		<h1>购物便条🧺</h1>
		<PaymentContainer :shoppingList="shoppingList" @click="ClickHandler" />
		<Circle :flag="true" />

		<Modal :modalFlag="modalFlag" :merchandiseName="merchandiseNames" @close="OnModalClose" />

		<section class="comment">
			<div class="comment-bubble">
				<svg class="comment-bubble-svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="_x34_" x="0" y="0" style="enable-background: new 0 0 800 489.74" version="1.1" viewBox="0 0 800 489.74">
					<path d="M765.211 121.018c-53.14-104.061-204.595-144.42-481.422-72.262-316.468 82.491-375.766 359.86-25.553 360.07 30.362.018 84.392 3.009 132.853-15.515 0 0 5.685-1.126 14.432-2.518 9.086 25.23 26.801 47.334 49.612 61.474l4.512 14.465c-7.38-26.246-9.305-54.013-5.668-81.031 10.501-.357 20.528-.01 28.412 1.593 60.446 19.198 161.411-6.056 197.073-31.591 104.692-74.963 116.402-174.662 85.749-234.685zM550.945 466.73a194.582 194.582 0 0 0 3.358 10.766l-3.358-10.766z" class="st0" />
				</svg>
				<p class="comment-bubble-message">{{ MessageChecker }}</p>
			</div>
			<h2>comment</h2>
			<form action="#">
				<input type="text" placeholder="Could you write your feeling?" class="comment-input" @input="InputHandler" v-model="messages" />
				<button type="button" class="comment-button" @click="Reset">评论</button>
			</form>

			<Slide class="comment-slide" :lists="commentList" />

			<div class="comment-character">
				<img class="comment-character-egg" src="https://www.yaohiko.co.jp/isshoumochi/assets/img/index/kv/illusts/pc/1x/b-kv_illust34.png.webp" alt="material" />
				<img class="comment-character-material" src="https://www.yaohiko.co.jp/isshoumochi/assets/img/index/kv/illusts/pc/1x/b-kv_illust26.png.webp" alt="material" />
			</div>
		</section>
	</div>
</template>

<style scoped lang="scss">
	h1 {
		z-index: 2;
		width: 50vw;
		padding: 10px 0 20px;
		margin-bottom: 70px;
		font-family: "秀英丸ゴシック L";
		font-size: 70px;
		color: #bdc597;
	}

	h2 {
		width: 50vw;
		padding: 150px 0 20px;
		margin: 0 auto;
		font-family: "秀英丸ゴシック L";
		font-size: 50px;
		color: #fff;
	}

	.payment-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #3d3d3d;
		text-align: center;
		border-radius: 24px;
	}

	.comment {
		display: flex;
		flex-direction: column;
		width: 90%;
		height: 1000px;
		overflow: hidden;
		background-color: #e9c872;
		border-radius: 50% 50% 50% 70% / 50% 50% 70% 60%;

		.comment {
			&-bubble {
				position: absolute;
				height: fit-content;
				transform: translateX(420px) translateY(50px);

				&-svg {
					width: 200px;
					height: auto;
					fill: #fff;
				}

				&-message {
					position: relative;
					top: -80px;
					left: 0px;
					z-index: 99999;
					padding: 0;
					margin: 0;
					color: #98b9d2;
				}
			}

			&-input {
				width: 40%;
				height: 50px;
				padding: 0 20px;
				color: #98b9d2;
				background-color: #fff;
				border: unset;
				border-radius: 30px;
			}

			&-button {
				position: relative;
				left: -50px;
				width: 80px;
				aspect-ratio: 1/1;
				border-radius: 100%;
			}

			&-character {
				display: flex;
				margin-left: 20px;
				transform: translateY(364px);
			}

			&-slide:hover ~ .comment-character {
				animation: 1.3s linear fadeIn;
				animation-fill-mode: forwards;
			}

			&-character .comment-character-material {
				width: 292px;
				height: 166px;
				aspect-ratio: 292 /166;
			}
		}
	}

	@keyframes fadeIn {
		0% {
			transform: translateY(364px);
		}

		70% {
			transform: translateY(-40px);
		}

		100% {
			transform: translateY(0);
		}
	}
</style>
