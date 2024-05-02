import type { Meta, StoryObj } from "@storybook/vue3"
import Modal from "./Modal.vue"

const meta = {
	title: "Molecules/Modal",
	component: Modal,
	tags: ["autodocs"],
	argTypes: {
		modalFlag: { control: "boolean" },
		merchandiseName: { control: "text" },
		text: { control: "text" },
		teleportFlag: { control: "boolean" },
	},
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		modalFlag: true,
		merchandiseName: "猫",
		teleportFlag: true,
	},
}

export const Other: Story = {
	args: {
		modalFlag: true,
		text: "狗🐶",
		teleportFlag: true,
	},
}
