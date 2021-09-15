import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.use(Vuetify)

const opts = {}


export default new Vuetify(opts)
new Vue({
 router,
 Vuetify,
 store,
 vuetify,
 icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
 render:
 h => h(App)
}).$mount('#app')