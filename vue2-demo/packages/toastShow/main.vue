<template>
  <div :class="['gd-toast', 'gd-toast-' + type]" v-if="visible">
    {{message}}
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
