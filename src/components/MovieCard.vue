<template>
  <v-card max-width="344" class="mx-auto" dark>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ movieTitle }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ genres }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      :src="`https://image.tmdb.org/t/p/w500/${this.poster}`"
      position="top center"
      height="194"
    ></v-img>

    <v-card-text class="summary">
      <p class="custom-wrap">{{ summary }}...</p>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="deep-purple accent-4" @click="addToMarathon(id)">
        Add to List
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
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
  methods: {
    addToMarathon(id) {
      this.$store.commit("addMovieToList", id);
    }
  }
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
</style>
