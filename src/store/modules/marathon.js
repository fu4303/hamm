
function addDays(date, days) {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}

export default {
  namespaced: true,
  state: {
    marathonList: [],
    moviesLeft: 31,
    events: [],
    startDate: new Date(new Date().getFullYear(), 9, 1)
  },
  mutations: {
    ADD_ONE(state, movieID) {
      state.marathonList.push(movieID);
    },
    REMOVE_ONE(state, movieID) {
      state.marathonList.splice(state.marathonList.findIndex(({id}) => id === movieID), 1);
    },
    RESET(state) {
      state.marathonList = [];
      state.events = [];
    },
    UPDATE_MOVIE_COUNT(state, type) {
      if(type === 'add' && state.moviesLeft >= 1) {
        state.moviesLeft -= 1;
      }
      if(type === 'remove') {
        state.moviesLeft += 1;
      }
    },
    ADD_TO_CALENDAR(state, movie) {
      state.events.push(movie);
    },
    REMOVE_FROM_CALENDAR(state, movie) {
      state.events.splice(state.events.findIndex(({id}) => movie.id), 1);
    },
    UPDATE_NEXT_DATE(state, date) {
      state.startDate = date;
    }
  },
  actions: {
    async addMovieToList({commit, state}, movieID) {
      if(state.moviesLeft > 0) {
        commit('ADD_ONE', movieID);
        commit('UPDATE_MOVIE_COUNT', 'add');

        const date = state.events.length <= 0
          ? addDays(state.startDate, 0)
          : addDays(state.startDate, 1);
        commit('UPDATE_NEXT_DATE', date);
        
        commit('ADD_TO_CALENDAR', {
          name: movieID.movieTitle, 
          start: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        })
      }
    },
    async removeMovieFromList({commit, state}, movieID) {
      commit('REMOVE_ONE', movieID);
      if(state.moviesLeft <= 31) {
        commit('UPDATE_MOVIE_COUNT', 'remove')
        commit('REMOVE_FROM_CALENDAR', movieID);
      }
    },
    clear({commit}) {
      commit('RESET');
    }
  },
  getters: {
    getMarathonList: state => state.marathonList,
    getMoviesLeft: state => state.moviesLeft,
    getCalendarEvents: state => state.events
  }
}
