import './assets/main.css'
import 'vue-json-pretty/lib/styles.css';
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueJsonPretty from 'vue-json-pretty';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component(VueJsonPretty)
app.component('VueDatePicker', VueDatePicker);

app.mount('#app')
