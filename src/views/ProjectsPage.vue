<template>
  <v-row style="height: 100%; min-height: 100%;max-height: 100%">
    <v-spacer/>
    <v-col cols="12" lg="8" md="12">
      <v-card>
        <v-card-title class="justify-center text-uppercase">
          <h1 class="area-title">Projects</h1>
        </v-card-title>
      </v-card>
      <v-card-text>
        <v-combobox
          v-model="skillsQuery"
          :items="skillsList"
          label="Filter projects by skills"
          class="mb-n10"
          multiple
          clearable
          chips
          deletable-chips
          @change="filterSkills"
        ></v-combobox>
      </v-card-text>
      <v-card-text>
        <v-card
          v-for="project in displayProjects"
          :key="project.title"
          class="my-10"
          raised
        >
          <v-card-title class="blue-grey darken-4">
            {{ project.title }}
          </v-card-title>
          <v-card-subtitle class="mt-2 overline">
            {{ project.affiliate }} project
          </v-card-subtitle>
          <v-card-text>
            {{ project.description}}
          </v-card-text>
          <v-card-actions v-if="projectHasLinks(project)" class="mt-n3">
            <v-btn
              v-for="link in project.links" :key="link.label"
              color="teal lighten-2"
              @click="openProjectLink(link)"
              text
            >
              {{ link.label }}
            </v-btn>
          </v-card-actions>
          <v-divider/>
          <v-card-text>
            <v-icon class="mr-2" title="Role">mdi-shield-account</v-icon>
            <span class="font-weight-thin">{{ printRoles(project) }}</span>

            <v-icon class="mx-2" title="Year">mdi-clock-outline</v-icon>
            <span class="font-weight-thin">{{ printTime(project) }}</span>
          </v-card-text>
          <v-divider/>
          <v-card-text>
            <v-chip-group column>
              <v-chip
                v-for="skill in project.skills"
                :key="skill"
                @click="addQueryFilter(skill)"
              >
                {{ skill }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-col>
    <v-spacer/>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: [],
      skillsQuery: [],
      skillProjectsMap: {},
      filteredProjectKeys: [],
      skillsList: [],
    };
  },
  async created() {
    const vm = this;
    axios.get('data/projects.json').then((response) => {
      vm.projects = response.data.sort((a, b) => {
        if (a.start > b.start) return 1;
        if (a.start < b.start) return -1;

        if (a.end > b.start) return 1;
        if (a.start < b.end) return -1;

        return 0;
      }).reverse();

      vm.projects.forEach((p) => {
        p.skills.sort();
        p.role.sort();
        p.skills.forEach((s) => {
          if (vm.skillProjectsMap[s] === undefined) {
            vm.skillsList.push(s);
            vm.skillProjectsMap[s] = [p.title];
          } else {
            vm.skillProjectsMap[s].push(p.title);
          }
        });
      });

      vm.skillsList.sort();
    }).catch((error) => {
      window.eventBus.$emit('message', { type: 'E', msg: `Error: ${error}` });
    });
  },
  computed: {
    displayProjects() {
      const vm = this;
      if (vm.skillsQuery.length > 0) {
        return vm.projects.filter((p) => vm.filteredProjectKeys.includes(p.title));
      }
      return vm.projects;
    },
  },
  methods: {
    filterSkills() {
      const vm = this;
      vm.filteredProjectKeys = [];
      vm.skillsQuery.forEach((skill) => {
        if (vm.skillProjectsMap[skill] !== undefined) {
          vm.skillProjectsMap[skill].forEach((projectTitle) => {
            if (!vm.filteredProjectKeys.includes(projectTitle)) {
              vm.filteredProjectKeys.push(projectTitle);
            }
          });
        }
      });
    },
    addQueryFilter(skill) {
      const vm = this;
      if (!vm.skillsQuery.includes(skill)) {
        vm.skillsQuery.push(skill);
        vm.filterSkills();
      } else {
        window.eventBus.$emit('message', { type: 'I', msg: 'Already filtering on this skill' });
      }
    },
    printRoles(project) {
      const it = project.role[Symbol.iterator]();
      let role = it.next();
      let text = role.value;
      role = it.next();
      while (!role.done) {
        text += ' -- ';
        text += role.value;
        role = it.next();
      }
      return text;
    },
    printTime(project) {
      let text = project.start;
      if (project.end !== undefined) {
        text += ` - ${project.end}`;
      }
      return text;
    },
    openProjectLink(link) {
      window.open(link.href, '_blank');
    },
    projectHasLinks(project) {
      return project.links !== undefined && project.links.length > 0;
    },
  },
};
</script>

<style scoped>

</style>
