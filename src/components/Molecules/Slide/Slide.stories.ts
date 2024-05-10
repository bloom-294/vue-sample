import type { Meta } from "@storybook/vue3";
import Slide from "./Slide.vue";

const meta = {
	title: "Molecules/Slide",
	component: Slide,
	tags: ["autodocs"],
	argTypes: {
		lists: { control: "object" },
	},
} satisfies Meta<typeof Slide>;

export default meta;

const commentList = [
	{
		id: 1,
		comment: "苹果树",
		iframe: "https://gifmagazine.net/embed/glp/4587905",
		href: "https://gifmagazine.net/post_images/4587905",
	},
	{
		id: 2,
		comment: "苹果树",
		iframe: "https://gifmagazine.net/embed/glp/4484697",
		href: "https://gifmagazine.net/post_images/4484697",
	},
	{
		id: 3,
		comment: "苹果树",
		iframe: "https://gifmagazine.net/embed/glp/4484693",
		href: "https://gifmagazine.net/post_images/4484693",
	},
	{
		id: 4,
		comment: "苹果树",
		iframe: "https://gifmagazine.net/embed/glp/3916203",
		href: "https://gifmagazine.net/post_images/3916203",
	},
	{
		id: 5,
		comment: "苹果树",
		iframe: "https://gifmagazine.net/embed/glp/3937585",
		href: "https://gifmagazine.net/post_images/3937585",
	},
	{
		id: 6,
		comment: "苹果树",
		iframe: "https://gifmagazine.net/embed/glp/4378007",
		href: "https://gifmagazine.net/post_images/4378007",
	},
];

export const Default = {
	args: {
		lists: commentList,
	},
};
