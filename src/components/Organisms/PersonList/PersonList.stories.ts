import type { Meta } from "@storybook/vue3";
import PersonList from "./PersonList.vue";

const meta = {
	title: "Organisms/PersonList",
	component: PersonList,
	tags: ["autodocs"],
	argTypes: {
		persons: { control: "object" },
	},
} satisfies Meta<typeof PersonList>;

export default meta;

const persons = [
	{ id: 0, name: "billy", age: 11 },
	{ id: 1, name: "mandy", age: 22 },
	{ id: 2, name: "carl", age: 33 },
	{ id: 3, name: "kate", age: 33 },
	{ id: 4, name: "candy", age: 55 },
	{ id: 5, name: "spector", age: 66 },
	{ id: 6, name: "steven", age: 77 },
];

export const Default = {
	args: {
		persons: persons,
	},
};
