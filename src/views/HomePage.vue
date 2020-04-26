<template>
  <v-row align="center" justify="center">

      <v-col cols="2" class="text-center">
        <v-avatar size="180">
          <v-img src="img/asj.jpg"/>
        </v-avatar>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> Andreas Stensig</v-list-item-title>
            <v-list-item-subtitle>
              MSc in Engineering <ins title="Computer Science and Engineering">(CSE)</ins>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Bachelor of IT Engineering
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>

      <v-col cols="4">
        <v-card raised>
          <v-card-title>Welcome to STENSIG.NET</v-card-title>
          <v-card-subtitle>
            <i>Portfolio of a Software Engineer</i>
          </v-card-subtitle>
          <v-card-text>
            <p>
              On this website you can explore my professional experiences and significant projects
              I have worked on. Click the banners below.
            </p>
            <p>
              You can also found out more <a @click="gotoAboutMe()">about me</a>.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col lg="8" md="12" cols="12">
        <v-carousel height="400" cycle :show-arrows="showArrows" class="border">
          <v-carousel-item v-for="(page, i) in pages" :key="i">
            <v-img height="100%" :src="backgroundImage(page)">
              <v-row
                class="fill-height clickable"
                align="center"
                justify="center"
                @click="navigateTo(page)"
              >
                <div
                  class="main-panel-title justify-center text-uppercase"
                  :style="fontSize"
                >
                  {{ page.title }}
                </div>
              </v-row>
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>

  </v-row>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      showArrows: false,
      pages: [
        {
          title: 'Experience',
          target: 'ExpPage',
          background: 'books.jpg',
        },
        {
          title: 'Projects',
          target: 'ProjectsPage',
          background: 'code.jpg',
        },
      ],
    };
  },
  methods: {
    backgroundImage(page) {
      return `img/${page.background}`;
    },
    navigateTo(page) {
      this.$router.push({ name: page.target });
    },
    gotoAboutMe() {
      // todo implement about me page (issue#5)
      window.eventBus.$emit('message', { type: 'W', msg: 'Under construction' });
    },
  },
  computed: {
    fontSize() {
      if (this.$vuetify.breakpoint.xs) {
        return 'font-size: 2em';
      }
      if (this.$vuetify.breakpoint.lg) {
        return 'font-size: 3em';
      }
      return 'font-size: 4em';
    },
  },
};
</script>

<style scoped>
  .main-panel-title {
    font-family: "Arial Black", Gadget, sans-serif;
    color: lavender;
    text-shadow: 2px 2px 2px black;
  }
  .border {
    border: 3px solid darkslategrey;
    border-radius: 10px;
  }
</style>
