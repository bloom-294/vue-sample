import type { Meta } from "@storybook/vue3";
import Persons from "./Persons.vue";

const meta = {
	title: "Pages/Persons",
	component: Persons,
} satisfies Meta<typeof Persons>;

export default meta;

export const Default = {};
