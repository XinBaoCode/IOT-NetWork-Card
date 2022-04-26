import router from 'vue-router'

const ITagsViewState = () => {
  return {
    toolBarData: [], // 保存标签button的数组
    cacheView: [] // 保存需要缓存的数组
  }
}

const state = ITagsViewState()

const mutations = {
  SET_TOOL_DATA: (state, data) => {
    // 添加标签按钮，如果当前路由已经打开，则不重复添加
    const inToolBar = state.toolBarData.find(
      (item) => item.detail === data.detail
    )
    !inToolBar &&
      state.toolBarData.push({
        ...data
      })
  },
  SET_CACHE_VIEW: (state, data) => {
    if (state.cacheView.includes(data.componentName)) return
    state.cacheView.push(data.componentName)
  },
  CLEAR_TOOL_ITEMS: (state, detail) => {
    const idx = state.toolBarData.findIndex((item) => item.detail === detail)
    const isActive = router.app.$route.path === state.toolBarData[idx]['detail']
    const len = state.toolBarData.length - 1
    state.toolBarData.splice(idx, 1)(idx === len || isActive) &&
      router.push({
        path: state.toolBarData[state.toolBarData.length - 1]['detail']
      })
  },
  CLEAR_CACHE_VIEWS: (state, viewName) => {
    const idx = state.cacheView.findIndex((item) => item === viewName)
    state.cacheView.splice(idx, 1)
  }
}

const actions = {
  // commitTooBar
  commitToolBar({ commit }, data) {
    commit('SET_TOOL_DATA', data)
    commit('SET_CACHE_VIEW', data)
  },

  // clearToolBar
  clearToolBar({ commit }, data) {
    commit('CLEAR_TOOL_ITEM', data.detail)
  },

  // clearCache
  clearCache({ commit }, data) {
    commit('CLEAR_CACHE_VIEW', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
