<script setup lang="ts">
	const props = defineProps<{
		modalFlag: Boolean;
		merchandiseName?: String;
		text?: String;
		teleportFlag?: boolean;
	}>();

	const emit = defineEmits(["close"]);

	const OnModalClose = (flag: Boolean) => {
		if (flag) {
			emit("close");
		} else {
			return;
		}
	};
</script>

<template>
	<Teleport to="body" :disabled="teleportFlag">
		<div v-if="props.modalFlag">
			<div class="modal-mask" @click="OnModalClose(true)">
				<div class="modal-container" @click="OnModalClose(false)">
					<iframe src="https://gifmagazine.net/embed/glp/2999024" width="300" height="225" frameBorder="0" class="gifmagazine-embed modal-gif" allowFullScreen></iframe>
					<p>
						<a href="https://gifmagazine.net/post_images/2999024" target="_blank" class="modal-link">via GIFMAGAZINE</a>
					</p>
					<div class="modal-sentence" v-if="text == null">
						谢谢🫧
						<span>{{ props.merchandiseName }}</span>
						也是高兴&nbsp;🎉✨
					</div>
					<div class="modal-sentence" v-else>
						{{ props.text }}
					</div>
					<button type="button" class="modal-button" @click="OnModalClose(true)">OK</button>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<style scoped lang="scss">
	.modal {
		&-mask {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 900;
			display: flex;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			transition: opacity 0.3s ease;
		}

		&-container {
			position: fixed;
			top: calc(50vh - 213px);
			left: calc(50vw - 150px);
			z-index: 990;
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 300px;
			height: 426px;
			padding: 20px 30px;
			margin: auto;
			background-color: #fff;
			border-radius: 30px;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
			transition: all 0.3s ease;
		}

		&-sentence {
			margin: 0 0 20px 0;
			text-align: center;

			span {
				font-size: 30px;
				color: #bcc597;
			}
		}

		&-button {
			width: 120px;
			height: 40px;
			margin: auto;
			font-size: 20px;
			color: #fff;
			text-align: center;
			cursor: pointer;
			background-color: #bcc597;
			border-radius: 12px;
		}

		&-button:hover {
			background-color: #98b9d2;
			transition: all 0.3s ease;
		}

		&-gif {
			margin: 0;
			border-radius: 25px;
		}

		&-link {
			padding: 0;
			margin: 0;
			color: #98b9d2;
		}
	}
</style>
