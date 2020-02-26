<template>
  <div class="d-flex align-center">
    <div class="title">
      <router-link
        :to="{ name: 'Home' }"
        aria-label="Home"
        title="Home"
        class="nav-bar-link"
      >
        stensig.net
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <v-btn
      @click="switchLighting"
      icon
      title="Toggle dark-mode"
    >
      <v-icon>{{ lightModeIcon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'NavBarTitle',
  data() {
    return {
      lightMode: true,
    };
  },
  computed: {
    lightModeIcon() {
      return this.lightMode ? 'mdi-lightbulb-off' : 'mdi-lightbulb-on';
    },
  },
  methods: {
    switchLighting() {
      this.lightMode = !this.lightMode;
      this.$vuetify.theme.dark = !this.lightMode;
    },
  },
};
</script>

<style scoped>
  .title {
    text-transform: uppercase;
  }
  .nav-bar-link {
    text-decoration: none;
    color: inherit;
  }
</style>
