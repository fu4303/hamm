<template>
  <div>
  <div class="d-flex flex-wrap space-between">
    <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :poster="movie.poster_path"
      :id="movie.id"
      :isAdult="movie.adult"
      :backgroundImage="movie.backdrop_image"
      :movieTitle="movie.title"
      :genres="movie.genre_ids"
      :imdbRating="movie.vote_average"
      :summary="movie.overview"
      :releaseDate="movie.release_date"
      class="mb-8"
    />
  </div>
  <MPagination
    :currentPage="currentPage"
    :pages="pages" />
  </div>
</template>

<script>
import MovieCard from "@components/MovieCard";
import MPagination from "@components/MoviePagination";
export default {
  name: "home",
  components: {
    MovieCard,
    MPagination
  },
  computed: {
    movies() {
      return this.$store.getters['page/getMovies'];
    },
    pages() {
      return this.$store.getters['page/getTotalPages'];
    },
    currentPage() {
      return this.$store.getters['page/getCurrentPage'];
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
}
.home {
  padding: 30px;
}

.movie-flex-grid {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.padding {
  margin-top: 1rem;
}
</style>
