<template>
  <v-row style="height: 100%; min-height: 100%;max-height: 100%">
    <v-spacer/>
    <v-col cols="12" lg="8" md="12">
      <v-card>
        <v-card-title class="justify-center text-uppercase primary">
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
          color="primary"
          item-color="secondaryDark"
          @change="filterSkills"
        />
      </v-card-text>
      <v-card-text>
        <ProjectItem v-for="project in displayProjects" :item="project" :key="project.title" />
      </v-card-text>
    </v-col>
    <v-spacer/>
  </v-row>
</template>

<script>
import axios from 'axios';
import ProjectItem from '../components/ProjectItem.vue';

export default {
  name: 'ProjectsPage',
  components: { ProjectItem },
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
      vm.projects = response.data.sort(vm.projectComparator).reverse();
      vm.projects.forEach(vm.mapProjectSkills);
      vm.skillsList.sort();
    }).catch((error) => {
      window.eventBus.$emit('message', { type: 'E', msg: `Error: ${error}` });
    });

    window.eventBus.$on('skillFilter', vm.addQueryFilter);
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
    projectComparator(a, b) {
      if (a.start > b.start) return 1;
      if (a.start < b.start) return -1;

      if (a.end > b.start) return 1;
      if (a.start < b.end) return -1;

      return 0;
    },
    mapProjectSkills(project) {
      const vm = this;
      project.skills.sort();
      project.role.sort();
      project.skills.forEach((s) => {
        if (vm.skillProjectsMap[s] === undefined) {
          vm.skillsList.push(s);
          vm.skillProjectsMap[s] = [project.title];
        } else {
          vm.skillProjectsMap[s].push(project.title);
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
