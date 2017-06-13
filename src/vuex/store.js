import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
  datas: [],
  checks: [false],
  curInput: ''
}

const mutations = {
  checkAll(state, event) {
    let isChecked = event.target.checked;
    state.checks = state.checks.map(function(check){
      return isChecked;
    });
  },
  addRow(state) {
    let row = {};
    state.title.forEach(function(key){
      row[key] = Math.floor(Math.random()*1000 + 1);
    });
    state.datas.push(row);
    state.checks.push(false);
  },
  delRows(state) {
    state.datas = state.datas.filter((data, index) => !state.checks[index+1]);
    state.checks = state.checks.filter((check, index) => !check);
    state.checks[0] = false;
  },
  showInp(state, inp) {
    state.curInput = inp;
  }
}
const actions = {
  initDatas({ commit }) {
    for (var i = 0; i < 10; i++) {
      commit('addRow');    
    };
  },
  checkAll({ commit }, event) {
    commit('checkAll', event);
  },
  addRow({ commit }) {
    commit('addRow');
  },
  delRows({ commit }) {
    commit('delRows');
  },
  refreshData({ commit, state }) {
    let l = state.datas.length;
    state.datas = [];
    state.checks = [false];
    for (var i = 0; i < l; i++) {
      commit('addRow');    
    };
  },
  showInp({ commit }, inp) {
    commit('showInp', inp);
  }
}
const getters = {
  title: state => {
    return state.title;
  },
  datas: state => {
    return state.datas;
  },
  checks: state => {
    return state.checks;
  },
  curInput: state => {
    return state.curInput;
  },
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})