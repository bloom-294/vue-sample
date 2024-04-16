<script setup lang="ts">
const props = defineProps<{
  modalFlag: Boolean
  merchandiseName: String
}>();

const emit = defineEmits(["close"]);

const OnModalClose = (flag :Boolean) => {
  if(flag) {
    emit("close");
  } else {
    return;
  }
}


</script>

<template>
  <div v-if="props.modalFlag" >
    <div class="modal-mask" @click="OnModalClose(true)">
      <Teleport to="body">
        <div class="modal-container" @click="OnModalClose(false)">
          <iframe src="https://gifmagazine.net/embed/glp/2999024" width="300" height="225" frameBorder="0" class="gifmagazine-embed modal-gif" allowFullScreen></iframe><p><a href="https://gifmagazine.net/post_images/2999024" target="_blank" class="modal-link">via GIFMAGAZINE</a></p>
          <div class="modal-sentence">
            谢谢🫧 <span> {{ props.merchandiseName }} </span> 也是高兴&nbsp;🎉✨
          </div>
          <button type="button" class="modal-button" @click="OnModalClose(true)">OK</button>
        </div>
      </Teleport>
      </div>
    </div>
</template>

<style scoped lang="scss">
.modal {
  &-mask {
    position: fixed;
    z-index: 900;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
  }

  &-container {
    position: fixed;
    top: calc(50vh - 213px);
    left: calc(50vw - 150px);
    width: 300px;
    height: 426px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 990;
  }

  &-sentence {
    margin: 0 0 20px 0;
    text-align: center;

    span {
      color: #BCC597;
      font-size: 30px;
    }
  }

  &-button {
    font-size: 20px;
    background-color: #BCC597;
    color: #fff;
    width: 120px;
    height: 40px;
    text-align: center;
    border-radius: 12px;
    margin: auto;
    cursor: pointer;
  }

  &-button:hover {
    background-color: #98B9D2;
    transition: all .3s ease;
  }

  &-gif {
    border-radius: 25px;
    margin: 0;
  }

  &-link {
    color: #98B9D2;
    padding: 0;
    margin: 0;
  }
}






</style>
