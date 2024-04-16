<script setup lang="ts">

  const props = defineProps<{
    shoppingList: any
  }>();

  const emits = defineEmits<{
    (e: "click", value:string): void;
  }>();

  const ClickHandler = (value:string) => {
    emits("click", value);
  }

  
</script>

<template>
    <section class="payment">
      <ul>
        <li v-for="merchandise in props.shoppingList" key="merchandise">
          <img :src="merchandise.img" alt="apple">
          <a v-bind:href="merchandise.url" target="_blank" rel="noreferrer" title="前往购买网站">{{ merchandise.name }}</a>
          <form action="#">
            <button type="button" @click="ClickHandler(merchandise.name)">购买</button>
          </form>
        </li>
      </ul>
    </section>

</template>

<style scoped>

.payment {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 70px;
}

.payment ul {
  list-style: none;
  text-align: left;
  display: flex;
  height: fit-content;
  margin:50px 0 100px;
}

.payment li {
  width: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.payment img {
  width: 100%;
  height: 300px;
  border-radius: 30px;
  margin-top: 0;
  padding: 0;
  box-shadow: 5px 5px 2px 1px rgba(15, 28, 63, 0.125);
  object-fit: cover;
  aspect-ratio: 2/1;
}

.payment li a {
  color: #E9C872;
}

.payment li a:hover {
  color: #98B9D2;
  transition: all .5s ease-out;
}

.payment li:hover {
  transform: scale(1.69);
  transition: all .5s ease-out;
  z-index: 2;
  box-shadow:none;
}

.payment li:nth-child(2) {
  transform: scale(1.55);
  z-index: 1;
  transition: all .3s ease-out;
}

.payment :not(li:nth-child(2)):hover li:nth-child(2) {
  transform: scale(1);
  transition: all .3s ease-out;
}

/* TODO: !important修正 */
.container .payment li:nth-child(2):hover {
  transform: scale(1.7) !important;
  transition: all .3s ease-out;
}

.payment li button {
  font-size: 20px;
  background-color: #F3B8AF;
  color: #fff;
  width: 120px;
  height: 32px;
  text-align: center;
  border-radius: 12px;
}

.payment li button:hover {
  background-color: #98B9D2;
  color: #fff;
  transition: all .5s ease-out;
}


</style>
