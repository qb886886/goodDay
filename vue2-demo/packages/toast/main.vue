<template>
  <transition name="toast">
    <div
      :class="['gd-toast', 'gd-toast-' + type]"
      v-if="visible"
      v-html="message"
    ></div>
  </transition>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.gd-toast{
  width: 100px;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 14px;
  position: fixed;
  top: 100px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 0 10px rgba($color: #000000, $alpha: .36);
}
</style>
