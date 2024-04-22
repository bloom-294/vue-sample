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
    <div>
      <input type="text" placeholder="投稿" v-model="addComments.comment" class="list-form-input is-post" />
      <Button text="post" type="other" size="small" />
    </div>
    <input type="text" name="search" placeholder="絞り込み" id="search" v-model="search" class="list-form-input is-search"/>
  </form>
</template>

<style scoped lang="scss">
.list-form {
  display: flex;
  justify-content: center;
  
  .list-form {
    &-input {
      border: 2px solid #000;
      width: 300px;
      height: 32px;
      border-radius: 30px;
      padding: 12px;
      color: #98B9D2;

      &.is-search {
        margin: auto 0;
      }
    }
  }
  
  .button {
    transform: translateX(-40px);

    &:hover {
      transform: translateX(-40px) scale(1.2);
    }
  }
}

</style>
