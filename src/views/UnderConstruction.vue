<template>
  <div id="constructionBox">
    <v-container>
      <v-row>
        <v-col>
          <v-row justify="center">
            <v-icon id="constructionIcon">mdi-settings</v-icon>
          </v-row>
          <v-row justify="center">
            <div style="text-align: center">
              <h1>Website is under construction</h1>
              <h3 class="text--secondary">Please check back later</h3>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
#constructionBox {
  margin-top: 10em;
}
h1{
  font-family: "Times New Roman",Times,serif;
}
h3 {
  font-family: Arial, Helvetica, sans-serif
}
</style>
