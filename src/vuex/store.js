import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
  data: [],
  activeRowLow: 0,
  activeRowHigh: 10,
  onePageRows: 10,
  lastScrollTop: 0,
  checks: [false],
  activeInputPosition: [0, 0]
}

const mutations = {
  checkAll(state) {
    let isChecked = state.checks[0];
    state.checks = state.checks.map(function(check){
      return isChecked;
    });
  },
  initData(state, length) {
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let onePageRows = Math.ceil(windowHeight/30);
    let rangeHigh = onePageRows*3;
    state.onePageRows = onePageRows;
    for (var i = 0; i < length; i++) {
      let row = {};
      state.title.forEach(function(key){
        row[key] = Math.floor(Math.random()*1000 + 1);
      });
      state.data.push(row);
      state.checks.push(false);
    }
    state.activeRowLow = 0;
    state.activeRowHigh = rangeHigh;
  },
  updateActiveRow(state) {
    let scrollTop = document.body.scrollTop;
    if(state.lastScrollTop < scrollTop && (scrollTop > (state.activeRowLow + state.onePageRows*2)*30 + 40) && state.activeRowHigh < state.data.length) {
      state.activeRowLow += state.onePageRows;
      state.activeRowHigh += state.onePageRows;
    }
    if(state.lastScrollTop > scrollTop && (scrollTop < (state.activeRowLow + state.onePageRows)*30 + 40) && state.activeRowLow >= state.onePageRows) {
      state.activeRowLow -= state.onePageRows;
      state.activeRowHigh -= state.onePageRows;
    }
    state.lastScrollTop = scrollTop;
  },
  addRow(state) {
    let row = {};
    state.title.forEach(function(key){
      row[key] = Math.floor(Math.random()*1000 + 1);
    });
    state.data.push(row);
    state.checks.push(false);
  },
  delRows(state) {
    state.data = state.data.filter((data, index) => !state.checks[index+1]);
    state.checks = state.checks.filter((check, index) => !check);
    state.checks[0] = false;
  },
  showInput(state, inputPosition) {
    state.activeInputPosition = inputPosition;
  }
}
const actions = {
  refreshData({ commit, state }) {
    let l = state.data.length;
    state.data = [];
    state.checks = [false];
    for (var i = 0; i < l; i++) {
      commit('addRow');    
    };
  }
}
const getters = {
  marginTop(state) {
    return state.activeRowLow*30;
  },
  marginBottom(state) {
    return (state.data.length - state.activeRowHigh)*30;
  },
  activeData(state) {
    let activeData = state.data.filter(function(data, index){
      return (index >=state.activeRowLow && index < state.activeRowHigh);
    });
    return activeData;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})