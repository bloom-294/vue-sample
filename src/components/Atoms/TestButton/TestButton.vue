<script setup lang="ts">
	import { computed } from "vue";

	const props = defineProps<{
		label?: string;
		shadow?: boolean;
		color?: "primary" | "secondary" | "other";
		size?: "small" | "medium" | "large";
	}>();

	const classes = computed(() => ({
		"is-shadow": !props.shadow,
		[`button-${props.color}`]: true,
		[`is-${props.size || `medium`}`]: true,
	}));
</script>

<template>
	<button type="button" class="button" :class="classes">
		{{ label || "Button" }}
	</button>
</template>

<style lang="scss" scoped>
	.button {
		height: auto;
		aspect-ratio: 3/1;
		margin: 20px;
		color: #fff;
		background-color: #bcc597;
		border: unset;

		&.is {
			&-shadow {
				box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
			}

			&-small {
				width: 200px;
				border-radius: 20px;
			}

			&-medium {
				width: 300px;
				border-radius: 30px;
			}

			&-large {
				width: 400px;
				border-radius: 40px;
			}
		}

		&.button {
			&-primary {
				background-color: #f3b8af;
			}

			&-secondary {
				background-color: #98b9d2;
			}

			&-other {
				color: #bcc597;
				background-color: #fff;
				border: 1px solid #bcc597;
			}

			:hover {
				background-color: #e9c872;
			}
		}
	}
</style>
