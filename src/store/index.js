import Vue from 'vue'
import Vuex from 'vuex'
import {taskModule} from '@/store/modules/taskModule';
import {taskFormModule} from '@/store/modules/taskFormModule';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasks: taskModule,
    taskForm: taskFormModule
  }
})
