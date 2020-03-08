<template>
      <v-row>
        <v-col>
          <div class="text-center">
            <v-icon id="constructionIcon">mdi-settings</v-icon>
            <h1>Website is under construction</h1>
            <h3 class="text--secondary">Please check back later</h3>
          </div>
        </v-col>
      </v-row>
</template>

<script>
export default {
  name: 'UnderConstruction',
};
</script>

<style scoped>
#constructionIcon {
  font-size: 7em;
}
h1{
  font-family: "Times New Roman",Times,serif;
}
h3 {
  font-family: Arial, Helvetica, sans-serif
}
</style>
