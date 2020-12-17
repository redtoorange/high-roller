<template>
  <v-app>
    <v-app-bar
      app
      color="blue darken-3"
      dark
    >
        <v-toolbar-title>
            40K - High Roller
        </v-toolbar-title>
    </v-app-bar>

    <v-main>
        <v-container>
            <router-view></router-view>
        </v-container>
    </v-main>
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
