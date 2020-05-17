<template>
  <v-card class="my-10" raised color="backgroundLight">
    <v-card-title class="primary white--text">
      {{ item.title }}
    </v-card-title>
    <v-card-subtitle class="mt-2 overline">
      {{ item.affiliate }} project
    </v-card-subtitle>
    <v-card-text>
      <div>
        {{ item.description}}
      </div>
      <div v-if="hasLinks" class="mt-3">
        <a
          v-for="link in item.links" :key="link.label"
          :href="link.href" target="_blank"
          class="link mr-4 text-uppercase secondaryDark--text"
        >
          {{ link.label }}
        </a>
      </div>
    </v-card-text>
    <v-divider/>
    <v-card-text>
      <v-icon class="mr-2" title="Role">mdi-shield-account</v-icon>
      <span>{{ roles }}</span>
      <v-icon class="mx-2" title="Year">mdi-clock-outline</v-icon>
      <span>{{ time }}</span>
    </v-card-text>
    <v-divider/>
    <v-card-text>
      <v-chip-group column>
        <v-chip
          v-for="skill in item.skills"
          :key="skill"
          @click="addQueryFilter(skill)"
          color="secondaryDark white--text"
        >
          {{ skill }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    item: {},
  },
  computed: {
    roles() {
      const vm = this;
      const it = vm.item.roles[Symbol.iterator]();
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
    time() {
      const vm = this;
      let text = vm.item.start;
      if (vm.item.end !== undefined) {
        text += ` - ${vm.item.end}`;
      }
      return text;
    },
    hasLinks() {
      const vm = this;
      return vm.item.links !== undefined && vm.item.links.length > 0;
    },
  },
  methods: {
    addQueryFilter(skill) {
      window.eventBus.$emit('skillFilter', skill);
    },
  },
};
</script>

<style scoped>

</style>
