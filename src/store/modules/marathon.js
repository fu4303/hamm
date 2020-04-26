import remove from 'lodash/remove';

export default {
  namespaced: true,
  state: {
    marathonList: [],
  },
  mutations: {
    ADD_ONE(state, movieID) {
      state.marathonList.push(movieID);
    },
    REMOVE_ONE(state, movieID) {
      remove(state.marathonList, movieID);
    },
    RESET(state) {
      state.marathonList = [];
    }
  },
  actions: {
    async addMovieToList({commit}, movieID) {
      commit('ADD_ONE', movieID);
    },
    async removeMovieFromList({commit}, movieID) {
      commit('REMOVE_ONE', movieID);
    },
    clear({commit}) {
      commit('RESET');
    }
  },
  getters: {
    getMarathonList: state => state.marathonList
  }
}
