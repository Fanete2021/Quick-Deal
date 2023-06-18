<template>
  <div class="navbar">
    <div>Quick Deal</div>

    <div class="navbar__btns">
      <my-button @click="$router.push('/')">
        Главная
      </my-button>

      <my-button @click="$router.push('/tasks')">
        Задачи
      </my-button>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  .navbar__btns {
    *:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>