<script setup lang="ts">
import { Person }  from "../../types/types";

defineProps<{
  persons: Person[];
}>();

const emit = defineEmits(["delete"]);

const OnClickDelete = ( id:number ): void => {
  emit("delete", id);
}

</script>

<template>
  <li v-for="person in $props.persons" :key="person.id" class="persons-list">
    <span>{{ person.name }}</span>
    <span>age: {{ person.age }}</span>
    <button type="button" @click="OnClickDelete(person.id)">
      <span>Delete</span>
    </button>
  </li>

</template>

<style lang="scss" scoped>
.persons-list {
  margin: 12px 0;

  & button {
    margin: 0 20px;
  }
}

</style>
