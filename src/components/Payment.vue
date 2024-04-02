<script setup lang="ts">
</script>
<template>
  <div class="container">
    <h1>购物便条🧺</h1>
    <div class="payment">
      <ul>
        <li>苹果树</li>
        <li>羽衣甘蓝</li>
        <li>豆奶</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  background-color: #BDC597;
  width: 50vw;
  padding: 10px 0 20px;
  overflow: hidden;
  border-radius: 16px;
  font-family: "秀英丸ゴシック L";
  color: #F2F2F2;
}

.container {
  color: #3D3D3D;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  border: solid 3px #fff;
  border-radius: 24px;
  background-color: #fff;
}

.payment {
  font-size: 36px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  height: 90vh;
}

.payment ul {
  list-style: none;
  text-align: left;
  display: flex;
  height: fit-content;
}

.payment li {
  height: 250px;
  width: 200px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ECECEC;
  color: #fff;
  box-shadow: 5px 5px 2px 1px #d0cfcf;
  flex-direction: column;
}

.payment li:nth-child(2) {
  background-color: #98B9D2;
  transform: scale(1.4);
  box-shadow: 4px 4px 2px 1px #8c9dac;
}

</style>
