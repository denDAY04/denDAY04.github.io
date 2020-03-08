<template>
  <v-hover style="height: 100%; min-height: 100%;max-height: 100%">
    <template v-slot:default="{ hover }">
      <v-card @click="navigate">
        <v-img
          :src="backgroundImg"
          class="align-center"
          aspect-ratio="1"
          style="height: 100%; min-height: 100%;max-height: 100%"
        >
          <v-card-title class="main-panel-title justify-center text-uppercase">
           {{ title }}
          </v-card-title>
        </v-img>
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
            opacity="0.95"
          >
            {{ description }}
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: 'MainPanel',

  props: {
    backgroundImg: String,
    destination: String,
    description: {
      type: String,
      default: 'No description set',
    },
    title: String,
  },

  data() {
    return {
      hover: false,
    };
  },

  methods: {
    navigate() {
      if (this.destination) {
        this.$router.push(this.destination);
      } else {
        console.error('Destination prop not set');
      }
    },
  },
};
</script>

<style scoped>
.main-panel-title {
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 4em;
  outline-style: double;
  outline-color: black;
}
</style>
