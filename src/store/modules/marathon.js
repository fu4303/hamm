import remove from 'lodash/remove';

export default {
  namespaced: true,
  state: {
    marathonList: [],
  },
  mutations: {
    ADD_ONE(state, movieID) {
      state.marathonList.push(movieId);
    },
    REMOVE_ONE(state, movieID) {
      state.marathonList.remove(movieID);
    }
  },
  actions: {}

}
