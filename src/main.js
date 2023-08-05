/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import VueHtmlToPaper from "vue-html-to-paper";

// Components
import TheH1 from "@/Components/ui/TheH1.vue";
import TheTextFieldLable from "@/components/ui/TheTextFieldLable.vue";
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

/* print config */
const options = {
  name: "_blank",
  specs: [
    "fullscreen=yes",
    "scrollbars=yes",
    "status=no",
    "titlebar=no",
    "menubar=no",
  ],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://fonts.gstatic.com",
    "https://fonts.googleapis.com/css2?family=Cairo:wght@300&display=swap",
    "https://code.jquery.com/jquery-3.2.1.slim.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/vuetify/3.0.0/vuetify.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/vuetify/3.0.0/vuetify.css",
  ],
  timeout: 1000, // default timeout before the print window appears
  autoClose: false, // if false, the window will not close after printing
  windowTitle: window.document.title, // override the window title
};

app.use(VueHtmlToPaper, options);

// Globally Components Registeration
app.component("TheH1", TheH1);
app.component("TheTextFieldLable", TheTextFieldLable);

registerPlugins(app);

app.mount("#app");
