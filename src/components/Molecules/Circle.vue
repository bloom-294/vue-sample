<script setup lang="ts">
import CircleMaterial from "../Atoms/CircleMaterial/CircleMaterial.vue"

const props = defineProps<{
  flag: boolean,
}>();
</script>

<template>
  <div :class="[ props.flag ? 'circle-down' : '' ]" >

    <CircleMaterial object="greenPepper" />
    <CircleMaterial object="okura" /> 

  </div>
</template>

<style scoped>
.circle {
  position:absolute;
  top: -130px;
  left: -200px;
  height: 600px;
  aspect-ratio: 1/1;
  margin: 0;
  animation: 100s linear infinite routeAnime;
}

.circle-okura {
  height: 500px;
  top: calc(-137px + 50px);
  left: calc(-200px + 50px);
}

.circle-down {
  position: relative;
  top: -320px;
  right: -550px;
}

.circle div {
  position: absolute;
  top: 0;
  left: 290px; /* .circleの中に入れる */
  width: 30px; 
  height: 300px; 
  transform-origin: center bottom; 
}

.circle-okura div{
  top: 0px;
  left: 230px;
  height: 250px;
}

.circle div:nth-child(2) {
  transform: rotate(36deg);
}

.circle div:nth-child(3) {
  transform: rotate(72deg);
}

.circle div:nth-child(4) {
  transform: rotate(108deg);
}

.circle div:nth-child(5) {
  transform: rotate(144deg);
}

.circle div:nth-child(6) {
  transform: rotate(180deg);
}

.circle div:nth-child(7) {
  transform: rotate(216deg);
}

.circle div:nth-child(8) {
  transform: rotate(252deg);
}

.circle div:nth-child(9) {
  transform: rotate(288deg);
}

.circle div:nth-child(10) {
  transform: rotate(324deg);
}

.circle-img {
  height: 100px;
  width: auto;
}

@keyframes routeAnime{
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
