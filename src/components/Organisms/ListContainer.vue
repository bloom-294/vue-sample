<script setup lang="ts">
import ListComment from "../Molecules/ListComment.vue";
import ListForm from "../Molecules/ListForm.vue";
import { List } from '../../types/types';

const search = defineModel();

const props = defineProps<{
  search: string,
  lists: List[]
}>();

</script>

<template>
  <section class="list-container">
    <h1>🍪</h1>
    <ListForm  @submit="OnSubmit" v-model="search"/>
    <ListComment :lists="props.lists" :search="props.search"/>
  </section>

</template>

<style scoped>

</style>
