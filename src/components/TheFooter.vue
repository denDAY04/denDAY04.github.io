<template>
<v-footer app>
  <v-spacer/>
  <span>
    &copy; {{ year }} Andreas Stensig Jensen
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
