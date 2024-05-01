import type { Meta } from "@storybook/vue3";
import ListComment from "../ListComment/ListComment.vue";

const meta = {
  title: "Molecules/ListComment",
  component: ListComment,
  tags: ["autodocs"],
  argTypes: {
    search: { control: "text" },
    lists: { control: "object" },   
  },
} satisfies Meta<typeof ListComment>;

export default meta;

const lists = ([
  {
    id:"1",
    comment:"comment1",
    iframe:"https://gifmagazine.net/embed/glp/3926789",
    href:"https://gifmagazine.net/post_images/3926789"

  },
  {
    id:"2",
    comment:"comment2",
    iframe:"https://gifmagazine.net/embed/glp/4484693",
    href:"https://gifmagazine.net/post_images/4484693"

  },
  {
    id:"3",
    comment:"comment3",
    iframe:"https://gifmagazine.net/embed/glp/3916203",
    href:"https://gifmagazine.net/post_images/3916203"

  },
]);

export const Default = {
  args: {
    search: "comment",
    lists: lists,
  }
};
