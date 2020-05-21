<template>
  <v-row align="center" justify="center">
    <v-col cols="12" lg="8" md="12">
      <v-card>
        <v-card-title class="justify-center text-uppercase primary">
          <h1 class="area-title">About Me</h1>
        </v-card-title>
      </v-card>
      <v-row align="center" class="mx-2" >
        <v-col cols="4">
          <v-img eager max-height="300" src="img/asj2.jpg" :style="border"
                 ref="andreas stensig jensen"
          />
        </v-col>
        <v-col cols="8">
          <h2 class="mb-3">Andreas Stensig Jensen</h2>
          <p>
            My name is Andreas Stensig Jensen, and I am a {{ this.age }} year old software
            engineer; graduate of the
            <a href="https://www.dtu.dk/" target="_blank" class="link secondaryDark--text">
              Technical University of Denmark
            </a>.
          </p>
          <p>
            I  was born and raised in Slagelse, Denmark, and am currently living near the Danish
            capital of Copenhagen, in the suburb called Hvidovre, where I share my apartment
            with my girlfriend.
          </p>
          <p>
            I grew up with both my parents and two older sisters, and have
            been used to having dogs in the home all throughout my childhood years. Hence, my
            love for animals.
          </p>
          <p>
            I would classify myself as slightly introverted, but once I know people I enjoy
            their company, and I love sharing knowledge and having well-informed discussions.
            I also find satisfaction in problem-solving.
          </p>
        </v-col>
      </v-row>
      <v-row align="center" class="mx-2">
        <v-col cols="8">
          <h2 class="mb-3">Technology, engineering, science & knowledge</h2>
          <p>
            I have had a keen interest in mathematics and the natural sciences ever since
            grade-school, and my passion for technology and engineering really came into being
            during my high-school years. There I eventually set my focus on becoming a software
            engineer.
          </p>
          <p>
            Throughout all those years in school--and later at university--I developed
            a lingering interest in knowledge, especially within technology and many areas
            of physics. But even outside of these broad topics I am often intrigued by random
            knowledge of obscure subjects that will never be of any significant use, but
            nevertheless catches my interest and a desire to know more.
          </p>
          <p>
            Some people use the description of a <i>nerd</i> as a derogatory term, but to me
            the embodiment of a nerd is something to be proud of, and our contributions to
            society are immeasurable through the areas of engineering and the sciences. A
            contribution I hope to be a part of with my work as a software engineer.
          </p>
        </v-col>
        <v-col cols="4">
          <v-img eager contain max-height="300" src="img/dtu-diplom.jpg" :style="border"
                 alt="Bachelor of IT engineering graduation"
          />
        </v-col>
      </v-row>
      <v-row align="center" class="mx-2">
        <v-col cols="4">
          <v-img eager max-height="300" src="img/jrrtolkien.jpg" :style="this.border"
                 alt="Tolkien book collection"
          />
        </v-col>
        <v-col cols="8">
          <h2 class="mb-3">Hobbies</h2>
          <p>
            Ever since high-school, computers, and technology has been a big hobby
            of mine, and many hours have been spend on playing videos games and watching many
            different documentaries. I also make frequent use of different streaming services
            to follow major tech channels and their news outlets.
          </p>
          <p>
            Yet my biggest hobby is my fandom for J.R.R. Tolkien and his mythology evolving
            around Middle-Earth (of which Lord of the Rings and The Hobbit are part). I consider
            myself a massive fan, with my knowledge and interest going far beyond Lord of the
            Rings and even The Silmarillion; going so far as to find great insight in the
            literature research aspects of his unfinished works.
          </p>
          <p>
            I am also an enthusiast of wine and craft beer, but more so do I enjoy a good
            glass of whisk(e)y, of which I have a steadily growing collection.
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AboutPage',
  metaInfo() {
    return {
      title: 'About',
      link: [
        { rel: 'canonical', href: this.metadata.url },
      ],
      meta: [
        // OpenGraph data (Most widely used)
        { property: 'og:title', content: this.metadata.title },
        { property: 'og:url', content: this.metadata.url },

        // Twitter card
        { name: 'twitter:site', content: this.metadata.url },
        { name: 'twitter:title', content: this.metadata.title },

        // Google / Schema.org markup:
        { itemprop: 'name', content: this.metadata.title },
      ],
    };
  },
  data() {
    return {
      metadata: {
        title: 'About | Andreas Stensig portfolio',
        url: `${process.env.VUE_APP_WEBSITE}${process.env.BASE_URL}#/about`,
      },
    };
  },
  computed: {
    age() {
      const diff = new Date() - new Date(1993, 10, 4);
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    },
    border() {
      return `border: 3px solid ${this.$vuetify.theme.themes.light.primary}; border-radius: 10px`;
    },
  },
};
</script>

<style scoped>

</style>
