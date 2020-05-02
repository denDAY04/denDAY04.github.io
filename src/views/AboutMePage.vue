<template>
  <v-row align="center" justify="center">
    <v-col cols="12" lg="8" md="12">
      <v-card>
        <v-card-title class="justify-center text-uppercase">
          <h1 class="area-title">About Me</h1>
        </v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-2" >
            <v-col cols="4">
              <v-img max-height="300" src="img/asj2.jpg" class="border"/>
            </v-col>
            <v-col cols="8">
              <h2 class="mb-3">Andreas Stensig Jensen</h2>
              <p>
                My name is Andreas Stensig Jensen, and I am a {{ this.age }} year old software
                engineer; graduate of the Technical University of Denmark.
              </p>
              <p>
                I  was born and raised in Slagelse, Denmark, and am currently living near the Danish
                capital of Copenhagen, in the suburb called Hvidovre, where I share my appartment
                with my girlfriend.
              </p>
              <p>
                In my childhood home I grew up with both my parents and two older sisters, and have
                been used to having dogs in the home all throughout my childhood years. Hence, my
                love for animals.
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
              <v-img contain max-height="300" src="img/dtu-diplom.jpg" class="border"/>
            </v-col>
          </v-row>
          <v-row align="center" class="mx-2">
            <v-col cols="4">
              <v-img max-height="300" src="img/jrrtolkien.jpg" class="border"/>
            </v-col>
            <v-col cols="8">
              <h2>Hobbies</h2>
              <p>What do I spend my spare-time on?</p>
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
