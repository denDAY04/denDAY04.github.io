<template>
  <v-row style="height: 100%; min-height: 100%;max-height: 100%">
    <v-spacer/>
    <v-col cols="12" lg="8" md="12">
      <v-card>
        <v-card-title class="justify-center text-uppercase primary">
          <h1 class="area-title white--text">Experience</h1>
        </v-card-title>
      </v-card>
      <v-row>
        <v-switch
          @change="updateTimeline"
          v-model="showEMP"
          label="Employment"
          prepend-icon="mdi-account-tie-outline"
          class="mr-10"
        />
        <v-switch
          @change="updateTimeline"
          v-model="showEDU"
          label="Education"
          prepend-icon="mdi-school-outline"
          class="mr-10"
        />
        <v-switch
          @change="updateTimeline"
          v-model="showCC"
          label="Certificate courses"
          prepend-icon="mdi-certificate-outline"
          class="mr-10"
        />
      </v-row>
      <v-timeline>
        <v-timeline-item
          v-for="exp in experiences"
          :key="exp.date + exp.title"
          color="primaryLight"
          large
          fill-dot
        >
            <span slot="opposite" class="headline">
              {{ exp.date | dateFormat }}
            </span>
          <span
            slot="icon"
            :title="getTypeDescription(exp.type)"
            :class="'v-icon notranslate mdi ' + getTypeIcon(exp.type)"
          />
          <ExperienceItem :item="exp"/>
        </v-timeline-item>
      </v-timeline>
    </v-col>
    <v-spacer/>
  </v-row>
</template>

<script>
import axios from 'axios';
import ExperienceItem from '../components/ExperienceItem.vue';

export default {
  name: 'ExperiencePage',
  components: { ExperienceItem },
  data() {
    return {
      experiences: [],
      fetchedExp: [],
      showEDU: true,
      showEMP: true,
      showCC: true,
    };
  },
  async created() {
    const vm = this;
    axios.get('data/experiences.json').then((response) => {
      vm.fetchedExp = response.data.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
      });
      vm.updateTimeline();
    }).catch((error) => {
      window.eventBus.$emit('message', { type: 'E', msg: `Error: ${error}` });
    });
  },
  methods: {
    getTypeIcon(expType) {
      switch (expType) {
        default:
          return '';
        case 'EDU':
          return 'mdi-school-outline';
        case 'EMP':
          return 'mdi-account-tie-outline';
        case 'CC':
          return 'mdi-certificate-outline';
      }
    },
    getTypeDescription(expType) {
      switch (expType) {
        default:
          return 'No type';
        case 'EDU':
          return 'Education';
        case 'EMP':
          return 'Employment';
        case 'CC':
          return 'Certificate course';
      }
    },
    updateTimeline() {
      const vm = this;
      vm.experiences = [];
      vm.fetchedExp.forEach((exp) => {
        if ((exp.type === 'EMP' && vm.showEMP)
          || (exp.type === 'EDU' && vm.showEDU)
          || (exp.type === 'CC' && vm.showCC)) {
          vm.experiences.push(exp);
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
