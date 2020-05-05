<template>
  <v-card
    class="mx-auto movie--card"
    max-width="300">
    <v-img
      :src="`https://image.tmdb.org/t/p/w500/${this.poster}`"
      position="center top"
      height="200px"
    ></v-img>

    <v-card-title>
      {{movieTitle}}
    </v-card-title>

    <v-card-subtitle>
      <v-chip
        v-for="item in getGenres" :key="item"
        class="ma-1 grey darken-3"
        small
        label>
        {{item}}
      </v-chip>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        text
        @click="addToMarathon({id, movieTitle})">
      Add to List
    </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="showDropdown">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-if="show" class="grey lighten-3 dropdown">
        <v-divider></v-divider>
        <v-card-text class="title black--text">
          {{ movieTitle }}
        </v-card-text>
        <v-card-text class="grey--text text--darken-4">
          {{summary}}
        </v-card-text>
        <v-btn
          icon
          @click="showDropdown">
          <v-icon class="grey--text text--darken-4 float-right">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
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
}

// .movie--information {
//   position: relative;

//   &h2 {
//     font-size: 18px;
//   }
// }

.dropdown {
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 50;
}
</style>
