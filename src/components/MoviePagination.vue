<template>
  <div>
    <v-pagination
      light
      color="blue-grey lighten-2"
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
        to: '#top'
      }
    },
    methods: {
      getPage(pageNumber) {
        if(this.currentPage <= this.pages) {
          this.$store.dispatch("page/getPage", pageNumber);
          this.$router.push({name: 'home', query: { page: pageNumber }});
        }
      },
      getNextPage() {
        if(this.currentPage <= this.pages) {
          const currentPage = this.currentPage + 1;
          this.$store.dispatch('page/getPage', currentPage);
          this.$router.push({name: 'home', query: { page: currentPage }});
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