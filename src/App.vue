<template>
  <v-app>
    <app-drawer />
    <app-bar />
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import HelloWorld from "./components/HelloWorld";
import AppDrawer from "./components/AppDrawer";

export default {
  name: "App",
  components: {
    AppDrawer,
    AppBar,
    HelloWorld
  },
  data: () => ({
    // s: null
  }),
  created() {
    window.getApp = this;
  }
};
</script>
