<template>
  <v-container class="d-flex flex-wrap space-between">
    <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :poster="movie.poster_path"
      :id="movie.id"
      :isAdult="movie.adult"
      :backgroundImage="movie.backdrop_image"
      :movieTitle="movie.title"
      :genres="movie.genres"
      :imdbRating="movie.vote_average"
      :summary="movie.overview"
      :releaseDate="movie.release_date"
    />
  </v-container>
</template>

<script>
import movies from "../movies-test";
import MovieCard from "@components/MovieCard";
export default {
  name: "home",
  data() {
    return {
      movies,
      currentPage: 1
    };
  },
  components: {
    MovieCard
  },
  created() {
    this.$store.dispatch("page/getPage", this.currentPage);
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
