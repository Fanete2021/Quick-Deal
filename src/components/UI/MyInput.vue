<template>
  <input
    class="input"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      defaultValue: ''
    }
  },
  name: 'my-input'
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>