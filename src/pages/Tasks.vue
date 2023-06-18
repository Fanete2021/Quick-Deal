<template>
  <div>
    <h1>Страница с задачами</h1>
    <my-button
      @click="createTaskHandler"
      class="creator"
    >
      Создать задачу
    </my-button>

    <my-modal
      :show="visibleForm"
      @update:visible="setModalVisible(false)"
    >
      <task-form />
    </my-modal>

    <task-list
      :tasks="tasks"
    />
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';
import {mapState, mapMutations} from 'vuex';

export default {
  components: {
    TaskForm, TaskList
  },
  methods: {
    ...mapMutations({
      setModalVisible: 'setVisibleForm',
      setIsEdit: 'setIsEditForm'
    }),
    createTaskHandler() {
      this.setIsEdit(false);
      this.setModalVisible(true);
    }
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.tasks,
      visibleForm: state => state.taskForm.visibleForm
    }),
  }
}
</script>

<style lang="scss">
.creator {
  margin: 15px 0;
}
</style>
