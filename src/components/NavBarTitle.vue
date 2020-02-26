<template>
  <div class="d-flex align-center">
    <span class="title">
      <router-link :to="{ name: 'Home' }" aria-label="Home" title="Home" class="nav-bar-link">
        stensig.net
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'NavBarTitle',
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
