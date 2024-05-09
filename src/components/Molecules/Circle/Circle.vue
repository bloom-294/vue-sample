<script setup lang="ts">
	import { computed } from "vue";
	import CircleMaterial from "../../Atoms/CircleMaterial/CircleMaterial.vue";

	const props = defineProps<{
		flag: boolean;
	}>();

	const classes = computed(() => {
		if (props.flag) {
			return "circle-down";
		} else {
			return;
		}
	});
</script>

<template>
	<div :class="classes">
		<CircleMaterial object="greenPepper" />
		<CircleMaterial object="okura" />
	</div>
</template>

<style scoped lang="scss">
	.circle-down {
		position: relative;
		top: -320px;
		right: -900px;
	}
</style>
