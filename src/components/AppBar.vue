<template>
  <v-app-bar app clipped-left color="primary" dark>
    <v-app-bar-nav-icon @click.stop="inDrawer = !inDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-icon>mdi-head-snowflake-outline</v-icon>
      Pensieve
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "app-bar",
  props: ["drawer"],
  data: () => ({
    inDrawer: null
  }),
  watch: {
    drawer() {
      this.inDrawer = this.drawer;
    }
  }
};
</script>

<style scoped></style>
