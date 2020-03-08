<template>
    <v-row
      align="stretch"
      align-content="stretch"
     style="height: 100%; min-height: 100%;max-height: 100%"
    >
      <v-col md="4" sm="12">
        <MainPanel
          title="Experiences"
          backgroundImg="/img/books.jpg"
          description="Employments, educations, and other professional courses"
        />
      </v-col>
      <v-col md="4" sm="12">
        <MainPanel
          title="Projects"
          backgroundImg="/img/code.jpg"
        />
      </v-col>
      <v-col md="4" sm="12">
        <MainPanel
          title="Personal"
          backgroundImg="/img/desk.jpg"
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
