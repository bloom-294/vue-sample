<script setup lang="ts">
	const linkList = [
		{
			id: 1,
			path: "/",
			text: "main",
			class: "",
		},
		{
			id: 2,
			path: "/list",
			text: "List",
			class: "is-secondary",
		},
		{
			id: 3,
			path: "/persons",
			text: "Persons",
			class: "is-third",
		},
	];
</script>

<template>
	<div class="link-container">
		<router-link v-for="links in linkList" :to="links.path" class="link-container-router" :class="links.class" :key="links.id">{{ links.text }}</router-link>
	</div>
</template>

<style scoped lang="scss">
	.link-container {
		position: fixed;
		top: 20px;
		right: 50px;
		z-index: 100;
		display: flex;

		&-router {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 80px;
			aspect-ratio: 1/1;
			margin: 0 4px;
			color: #fff;
			background-color: #bdc597;
			border: 2px solid #bdc597;
			border-radius: 100%;

			&.is-secondary {
				background-color: #e9c872;
				border-color: #e9c872;

				&:hover {
					color: #e9c872;
					background-color: #fff;
					transition: color 0.5s ease-out;
				}
			}

			&.is-third {
				background-color: #f3b8af;
				border-color: #f3b8af;

				&:hover {
					color: #f3b8af;
					background-color: #fff;
					transition: color 0.5s ease-out;
				}
			}

			&:hover {
				color: #bdc597;
				background-color: #fff;
				transition: color 0.5s ease-out;
			}
		}
	}
</style>
