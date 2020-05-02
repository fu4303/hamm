<template>
  <div>
    <v-pagination
      dark
      :length="pages"
      :next-icon="nextIcon"
      :prev-icon="prevIcon"
      :page="currentPage"
      :value="currentPage"
      :total-visible="totalVisible"
      @input="getPage"
      @next="getNextPage"
    ></v-pagination>
  </div>
</template>

<script>
  export default {
    name: "MPagination",
    computed: {

    },
    data () {
      return {
        circle: false,
        disabled: false,
        nextIcon: 'mdi-chevron-right',
        prevIcon: 'mdi-chevron-left',
        totalVisible: 13,
      }
    },
    methods: {
      getPage(pageNumber) {
        this.$store.dispatch("page/getPage", pageNumber);
      },
      getNextPage() {
        if(this.currentPage <= this.pages) {
          this.$store.dispatch('page/getPage', this.currentPage + 1);
        }
      }
    },
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      pages: {
        type: Number,
        default: null
      }
    },
    mounted() {
      this.$store.dispatch('page/getPage', 1)
    }
  }
</script>

<style lang="scss" scoped>

</style>