export default {
  namespaced: true,
  state: {
    currentPage: null,
    totalPages: null,
    totalResults: null,
    movies: []
  },
  mutations: {
    SET_MOVIES(state, allMovies) {
      state.movies = allMovies;
    }
  },
  actions: {
    async getPage({ commit }) {
      // const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_TMDB_KEY}&language=en-US&with_genres=27`;
      // const request = await fetch(URL);
      // const data = await request.json();
      // commit("SET_MOVIES", data.results);
    }
  },
  getters: {
    getMovies: state => state.movies
  }
};
