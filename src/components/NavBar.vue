<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <NavBarTitle/>
    <v-spacer></v-spacer>
    <NavBarLinks/>
  </v-app-bar>
</template>

<script>
import NavBarLinks from './NavBarLinks.vue';
import NavBarTitle from './NavBarTitle.vue';

export default {
  name: 'NavBar',
  components: {
    NavBarTitle,
    NavBarLinks,
  },
};
</script>

<style scoped>

</style>
