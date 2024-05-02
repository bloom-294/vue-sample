import type { Meta } from "@storybook/vue3";
import PaymentContainer from "./PaymentContainer.vue";

const meta = {
	title: "Organisms/PaymentContainer",
	component: PaymentContainer,
	tags: ["autodocs"],
	argTypes: {
		shoppingList: { control: "object" },
	},
} satisfies Meta<typeof PaymentContainer>;

export default meta;

const shoppingList = [
	{
		id: 1,
		name: "羽衣甘蓝",
		url: "https://hitohana.tokyo/dryflower/dry-flower-swag-blue-1",
		img: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 2,
		name: "苹果树",
		url: "https://hitohana.tokyo/dryflower/dry-flower-swag-blue-1",
		img: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 3,
		name: "豆奶",
		url: "https://hitohana.tokyo/dryflower/dry-flower-swag-blue-1",
		img: "https://images.unsplash.com/photo-1639843606783-b2f9c50a7468?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

export const Default = {
	args: {
		shoppingList: shoppingList,
	},
};
