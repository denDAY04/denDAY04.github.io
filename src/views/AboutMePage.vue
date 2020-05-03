<template>
  <v-row align="center" justify="center">
    <v-col cols="12" lg="8" md="12">
      <v-card>
        <v-card-title class="justify-center text-uppercase">
          <h1 class="area-title">About Me</h1>
        </v-card-title>
        <hr>
        <v-card-text>
          <v-row align="center" class="mx-2" >
            <v-col cols="4">
              <v-img eager max-height="300" src="img/asj2.jpg" class="border"
                     ref="andreas stensig jensen"
              />
            </v-col>
            <v-col cols="8">
              <h2 class="mb-3">Andreas Stensig Jensen</h2>
              <p>
                My name is Andreas Stensig Jensen, and I am a {{ this.age }} year old software
                engineer; graduate of the
                <a href="https://www.dtu.dk/english" target="_blank">Technical University of Denmark</a>.
              </p>
              <p>
                I  was born and raised in Slagelse, Denmark, and am currently living near the Danish
                capital of Copenhagen, in the suburb called Hvidovre, where I share my appartment
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
              <h2 class="mb-3">Technology, engineering, science, & knowledge</h2>
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
              <v-img eager contain max-height="300" src="img/dtu-diplom.jpg" class="border"
                     alt="Bachelor of IT engineering graduation"
              />
            </v-col>
          </v-row>
          <v-row align="center" class="mx-2">
            <v-col cols="4">
              <v-img eager max-height="300" src="img/jrrtolkien.jpg" class="border"
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
                I am also a pasionate lover of wine and craft beer, but more so do I enjoy a good
                glass of whisk(e)y, of which I have a steadily growing collection.
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AboutMePage',
  computed: {
    age() {
      const diff = new Date() - new Date(1993, 10, 4);
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    },
  },
};
</script>

<style scoped>

</style>
