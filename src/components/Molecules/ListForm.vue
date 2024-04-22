<script setup lang="ts">
import { ref } from 'vue';
import { List } from '../../types/types';
import Button from '../Atoms/Button/Button.vue';

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
  <form action="#" class="list-form" @submit.prevent="() => OnSubmit(addComments.comment)" >
    <input type="text" placeholder="test" v-model="addComments.comment" class="list-form-add" />
    <Button text="submit" type="other" size="small" />
    <input type="text" name="search" id="search" v-model="search" class="list-form-search"/>
  </form>
</template>

<style scoped lang="scss">
.list-form {
  .list-form {
    &-add {
      border: 2px solid #000;
      width: 300px;
      height: auto;
      border-radius: 30px;
      padding: 12px;
    }
  }
  
  .button {
    transform: translateX(-30px);
  }
}

</style>
