import type { Meta, StoryObj } from "@storybook/vue3";
import CircleMaterial from "./CircleMaterial.vue";

const meta = {
	title: "Atom/CircleMaterial",
	component: CircleMaterial,
	tags: ["autodocs"],
	argTypes: {
		object: { control: "select", options: ["greenPepper", "okura"] },
	},
} satisfies Meta<typeof CircleMaterial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GreenPepper: Story = {
	args: {
		object: "greenPepper",
	},
};

export const Okura: Story = {
	args: {
		object: "okura",
	},
};
