import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
library.add(fab);
library.add(far);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.mount("#app");

import "bootstrap/dist/js/bootstrap";
