<template>
  <v-app>
    <v-app-bar app color="#1BD698" fixed>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>RestCode</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/home">Home</v-btn>
        <v-btn text to="/restaurants">Restaurants</v-btn>
        <v-btn text to="/consultancies">Consultancies</v-btn>
        <v-btn text to="/plans">Plan</v-btn>
        <v-btn text to="/consultants/23">Profile</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
