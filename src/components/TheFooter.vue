<template>
<v-footer app color="blue-grey darken-2">
  <v-spacer/>
  <span class="white--text">
    stensig.net &copy; {{ year }} Andreas Stensig
  </span>
  <v-spacer/>
</v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>

</style>
