<template>
  <v-navigation-drawer :fixed="true" class="blue-grey darken-4">
    <v-list dense nav class="py-0">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">Hmm</v-list-item-title>
          <v-list-item-subtitle class="subtitle-2">
            Halloween Movie Marathoner
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item-group active-class="blug-grey lighten-4">
        <v-list-item v-for="item in items" :key="item.title" link active-class="blug-grey lighten-4">
          <v-list-item-icon>
            <v-icon class="blue-grey--text text--lighten-1">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link
                :to="{ name: item.page }"
                class="subtitle-1 blue-grey--text text--lighten-5 no-link">
                {{ item.title}}
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
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
        { title: "Marathon List", icon: "mdi-view-list", page: "marathon-list" },
        { title: "Calendar", icon: "mdi-calendar-today", page: "calendar" }
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

.no-link {
  text-decoration: none;
}

.primary {
  background: yellow;
}
</style>
