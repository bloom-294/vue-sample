<script setup lang="ts">
	import { List } from "../../../types/types";
	import Button from "../../Atoms/Button/Button.vue";

	const props = defineProps<{
		search: string;
		lists: List[];
	}>();

	const emits = defineEmits<{
		(e: "delete", value: string): void;
	}>();

	const OnDelete = (value: string) => {
		emits("delete", value);
	};
</script>

<template>
	<ul>
		<li class="list-container-comment" v-for="(list, index) in props.lists" :key="index">
			<div v-if="list.comment.includes(search) || props.search.length == 0">
				<div class="list-container-comment-img">
					<iframe :src="list.iframe" width="300" height="300" frameBorder="0" class="gifmagazine-embed" allowFullScreen></iframe>
					<p>
						<a :href="list.href" target="_blank">via GIFMAGAZINE</a>
					</p>
				</div>
				<div>
					<p>{{ list.comment }}</p>
					<Button
						text="Delete"
						type="primary"
						size="small"
						@onClick="
							() => {
								OnDelete(String(list.id));
							}
						" />
				</div>
			</div>
		</li>
	</ul>
</template>

<style scoped lang="scss">
	ul {
		margin: auto;
		padding: 0;
		width: 80%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.list-container-comment {
		margin: 20px;
		display: flex;
		color: #f3b8af;

		&-img {
			width: 150px;
			aspect-ratio: 1/1;
			border-radius: 100%;
			overflow: hidden;

			iframe {
				width: 150px;
				height: 150px;
				aspect-ratio: 1/1;
			}
		}
	}
</style>
