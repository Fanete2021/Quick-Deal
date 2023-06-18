<template>
  <div class="task">
    <div>
      <div><strong>Название:</strong> {{ task.title }}</div>
      <div><strong>Описание:</strong> {{ task.body }}</div>
    </div>

    <div class="task__btns">
      <my-button
        class="btns__delete"
        @click="deleteTask(task)"
      >
        Удалить
      </my-button>

      <my-button
        class="btns__edit"
        @click="editTaskHandler"
      >
        Редактировать
      </my-button>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      deleteTask: 'deleteTask',
      setIsEditForm: 'setIsEditForm',
      setEditableTask: 'setEditableTask',
      setVisibleForm: 'setVisibleForm'
    }),
    editTaskHandler() {
      this.setIsEditForm(true);
      this.setEditableTask(this.task);
      this.setVisibleForm(true);
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task__btns {
  .btns__delete {
    border-color: red;

    &:hover {
      background: rgba(255, 0, 0, 0.2);
    }
  }

  .btns__edit {
    border-color: #a29e34;

    &:hover {
      background: rgba(162, 158, 52, 0.2);
    }
  }

  *:not(:first-child) {
    margin-left: 10px;
  }
}
</style>