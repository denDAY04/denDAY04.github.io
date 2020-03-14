<template>
    <v-row
      align="stretch"
      align-content="stretch"
      style="height: 100%; min-height: 100%;max-height: 100%"
    >
      <v-col lg="4" md="12" cols="12">
        <MainPanel
          title="Experience"
          backgroundImg="/img/books.jpg"
          description="Timeline of my employments, educations, and other professional courses"
          destination="Exp"
        />
      </v-col>
      <v-col lg="4" md="12" cols="12">
        <MainPanel
          title="Projects"
          backgroundImg="/img/code.jpg"
          description="Explore the projects I have worked on - professionally and as hobbies"
        />
      </v-col>
      <v-col lg="4" md="12" cols="12">
        <MainPanel
          title="Personal"
          backgroundImg="/img/desk.jpg"
          description="Discover who I am"
        />
      </v-col>
    </v-row>
</template>

<script>
import MainPanel from '../components/MainPanel.vue';

export default {
  name: 'HomePage',
  components: {
    MainPanel,
  },
};
</script>

<style scoped>

</style>
