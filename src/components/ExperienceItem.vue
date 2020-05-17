<template>
  <div>
    <div class="py-5">
      <h3 class="title">{{ item.title }}</h3>
      <div class="subtitle-2">
        <a :href="item.companyLink" target="_blank" class="link font-italic">
          {{item.company}}
        </a>
      </div>
      <hr>
      <div class="py-2">
        {{ item.description }}
      </div>
      <div v-if="hasAttachments" class="overline">
        <span>attachments:</span>
        <a
          v-for="att in item.attachments" :key="att.label"
          class="secondaryDark--text ml-2"
          @click="openAttachment(att)"
          title="Open in new window"
        >
          {{ att.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceItem',
  props: {
    item: {},
  },
  computed: {
    hasAttachments() {
      return this.item.attachments !== undefined && this.item.attachments.length > 0;
    },
  },
  methods: {
    openAttachment(attachment) {
      window.open(attachment.href, '_blank');
    },
  },
};
</script>

<style scoped>

</style>
