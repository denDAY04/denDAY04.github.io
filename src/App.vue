<template>
  <v-app>
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
          this.snackColor = 'orange darken-3';
          break;
        case 'E':
          this.snackColor = 'red darken-3';
          break;
        default:
          this.snackColor = 'purple darken-4';
      }
      this.showSnackMsg = true;
    },
  },
  mounted() {
    window.eventBus.$on('snackMsg', (msgEvent) => this.displaySnackMsg(msgEvent));
  },
  data() {
    return {
      showWipDisclaimer: true,
      showFeatureConstruction: false,
      showSnackMsg: false,
      snackMsg: '',
      snackColor: '',
      snackTimeout: 4000,
    };
  },
};
</script>

<style>

</style>
