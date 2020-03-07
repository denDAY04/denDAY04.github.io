<template>
  <v-app-bar app>
    <TheAppBarTitle/>
    <v-spacer></v-spacer>
    <TheAppBarLinks/>
  </v-app-bar>
</template>

<script>
import TheAppBarLinks from './TheAppBarLinks.vue';
import TheAppBarTitle from './TheAppBarTitle.vue';

export default {
  name: 'TheAppBar',
  components: {
    TheAppBarTitle,
    TheAppBarLinks,
  },
};
</script>

<style scoped>

</style>
