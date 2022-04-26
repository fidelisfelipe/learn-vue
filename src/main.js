import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App);

const messages = {
    en: {
      message: {
        welcome: 'Welcome',
        greet: 'Greet',
        hello: 'Hello'
      }
    },
    pt: {
      message: {
        welcome: 'Seja bem vindo',
        greet: 'Saudar',
        hello: 'Olá'
      }
    },
    ja: {
        message: {
          welcome: 'こんにちは、世界',
          greet: '挨拶',
          hello: 'こんにちは'
        }
      }
  }

const i18n = createI18n({
    locale: 'pt', // set locale
    fallbackLocale: 'en',
    messages
});

app.use(PrimeVue);
app.use(ToastService);
app.use(i18n);

app.component('p-button', Button);
app.component('p-input-text', InputText);
app.component('p-toast', Toast);

app.mount('#app')