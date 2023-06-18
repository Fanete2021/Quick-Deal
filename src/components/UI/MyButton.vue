<template>
  <button
    class="btn"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  box-shadow: 1px 1px 2px gray;

  &:hover {
    background: rgba(0, 128, 128, 0.2);
  }
}
</style>