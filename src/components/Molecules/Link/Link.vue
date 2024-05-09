<script setup lang="ts"></script>

<template>
	<div class="link-container">
		<router-link to="/" class="link-container-router">main</router-link>
		<router-link to="/list" class="link-container-router is-secondary">List</router-link>
		<router-link to="/persons" class="link-container-router is-third">Persons</router-link>
	</div>
</template>

<style scoped lang="scss">
	.link-container {
		position: fixed;
		top: 20px;
		right: 50px;
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
