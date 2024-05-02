import type { Meta, StoryObj } from "@storybook/vue3";
import TestButton from "./TestButton.vue";

const meta = {
	title: "Test/Button",
	component: TestButton,
	tags: ["autodocs"],
	argTypes: {
		size: { control: "select", options: ["small", "medium", "large"] },
		color: {
			control: "select",
			options: ["primary", "secondary", "other"],
		},
	},
	args: {
		shadow: false,
	},
} satisfies Meta<typeof TestButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		shadow: false,
		label: "TestButton",
	},
};
export const Primary: Story = {
	args: {
		shadow: true,
		color: "primary",
		label: "TestButton",
	},
};

export const Secondary: Story = {
	args: {
		shadow: true,
		color: "secondary",
		size: "small",
		label: "TestButton",
	},
};

export const Other: Story = {
	args: {
		shadow: true,
		color: "other",
		size: "large",
		label: "TestButton",
	},
};
