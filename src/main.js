import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";


import * as VueGoogleMaps from 'vue2-google-maps'
import VueVideoPlayer from 'vue-video-player'
import VCalendar from 'v-calendar';

import Notifications from 'vue-notification'

import {
   FormSpinbuttonPlugin,
   FormTimepickerPlugin,
   PaginationPlugin,
   FormDatepickerPlugin,
   TooltipPlugin,
   CollapsePlugin,
   TablePlugin,
   ModalPlugin,
   SkeletonPlugin,
   DropdownPlugin,
   PopoverPlugin,
   BootstrapVueIcons,
   SpinnerPlugin,
   NavbarPlugin,
   CarouselPlugin,
   ImagePlugin
} from 'bootstrap-vue'

// import CSS fiels
import 'bootstrap';
import 'bootstrap-vue';
import 'popper.js/dist/popper.min.js';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';


import 'video.js/dist/video-js.css';



import './scss/main.scss'
import adminPanel from './modules/adminPanel'
import clientPanel from './modules/clientPanel'
import publicPages from './modules/publicPages'

import {
   registerModules
} from "./register-modules";

registerModules({
   adminPanel,
   clientPanel,
   publicPages
});


Vue.use(VueGoogleMaps, {
   load: {
      key: 'AIzaSyCF7xDOU5PO28rzK5SyqrRaDQIWco7LkAA',
      libraries: 'places',
   }
});



Vue.use(FormSpinbuttonPlugin)
Vue.use(FormTimepickerPlugin)
Vue.use(PaginationPlugin)
Vue.use(FormDatepickerPlugin)
Vue.use(TooltipPlugin)
Vue.use(CollapsePlugin)
Vue.use(TablePlugin)
Vue.use(ModalPlugin)
Vue.use(SkeletonPlugin)
Vue.use(DropdownPlugin)
Vue.use(SpinnerPlugin)
Vue.use(Notifications)
Vue.use(PopoverPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(NavbarPlugin)
Vue.use(ImagePlugin)
Vue.use(CarouselPlugin)


Vue.use(VueVideoPlayer)
Vue.use(VCalendar, {
   componentPrefix: 'vc',
});
Vue.config.lang = 'en'
Vue.config.productionTip = false;

new Vue({
   router,
   store,
   i18n,
   render: (h) => h(App),
}).$mount("#app");