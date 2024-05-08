<script setup lang="ts">
	import { ref } from "vue";
	import Button from "../../Atoms/Button/Button.vue";

	const inputtingName = ref<string>("");
	const inputtingAge = ref<number>(0);

	const emit = defineEmits(["register"]);

	const Register = () => {
		const person = {
			id: Math.floor(Math.random() * 11),
			name: inputtingName.value,
			age: inputtingAge.value,
		};
		console.log("person...", person);
		emit("register", person);
	};

	const primaryColor = "#BCC597";
</script>

<template>
	<div class="post-container">
		<div class="post-container-input">
			<Form action="#">
				<div>
					<label for="post-container-input-text">名字</label>
					<input type="text" name="post-container-input-text" id="post-container-input-text" v-model="inputtingName" />
				</div>
				<div>
					<label for="post-container-input-text">年齢</label>
					<input type="number" name="post-container-input-text" id="post-container-input-text" v-model="inputtingAge" />
					<span>岁</span>
				</div>
				<Button text="购买" type="secondary" size="small" @click="Register" />
			</Form>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.post-container {
		&-input {
			width: fit-content;
			color: #fff;
			background-color: v-bind(primaryColor);
			border-radius: 30px;

			Form {
				padding: 10px;

				& input {
					height: 30px;
					padding: 0 20px;
					margin: 10px 5px;
					color: #bcc597;
					border-radius: 30px;
				}
			}
		}
	}
</style>
