<template>
  <div class="demo">
  </div>
</template>

<script>
import 'packages/toast/index'
export default {
  mounted () {
    this.$toast.success({
      message: '出错了',
      duration: 20000
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
