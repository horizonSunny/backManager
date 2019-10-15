const app = {
  state: {
    saveComponent: []
  },
  mutations: {
    // 存储保活的组件
    SET_SAVE_COMP: (state, component) => {
      state.saveComponent.push(component)
    },
    // 删除保活的组件
    DEL_SAVE_COMP: (state, component) => {
      // state.saveComponent.push(component)
      const index = state.saveComponent.findIndex(item => {
        return item === component
      })
      console.log('jhahashdashdas_', index)
      state.saveComponent.splice(index, 1)
      console.log('state.saveComponent_', state.saveComponent)
    }
  },
  actions: {
    saveComponent({ commit }, component) {
      commit('SET_SAVE_COMP', component)
    },
    deleteComponent({ commit }, component) {
      commit('DEL_SAVE_COMP', component)
    }
  }
}
export default app
