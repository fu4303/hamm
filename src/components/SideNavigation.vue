<template>
  <v-navigation-drawer absolute dark>
    <v-list dense nav class="py-0">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Hmm</v-list-item-title>
          <v-list-item-subtitle>
            Halloween Movie Marathoner
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <router-link :to="{ name: item.page }">{{
              item.title
            }}</router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-divider></v-divider>
        <img
          src="../assets/tmdb.png"
          alt="Powered by The Movie Database"
          class="tmdb"
        />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideNav",
  data() {
    return {
      items: [
        { title: "Movies", icon: "mdi-view-dashboard", page: "home" },
        { title: "Marathon List", icon: "mdi-image", page: "marathon-list" },
        { title: "Calendar", icon: "mdi-help-box", page: "calendar" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.tmdb {
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 43.8px;
  display: block;
  height: auto;

  @media screen and (min-width: 800px) {
    width: 96.53px;
  }
}
</style>
