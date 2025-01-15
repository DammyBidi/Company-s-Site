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

const toastOptions: PluginOptions = {
  // Add your custom options here
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  toastDefaults: {
    success: {
        toastClassName: "custom-success-toast", // Correct property name
    },
    error: {
      toastClassName: "custom-error-toast", // Link to custom error style
    },
    info: {
      toastClassName: "custom-info-toast", // Link to custom info style
    },
  },
  
};


app.use(router);
app.use(Toast, toastOptions);
 

app.mount("#app");
