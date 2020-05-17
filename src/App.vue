<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <TheNavBar/>

    <v-content>
      <v-container fluid class="fill-height">
        <router-view/>
      </v-container>
    </v-content>

    <v-snackbar
      :timeout="snackTimeout"
      v-model="showSnackMsg"
      :color="snackColor"
      top
    >
      {{ snackMsg }}
      <v-btn @click.native="showSnackMsg = false">Close</v-btn>
    </v-snackbar>

    <v-dialog v-model="showWipDisclaimer" max-width="400">
      <v-card>
        <v-card-title class="headline">
          <v-icon style="padding-right: 5px">mdi-information-outline</v-icon>
          Website Under Construction
        </v-card-title>
        <v-card-text>
          The website is still being developed. Some areas are offline and visual design may change.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click.native="showWipDisclaimer = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <TheFooter/>
  </v-app>
</template>

<script>
import TheNavBar from './components/TheAppBar.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheFooter,
    TheNavBar,
  },
  methods: {
    displaySnackMsg(msgEvent) {
      this.snackMsg = msgEvent.msg;
      switch (msgEvent.type) {
        case 'W':
          this.snackColor = 'warning';
          break;
        case 'E':
          this.snackColor = 'error';
          break;
        default:
          this.snackColor = 'info';
      }
      this.showSnackMsg = true;
    },
  },
  mounted() {
    window.eventBus.$on('message', (msgEvent) => this.displaySnackMsg(msgEvent));
    document.title = 'stensig.net';
  },
  data() {
    return {
      showWipDisclaimer: false,
      showFeatureConstruction: false,
      showSnackMsg: false,
      snackMsg: '',
      snackColor: '',
      snackTimeout: 3000,
    };
  },
};
</script>

<!--suppress CssUnusedSymbol -->
<style>
  .area-title {
    font-family: Candara,sans-serif;
    font-weight: 400;
  }
  .clickable:hover {
    cursor: pointer;
  }
</style>
