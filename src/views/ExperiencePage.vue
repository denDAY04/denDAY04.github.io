<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-timeline>
            <v-timeline-item v-for="project in projects" :key="project.id" large>
              <v-card>
                <v-card-title>
                  {{ project.title }}
                </v-card-title>
                <v-card-subtitle>
                  {{ project.company }}
                </v-card-subtitle>
                <v-card-text>
                  {{ project.description }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DataService from '../services/dataService';

export default {
  name: 'ExperiencePage',
  data() {
    return {
      projects: {},
    };
  },
  async created() {
    this.projects = await DataService.getProjects();
  },
};
</script>

<style scoped>

</style>
