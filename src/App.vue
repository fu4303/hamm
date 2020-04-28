<template>
  <v-app>
    <SideNav />
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from "@components/SideNavigation";
export default {
  components: {
    SideNav
  }
};
</script>

<style lang="scss"></style>
