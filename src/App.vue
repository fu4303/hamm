<template>
  <v-app>
    <SideNav />
    <!-- Sizes your content based upon application components -->
    <v-content class="ml-256 blue-grey lighten-5">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-alert type="success"
          :dismissable="true"
          text
          :width="500"
          color="green"
          class="custom-1__abs"
          :value="show">
          {{alert}}
        </v-alert>
        <v-spacer></v-spacer>
        <!-- If using vue-router -->
        <router-view @show:message="handleDialog"></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from "@components/SideNavigation";
export default {
  components: {
    SideNav
  },
  data() {
    return {
      show: false,
      alert: ''
    };
  },
  methods: {
    handleDialog(payload) {
      this.show = true;
      this.alert = payload.text;
      setTimeout(() => {
        this.show = false;
        this.alert = '';
      }, payload.time * 1000)
    }
  }
};
</script>

<style lang="scss">
.ml-256 {
  margin-left: 256px;
}

.custom-1__abs {
  position: fixed !important;
  z-index: 50;
  margin-bottom: -58px !important;
  opacity: 0.95;
  margin: 0 auto;
  border: 1px #66BB6A solid !important;

  &.v-sheet.theme--dark.v-alert--text.green--text {
    background: #f1f8e9 !important;
  }
}

</style>
