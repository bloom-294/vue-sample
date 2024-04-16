<script setup lang="ts">

import { Ref, ref } from 'vue';
import  { Person } from '../types/types';
import PersonList from '../components/Organisms/PersonList.vue';
import PersonPostForm from '../components/Organisms/PersonPostForm.vue';


const persons: Ref<Person[]> = ref([
  { id:0, name: "billy", age: 11 }, 
  { id:1, name: "mandy", age: 22 }, 
  { id:2, name: "carl", age: 33 },
  { id:3, name: "kate", age: 33 },
  { id:4, name: "candy", age: 55 },
  { id:5, name: "spector", age: 66 },
  { id:6, name: "steven", age: 77 },
]);


const Register = (person: Person) => {
  persons.value.push(person);
}

const Delete = (id :number) => {
  console.log(id);
  persons.value = persons.value.filter((e) => e.id !== id);
}
</script>

<template>
  <div>
    <h1>Persons</h1>
    <div class="persons-container">
      <PersonPostForm @register="Register" />
      <div class="persons-container-list">
        <ul>
          <PersonList :persons="persons" @delete="Delete" />
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped >
.persons-container {
  display: flex;
  justify-content: center;

  &-list {
    margin: 0 50px;
  }
}

</style>
