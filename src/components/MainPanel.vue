<template>
  <v-card>
    <v-img
      :src="backgroundImg"
      class="align-center"
    >
      <v-card-title class="main-panel-title justify-center text-uppercase">
        {{ title }}
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'MainPanel',
  props: {
    title: String,
    backgroundImg: String,
    description: String,
    destination: String,
  },
};
</script>

<style scoped>
.main-panel-title {
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 4em;
}
</style>
