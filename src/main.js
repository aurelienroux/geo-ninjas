import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app = null

// wait for firebase to init before creating the app
firebase.auth().onAuthStateChanged(() => {
  // init app if not already created
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
