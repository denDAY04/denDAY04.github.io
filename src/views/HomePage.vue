<template>
  <v-row align="center" justify="center">

    <v-col cols="2" class="text-center">
      <v-avatar size="180">
        <v-img src="img/asj.jpg"/>
      </v-avatar>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Andreas Stensig</v-list-item-title>
          <v-list-item-subtitle>
            MSc in Engineering (<ins title="Computer Science and Engineering">CSE</ins>)
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            Bachelor of Engineering (<ins title="Information Technology">IT</ins>)
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>

    <v-col cols="4">
      <v-card raised color="backgroundLight">
        <v-card-title>Welcome to STENSIG.NET</v-card-title>
        <v-card-subtitle>
          <i>Portfolio of a Software Engineer</i>
        </v-card-subtitle>
        <v-card-text>
          <p>
            On this website you can explore my professional experiences and the significant
            projects I have worked on. Simply click the banners below.
          </p>
          <p>
            You can also found out more
            <a @click="gotoAboutMe()" class="secondaryDark--text">about me</a>.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col lg="8" md="12" cols="12">
      <v-carousel height="400" cycle :show-arrows="showArrows" :style="border">
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
  metaInfo() {
    return {
      title: 'Home',
      link: [
        { rel: 'canonical', href: this.metadata.url },
      ],
      meta: [
        // OpenGraph data (Most widely used)
        { property: 'og:title', content: this.metadata.title },
        { property: 'og:url', content: this.metadata.url },

        // Twitter card
        { name: 'twitter:title', content: this.metadata.title },

        // Google / Schema.org markup:
        { itemprop: 'name', content: this.metadata.title },
      ],
    };
  },
  data() {
    return {
      metadata: {
        title: 'Home | Andreas Stensig portfolio',
        url: `${process.env.VUE_APP_WEBSITE}${process.env.BASE_URL}#/`,
      },
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
      this.$router.push({ name: 'AboutPage' });
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
    border() {
      return `border: 3px solid ${this.$vuetify.theme.themes.light.primary}; border-radius: 10px`;
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
</style>
