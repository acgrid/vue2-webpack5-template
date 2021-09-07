<template>
  <p>
    <FontAwesomeIcon icon="sign-in-alt" /> My message is <span>{{ text }}</span>.
  </p>
</template>

<script>
export default {
  name: 'MyView',
  props: {
    text: { type: String, required: true }
  }
}
</script>

<style lang="less" scoped>
  p{
    color: red;
    span {
      background-color: lightblue;
    }
  }
</style>