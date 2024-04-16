<script setup lang="ts">
import { ref } from 'vue';
const inputtingName = ref<string>('');
const inputtingAge = ref<number>(0);

const emit = defineEmits(["register"]);

const Register = () => {
  const person = { id: Math.floor( Math.random() * 11 ), name: inputtingName.value, age: inputtingAge.value };
  console.log("person...", person);
  emit('register', person);
}

const primaryColor = "#BCC597";

</script>

<template>
  <div class="post-container">
    <div class="post-container-input">
      <Form action="#">
        <div>
          <label for="post-container-input-text">名字 </label>
          <input type="text" name="post-container-input-text" id="post-container-input-text" v-model="inputtingName" />
        </div>
        <div>
          <label for="post-container-input-text">年齢 </label>
          <input type="number" name="post-container-input-text" id="post-container-input-text" v-model="inputtingAge" />
          <span>岁</span>
        </div>
        <button type="button" @click="Register" class="post-container-input-button">购买</button>
      </Form>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.post-container {
  
  &-input {
    color: #fff;
    border-radius: 30px;
    background-color: v-bind(primaryColor);
    width: fit-content;
    
    Form {
      padding: 10px;
       
      & input {
        height: 30px;
        margin: 10px 5px;
        border-radius: 30px;
        color: #BCC597;
        padding: 0 20px;
      }
    }
  }
}
</style>
