<script setup lang="ts">
import { ref } from 'vue';
import { List } from '../../types/types';

const search = defineModel();

const addComments = ref<List>({
  id: "",
  comment: "",
  iframe: "",
  href: ""
});

const emits = defineEmits<{
  (e: "submit", value:string): void;
}>();

const OnSubmit = (value:string) => {
  emits("submit", value);

  addComments.value = {
    id: "",
    comment: "",
    iframe: "",
    href: ""
  }
}
</script>

<template>
  <form action="#" @submit.prevent="() => OnSubmit(addComments.comment)" >
    <input type="text" placeholder="test" v-model="addComments.comment" />
    <button type="submit" >submit</button>
    <input type="text" name="search" id="search" v-model="search"/>
  </form>
</template>

<style scoped>

</style>
