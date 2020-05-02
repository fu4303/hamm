<template>
  <v-card
    class="mx-auto"
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
        class="ma-1 orange darken-3"
        small
        label>
        {{item}}
      </v-chip>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn text>Add to List</v-btn>

      <v-btn
        color="purple"
        text>
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="showDropdown">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-if="show">
        <v-divider></v-divider>
        <v-card-text>
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
      return this.genres.map(el => genresLookup(el));
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    addToMarathon(id) {
      this.$store.commit("addMovieToList", id);
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

// .movie--card {
//   display: flex;
//   flex-direction: row;
//   max-width: 32%;
//   background: #fff;
//   color: #333;
// }

// .movie--information {
//   position: relative;

//   &h2 {
//     font-size: 18px;
//   }
// }
</style>
