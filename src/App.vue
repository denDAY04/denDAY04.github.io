<template>
  <v-app>
    <NavBar/>
    <v-content>
      <UnderConstruction/>
    </v-content>
  </v-app>
</template>

<script>
import UnderConstruction from './views/UnderConstruction.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    UnderConstruction,
  },

  data: () => ({
    //
  }),
};
</script>
