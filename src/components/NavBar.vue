<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <span class="title">stensig.net</span>
    </div>
    <v-spacer></v-spacer>
    <NavBarLinks/>
  </v-app-bar>
</template>

<script>
import NavBarLinks from './NavBarLinks.vue';

export default {
  name: 'NavBar',
  components: {
    NavBarLinks,
  },
};
</script>

<style scoped>
.title {
  text-transform: uppercase;
}
</style>
