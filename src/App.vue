<template>
  <v-app>
    <TheNavBar/>

    <v-content>
      <v-container fluid class="fill-height">
        <router-view/>
      </v-container>
    </v-content>

    <TheFooter/>
  </v-app>
</template>

<script>
import TheNavBar from './components/TheAppBar.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',

  components: {
    TheFooter,
    TheNavBar,
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
