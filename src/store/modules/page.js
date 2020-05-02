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
    },
    SET_PAGE(state, currentPage) {
      state.currentPage = currentPage;
    },
    SET_TOTAL_PAGES(state, totalPages) {
      state.totalPages = totalPages;
    },
    SET_TOTAL_RESULTS(state, totalResults) {
      state.totalResults = totalResults;
    }
  },
  actions: {
    async getPage({ commit }, pageNumber) {
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_TMDB_KEY}&language=en-US&with_genres=27&page=${pageNumber}`;
    const request = await fetch(URL);
    const data = await request.json();
    commit("SET_MOVIES", data.results);
    commit("SET_PAGE", pageNumber);
    commit("SET_TOTAL_PAGES", data.total_pages);
    commit("SET_TOTAL_RESULTS", data.total_results);
    }
  },
  getters: {
    getMovies: state => state.movies,
    getTotalResults: state => state.totalResults,
    getTotalPages: state => state.totalPages,
    getCurrentPage: state => state.currentPage
  }
};
