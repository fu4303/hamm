<template>
  <section id="home">
    <div class="home">
      <section class="movie-flex-grid">
        <vue-card v-for="movie in movies" :key="movie.id"
        v-bind="movie" class="padding"
      />
      </section>
    </div>
  </section>
</template>

<script>
//import VueCard from "../components/VueCard";
//https://api.themoviedb.org/3/discover/movie?api_key=6f43a4908c72b00f71650f19f0a95881&language=en-US&with_genres=27
import VueCard from "../components/VueMovieCard";
export default {
  name: "home",
  components: {
    'vue-card': VueCard
  },
  data() {
    return {
      movies: [
      {
        id: 1,
        title: 'The Meg',
        year: '2018',
        poster: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg',
        plot: 'A deep sea submersible pilot revisits his past fears in the Mariana Trench, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.'
      }, {
        id: 2,
        title: 'The Nun',
        year: '2018',
        poster: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg',
        plot: 'When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover…'
      }, {
        id: 3,
        title: 'Hereditary',
        year: '2018',
        poster: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/4GFPuL14eXi66V96xBWY73Y9PfR.jpg',
        plot: 'When Ellen, the matriarch of the Graham family, passes away, her daughter\'s family begins to unravel cryptic and increasingly terrifying secrets about their ancestry. The more they discover, the more they find themselves…'
      }
      ]
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

