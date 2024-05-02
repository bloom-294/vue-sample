import type { Meta } from "@storybook/vue3";
import List from "./List.vue";

const meta = {
	title: "Pages/List",
	component: List,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof List>;

export default meta;

export const Default = {};
