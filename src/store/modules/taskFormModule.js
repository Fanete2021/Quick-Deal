export const taskFormModule = {
  state: {
    visibleForm: false,
    isEditForm: false,
    editableTask: {}
  },
  mutations: {
    setVisibleForm(state, visibleForm) {
      state.visibleForm = visibleForm;
    },
    setIsEditForm(state, isEdit) {
      state.isEditForm = isEdit;
      if (!isEdit) {
        state.editableTask = {}
      }
    },
    setEditableTask(state, task) {
      state.editableTask = task;
    }
  },
  namespace: true
};