import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Libs

import "normalize.css"

// SDKs

// import * as nearAPI from "near-api-js"

const app = createApp(App)

// Global Libraries

// app.provide('near', nearAPI);

// Global Components

import AppButton from './components/App/AppButton'
import AppRow from './components/App/AppRow'

app.component('AppButton', AppButton)
app.component('AppRow', AppRow)

// Global Components

// Mixins

import titleMixin from './mixins/titleMixin'

app.mixin(titleMixin)

// Mixins

app.use(store).use(router).mount('#app')
