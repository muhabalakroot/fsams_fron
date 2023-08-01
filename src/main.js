/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import TheH1 from "@/Components/ui/TheH1.vue";
import TheTextFieldLable from "@/components/ui/TheTextFieldLable.vue";
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

// Globally Components Registeration
app.component("TheH1", TheH1);
app.component("TheTextFieldLable", TheTextFieldLable);

registerPlugins(app);

app.mount("#app");
