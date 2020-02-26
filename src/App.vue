<template>
  <div id="app">
    <UnderConstruction/>
  </div>
</template>

<script>
import UnderConstruction from './views/UnderConstruction.vue';

export default {
  name: 'App',
  components: {
    UnderConstruction,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
