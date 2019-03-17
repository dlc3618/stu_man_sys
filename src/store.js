import Vue from 'vue'
import Vuex from 'vuex'
import api from './api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stuList: [],
    page: 1,
    size: 8,
    showModel: false,
    editUser: {},
    total: 0,
    keyWord: '',
    oldKeyword: '',
  },
  mutations: {
    setStuList(state, list) {
      state.stuList = list
    },
    setShowModel(state, boolean) {
      state.showModel = boolean
    },
    setEditUser(state, user = {}){
      state.editUser = user
    },
    setTotal(state,cont) {
      state.total = cont
    },
    setKeyword(state, word='') {
      state.keyWord = word
    },
  },
  actions: {
    getStuList({commit, state, dispatch}, page = 1) {
      // api
      // // .findByPage(state.page, state.size)
      // .findByPage(page)
      // // .then(data => console.log(data))
      // .then(data => {
      //   console.log(data)
      //   commit('setStuList',  data.data.data.findByPage)
      //   commit('setTotal',  data.data.data.cont)})
      // .catch(err => console.log(err))
      if(state.keyWord !== '') {
        dispatch('searchStu',page)
      }else {
        return api
        .findByPage(page)
        .then(data => {
          commit('setStuList',  data.data.data.findByPage)
          commit('setTotal',  data.data.data.cont)
        })
        .catch(err => console.log(err))
      }
    },
    updateStu({commit, state}, data) {
      return api
      .updateStu(data)
      .then(msg => {
        if(msg.data.status == "success") {
          Object.assign(state.editUser, data)
          commit('setShowModel', false)
          commit('setEditUser')
          return msg.data.msg
        }else{
          return Promise.reject(msg.data.msg)
        }
      })
    },
    delBySno({ dispatch }, sNo) {
      api
        .delBySno(sNo)
        .then(() => {
          dispatch('getStuList')
          alert('删除成功')
        })
    },
    searchStu({ commit, state}, page) {
      api
        .stuSearch(state.keyWord, page)
        .then(data => {
          commit('setTotal', data.data.data.cont)
          commit('setStuList', data.data.data.searchList)
        })
    }
  }
})
