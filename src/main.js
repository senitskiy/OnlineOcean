import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// Libs

import "normalize.css"

// Libs

// Global Components

import AppButton from './components/App/AppButton'
import AppRow from './components/App/AppRow'

app.component('AppButton', AppButton)
app.component('AppRow', AppRow)

// Global Components

app.use(store).use(router).mount('#app')
