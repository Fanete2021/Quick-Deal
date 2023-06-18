<template>
  <form @submit.prevent>
    <h4 v-if="isEdit">Редактирование поста</h4>
    <h4 v-else>Создание поста</h4>

    <my-input
      placeholder="Название"
      type="text"
      v-model="task.title"
    />

    <my-input
      placeholder="Описание"
      type="text"
      v-model="task.body"
    />

    <my-button
      v-if="isEdit"
      class="send"
      @click="changeTaskHandler"
    >
      Сохранить
    </my-button>
    <my-button
      v-else
      class="send"
      @click="createTaskHandler"
    >
      Создать
    </my-button>
  </form>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  data() {
    return {
      task: {
        id: Date.now(),
        title: '',
        body: ''
      },
      isEdit: false,
      editableTask: null
    }
  },
  methods: {
    ...mapMutations({
      setVisibleForm: 'setVisibleForm',
      addTask: 'addTask',
      changeTask: 'changeTask',
    }),
    resetStates() {
      this.task = {
        id: Date.now(),
        title: '',
        body: ''
      };
      this.setVisibleForm(false);
    },
    createTaskHandler() {
      this.addTask(this.task);
      this.resetStates();
    },
    changeTaskHandler() {
      this.changeTask(this.task);
      this.resetStates();
    },
  },
  created() {
    this.editableTask = this.$store.state.taskForm.editableTask;
    this.isEdit = this.$store.state.taskForm.isEditForm;
  },
  watch: {
    isEdit(newValue) {
      this.task = newValue
        ? {
          id: this.editableTask.id,
          title: this.editableTask.title,
          body: this.editableTask.body
        }
        : {
          id: Date.now(),
          title: '',
          body: ''
        };
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
}

.send {
  align-self: flex-end;
  margin-top: 15px
}
</style>