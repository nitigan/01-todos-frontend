import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    REMOVE_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    CHANGE_COMPLETED (state, payload) {
      state.todos[payload.index].completed = payload.status
    }
  },
  actions: {
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    removeTodos ({commit}, index) {
      commit('REMOVE_TODO', index)
    },
    changeCompleted ({commit}, payload) {
      commit('CHANGE_COMPLETED', payload)
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
