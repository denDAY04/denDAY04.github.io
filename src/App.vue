<template>
  <v-app>
    <NavBar/>
    <router-view class="view-container"/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .view-container {
    margin-top: 4em;
  }
</style>
