<template>
  <v-card
    class="mt-4 mx-auto elevation-0 movie--card"
    max-width="300">
    <v-img
      :src="`https://image.tmdb.org/t/p/w500/${this.poster}`"
      lazy-src="./images/no-poster.svg"
      class="movie--card br-8"
      position="center top"
    ></v-img>

    <section class="movie--info br-8 mx-4 white elevation-2">
      <v-card-subtitle>
        <span
          v-for="item in getGenres" :key="item"
          class="ma-1 caption blue-grey--text text--darken-4">
          {{item}}
        </span>
      </v-card-subtitle>
      <v-card-actions>
        <v-btn
          class="blue-grey lighten-5 blue-grey--text text--darken-5"
          text
          @click="addToMarathon({id, movieTitle})">
          <v-icon>mdi-plus</v-icon>
          Add
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          icon
          class="blue-grey lighten-5 blue-grey--text text--darken-5"
          @click="showDropdown">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
    </section>

    <v-expand-transition>
      <div v-if="show" class="dropdown blue-grey lighten-4">
        <v-card-text class="title black--text">
          {{ movieTitle }}
        </v-card-text>
        <v-card-text class="grey--text text--darken-4">
          {{summary}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import genresLookup from '@utils/movies';
export default {
  props: {
    poster: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      default: 0
    },
    isAdult: {
      type: Boolean,
      default: null
    },
    backgroundImage: {
      type: String,
      default: ""
    },
    movieTitle: {
      type: String,
      default: ""
    },
    genres: {
      type: Array,
      default: () => []
    },
    imdbRating: {
      type: Number,
      default: 0
    },
    summary: {
      type: String,
      default: ""
    },
    releaseDate: {
      type: String,
      default: ""
    }
  },
  computed: {
    getGenres() {
      const genres = this.genres.map(el => genresLookup(el));
      return genres.slice(0, 3);
    },
    posterImage() {
      this.poster !== null
        ? `https://image.tmdb.org/t/p/w500/${this.poster}`
        : './assets/no-poster.svg';
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    addToMarathon(movie) {
      this.$store.dispatch("marathon/addMovieToList", movie);
      this.$emit('movie:add');
    },
    showDropdown() {
      this.show = !this.show;
    }
  },
};
</script>

<style lang="scss" scoped>
.summary {
  position: relative;
}
.custom-wrap {
  --lh: 1.4rem;
  --max-lines: 4;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
}

.movie--card {
  position: relative;
  background: transparent !important;
}

.movie--info {
  position: relative;
  margin-top: -50px;
  background-color: #1e1e1e;
  z-index: 20;
}

.dropdown {
  position: absolute;
  top: 0;
  height: 100%;
  max-height: 450px;
  z-index: 15;
  opacity: .95;
}

.br-8 {
  border-radius: 8px !important;
}

.opacity {
  background: inherit;
  opacity: .8;
}
</style>
