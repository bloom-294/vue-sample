<script setup lang="ts">
	import { ref } from "vue";
	import { List } from "../../types/types";
	import ListComment from "../../components/Molecules/ListComment/ListComment.vue";
	import ListForm from "../../components/Molecules/ListForm/ListForm.vue";

	const lists = ref<List[]>([
		{
			id: "1",
			comment: "comment1",
			iframe: "https://gifmagazine.net/embed/glp/3926789",
			href: "https://gifmagazine.net/post_images/3926789",
		},
		{
			id: "2",
			comment: "comment2",
			iframe: "https://gifmagazine.net/embed/glp/4484693",
			href: "https://gifmagazine.net/post_images/4484693",
		},
		{
			id: "3",
			comment: "comment3",
			iframe: "https://gifmagazine.net/embed/glp/3916203",
			href: "https://gifmagazine.net/post_images/3916203",
		},
	]);

	const listLastId = ref(0);
	const search = ref("");

	const OnSubmit = (comment: string) => {
		listLastId.value = Number(lists.value[lists.value.length - 1].id);

		lists.value = [
			...lists.value,
			{
				id: (listLastId.value + 1).toString(),
				comment,
				iframe: "https://gifmagazine.net/embed/glp/3937585",
				href: "https://gifmagazine.net/post_images/3937585",
			},
		];

		console.table(lists.value);
	};

	const onDelete = (id: string) => {
		lists.value = lists.value.filter((list) => list.id !== id);
	};
</script>

<template>
	<section class="list-container">
		<h1>🍪</h1>
		<ListForm @submit="OnSubmit" v-model="search" />
		<ListComment :lists="lists" :search="search" @delete="onDelete" />
	</section>
</template>

<style scoped lang="scss">
	.list-container {
		width: 80vw;
		padding: 30px 0;
		margin: 20px auto;
		text-align: center;
		border-radius: 30px;
	}
</style>
