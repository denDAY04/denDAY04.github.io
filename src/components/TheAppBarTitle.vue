<template>
  <div class="d-flex align-center">
    <div class="title">
      <router-link
        :to="{ name: 'Home' }"
        aria-label="Home"
        title="Home"
        class="nav-bar-link"
      >
        stensig.net
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheAppBarTitle',
};
</script>

<style scoped>
  .title {
    text-transform: uppercase;
  }
  .nav-bar-link {
    text-decoration: none;
    color: inherit;
  }
</style>
