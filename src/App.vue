<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Tutorials Client</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <sales></sales>
    </v-main>
  </v-app>
</template>

<script>


import Sales from "@/components/sales";
export default {
  name: 'App',

  components: {
    Sales

  },

  data: () => ({
    //
  }),
};
</script>
