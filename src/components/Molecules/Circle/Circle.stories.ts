import type { Meta, StoryObj } from "@storybook/vue3";
import Circle from "../Circle/Circle.vue";

const meta = {
	title: "Molecules/Circle",
	component: Circle,
	tags: ["autodocs"],
	argTypes: {
		flag: { control: "boolean" },
	},
} satisfies Meta<typeof Circle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UpSide: Story = {
	args: {
		flag: false,
	},
};

export const DownSide: Story = {
	args: {
		flag: true,
	},
};
