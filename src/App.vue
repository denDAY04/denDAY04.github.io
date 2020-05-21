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
      <v-btn text @click.native="showSnackMsg = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
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
  metaInfo() {
    return {
      title: 'Welcome',
      titleTemplate: `%s | ${process.env.VUE_APP_TITLE}`,
      meta: [
        { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
        { 'http-equiv': 'content-type', content: 'text/html' },

        { charset: 'utf-8' },

        { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
        { name: 'application-name', content: 'stensig.net' },
        { name: 'author', content: 'Andreas Stensig' },
        { name: 'keywords', content: 'portfolio, Andreas Stensig, Andreas Stensig Jensen, stensig, denDAY04, software engineering, DTU, Denmark, Danish' },
        { name: 'description', content: this.metadata.description },

        { property: 'og:image', content: this.metadata.image },
        { property: 'og:site_name', content: 'stensig.net' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: this.metadata.description },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:image:src', content: this.metadata.image },
        { name: 'twitter:description', content: this.metadata.description },
        { name: 'twitter:creator', content: '@denDAY04' },

        { itemprop: 'image', content: this.metadata.image },
        { itemprop: 'description', content: this.metadata.description },
      ],
    };
  },
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
  },
  data() {
    return {
      metadata: {
        description: process.env.VUE_APP_DESC,
        image: `${process.env.VUE_APP_WEBSITE}/${process.env.VUE_APP_IMAGE}`,
      },
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
    color: white;
    font-family: Candara,sans-serif;
    font-weight: 400;
  }
  .clickable:hover {
    cursor: pointer;
  }
  .link {
    text-decoration: none;
  }
</style>
