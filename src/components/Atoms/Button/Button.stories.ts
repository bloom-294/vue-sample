import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";
import { within, userEvent } from "@storybook/test";

const meta = {
  title: "Atom/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {control: "text"},
    type: { control: "select" , options: [ "primary", "secondary", "other" ]},
    size: { control: "select" , options: [ "small", "medium", "large" ]},    
  },

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const test = () => {
  alert("test")
}

export const Default: Story = {
  args: {
    text: "评论",
  },
  play: async ({ canvasElement } : any ) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
    test();
  }
};

export const Primary: Story = {
  args: {
    text: "评论",
    type: "primary",
    size: "small"
  },
};

export const Secondary: Story = {
  args: {
    text: "评论",
    type: "secondary",
    size: "medium"
  },
};

export const Other: Story = {
  args: {
    text: "评论",
    type: "other",
    size: "large"
  },
};
