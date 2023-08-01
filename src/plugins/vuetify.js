/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VAlert: { variant: "tonal", style: "font-size: 14px; font-weight: bolder" },
    VCard: {
      style: "padding: 20px; margin: 10px",
    },
    VTextField: { density: "compact", variant: "outlined" },
  },
  blueprint: md3,
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
    },
  },
});
