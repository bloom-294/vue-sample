<script setup lang="ts">
	import { computed } from "vue";

	const props = defineProps<{
		text?: string;
		type?: "primary" | "secondary" | "other";
		size?: "small" | "medium" | "large";
	}>();

	const types = computed(() => {
		switch (props.type) {
			case "primary":
				return "is-primary";
			case "secondary":
				return "is-secondary";
			case "other":
				return "is-other";
			default:
				break;
		}
	});

	const sizes = computed(() => {
		switch (props.size) {
			case "small":
				return "is-small";
			case "medium":
				return "is-medium";
			case "large":
				return "is-large";
			default:
				break;
		}
	});

	const emits = defineEmits<{
		(e: "onClick"): void;
	}>();

	const onClick = () => {
		emits("onClick");
	};
</script>

<template>
	<button type="submit" class="button" :class="[types, sizes]" @click="onClick">
		{{ props.text || "Button" }}
	</button>
</template>

<style scoped lang="scss">
	.button {
		z-index: 10;
		width: 120px;
		height: auto;
		aspect-ratio: 15/4;
		padding: 10px;
		font-size: 20px;
		color: #fff;
		text-align: center;
		cursor: pointer;
		background-color: #f3b8af;
		border: unset;
		border-radius: 12px;

		&:hover {
			background-color: #98b9d2;
			transition: all 0.5s ease-out;
		}

		&.is {
			&-small {
				width: 80px;
				font-size: 16px;
				border-radius: 8px;
			}

			&-medium {
				width: 140px;
				font-size: 24px;
				border-radius: 14px;
			}

			&-large {
				width: 200px;
				font-size: 28px;
				border-radius: 20px;
			}

			&-primary {
				background-color: #bdc597;

				&:hover {
					background-color: #98b9d2;
				}
			}

			&-secondary {
				background-color: #98b9d2;

				&:hover {
					background-color: #e9c872;
				}
			}

			&-other {
				aspect-ratio: 1/1;
				background-color: #e9c872;
				border-radius: 100%;

				&:hover {
					background-color: #f3b8af;
				}
			}
		}
	}
</style>
