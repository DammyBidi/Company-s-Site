// import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import type { PluginOptions } from "vue-toastification";
import { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./assets/main.css";

const app = createApp(App);

app.use(router);

const options: PluginOptions = {
  // Add your custom options here
  position: POSITION.TOP_RIGHT,
  timeout: 6000,
  closeOnClick: true,
  pauseOnHover: true,
  toastDefaults: {
    success: {
        toastClassName: "custom-success-toast", // Correct property name
    },
  },
  
};



app.use(Toast, options);

app.mount("#app");
