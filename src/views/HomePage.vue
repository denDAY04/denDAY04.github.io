<template>
    <v-row
      align="stretch"
      align-content="stretch"
      no-gutters>
      <v-col md="4" sm="12">
        <MainPanel
          title="Experiences"
          backgroundImg="/img/group.jpg"
        />
      </v-col>
      <v-col md="4" sm="12">
        <MainPanel
          title="Projects"
          backgroundImg="/img/group.jpg"
        />
      </v-col>
      <v-col md="4" sm="12">
        <MainPanel
          title="Personal"
          backgroundImg="/img/group.jpg"
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
