<template>
  <div v-if="tasks.length > 0">
    <h3>Список задач</h3>

    <task-item
      v-for="task in tasks"
      :task="task"
      :key="task.id"
    />
  </div>
  <h2 v-else class="empty">
    Список заданий пуст!
  </h2>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue'

export default {
  components: {TaskItem},
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.empty {
  color: red;
}
</style>