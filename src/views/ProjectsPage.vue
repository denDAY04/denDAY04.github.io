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
          class="skill-card"
        >
          <v-card-title class="blue-grey darken-4">{{ project.title }}</v-card-title>
          <v-card-subtitle class="project-affiliate">
            {{ project.affiliate }} project
          </v-card-subtitle>
          <v-card-text>
            {{ project.description}}
          </v-card-text>
          <v-card-actions v-if="project.links !== undefined" class="project-links">
            <v-item-group>
              <v-item>
                <v-icon class="project-link">mdi-link</v-icon>
              </v-item>
              <v-item class="project-link" v-for="link in project.links" :key="link.label">
                <a :href="link.href" target="_blank">{{ link.label }}</a>
              </v-item>
            </v-item-group>
          </v-card-actions>
          <v-divider/>
          <v-card-actions>
            <div class="text-uppercase skills">Role</div>
            <span class="font-italic">{{ printRoles(project.role) }}</span>
          </v-card-actions>
          <v-divider/>
          <v-card-actions>
            <div class="text-uppercase skills">Skills</div>
            <v-chip-group column>
              <v-chip
                v-for="skill in project.skills"
                :key="skill"
                @click="addQueryFilter(skill)"
              >
                {{ skill }}
              </v-chip>
            </v-chip-group>
          </v-card-actions>
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
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      });

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
      console.log('Filtering skills');
      console.log(vm.skillsQuery);
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
    printRoles(roleList) {
      const it = roleList[Symbol.iterator]();
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
  },
};
</script>

<style scoped>
.skill-card {
  margin-top: 3em;
}
.skills {
  margin-right: 1em;
}
.project-link {
  margin-left: 1em;
}
.project-affiliate {
  margin-top: 1em;
}
.project-links {
  margin-top: -1em;
}
</style>
