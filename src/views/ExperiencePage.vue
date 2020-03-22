<template>
  <v-row style="height: 100%; min-height: 100%;max-height: 100%">
    <v-spacer/>
    <v-col cols="12" lg="8" md="12">
      <v-card>
        <v-card-title class="justify-center text-uppercase">
          <h1 class="area-title">Experience</h1>
        </v-card-title>
      </v-card>
      <v-card-text>
        <v-row>
          <v-switch
            @change="updateTimeline"
            v-model="showEMP"
            label="Employments"
            style="margin-right: 1em"
          />
          <v-switch
            @change="updateTimeline"
            v-model="showEDU"
            label="Educations"
            style="margin-right: 1em"
          />
          <v-switch
            @change="updateTimeline"
            v-model="showCC"
            label="Certificate courses"
          />
        </v-row>
        <v-timeline>
          <v-timeline-item
            v-for="exp in experiences"
            :key="exp.date + exp.title"
            color="deep-purple accent-2"
            large
            fill-dot
          >
            <span slot="opposite">{{ exp.date | dateFormat }}</span>
            <span
              slot="icon"
              :title="getTypeDescription(exp.type)"
              :class="'v-icon notranslate mdi theme--dark ' + getTypeIcon(exp.type)"
            />
            <v-card>
              <v-card-title class="blue-grey darken-4">
                <h3 class="title font-weight-light grow">{{ exp.title }}</h3>
                <a :href="exp.companyLink" target="_blank">
                  <v-avatar tile>
                    <v-img
                      :src="exp.companyLogo"
                      class="exp-company-logo"
                      :title="exp.company"
                      contain
                    />
                  </v-avatar>
                </a>
              </v-card-title>
              <v-card-text style="margin-top: 1em">
                {{ exp.description }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-col>
    <v-spacer/>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ExperiencePage',
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
      console.error(error);
      window.eventBus.$emit('message', { type: 'E', msg: 'Could not retrieve data' });
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
.exp-company-logo {
  margin-right: 1em;
  margin-left: 1em;
}
.exp-company-logo:hover {
  cursor: pointer;
}
</style>
