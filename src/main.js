import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

//Pinia
import { createPinia } from "pinia";
app.use(createPinia());

//Vue Router
import router from "./router";
app.use(router);

/************************************************************|
|  PRIMEVUE                                                  |
|************************************************************/
//PrimeVue
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
app.use(PrimeVue, { ripple: true });

//Ripple
import Ripple from "primevue/ripple";
app.directive("ripple", Ripple);

//Theme
import "@/assets/theme-prime.js";

//PrimeIcons
import "primeicons/primeicons.css";

//PrimeFlex
import "primeflex/primeflex.css";

//ConfirmationService
import ConfirmationService from "primevue/confirmationservice";
app.use(ConfirmationService);

//ToastService
import ToastService from "primevue/toastservice";
app.use(ToastService);

//DialogService
import DialogService from "primevue/dialogservice";
app.use(DialogService);

app.mount("#app");
