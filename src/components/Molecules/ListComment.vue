<script setup lang="ts">
import { List } from '../../types/types';


const props = defineProps<{
  search: string,
  lists: List[]
}>();

const emits = defineEmits<{
  (e: "delete", value:string): void;
}>();

const OnDelete = (value:string) => {
  emits("delete", value);
};

</script>

<template>
<ul>
  <li class="list-container-comment" v-for="(list, index) in props.lists" :key="index">
    <div v-if="list.comment.includes(search) || props.search.length == 0">
      <div class="list-container-comment-img">
        <iframe :src="list.iframe" width="300" height="300" frameBorder="0" class="gifmagazine-embed" allowFullScreen></iframe><p><a :href="list.href" target="_blank">via GIFMAGAZINE</a></p>
      </div>
      <div>
        <p> {{ list.comment }} </p>
        <button type="button" @click="() => { OnDelete(String(list.id)) }">Delete</button>
      </div>
    </div>
  </li>
</ul>
</template>

<style scoped lang="scss">
.list-container-comment {
  margin: 20px auto;
  display: flex;
  color: #F3B8AF;

  &-img {
    width: 150px;
    aspect-ratio: 1/1;
    border-radius: 100%;
    overflow: hidden;

    iframe {
      width: 150px;
      height: 150px;
      aspect-ratio: 1/1;
    }
  }
}
</style>
