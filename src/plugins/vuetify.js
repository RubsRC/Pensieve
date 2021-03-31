import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#202040",
        secondary: "#543864",
        accent: "#ff6363",
        error: "#ffbd69"
      }
    }
  }
});
