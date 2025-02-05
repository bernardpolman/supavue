import './assets/scss/main.scss'
import './assets/scss/toast-styles.scss'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'animate.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { supabaseClient } from './api/supabaseClient'
import { useAuthStore } from './stores/auth'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Swal from 'sweetalert2'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(createPinia())
app.provide('supabase', supabaseClient)
app.use(router).use(vuetify)
app.config.globalProperties.$swal = Swal

supabaseClient.auth.onAuthStateChange((event, session) => {
  const authStore = useAuthStore()
  if (event === 'SIGNED_IN') {
    authStore.setUser(session.user)
  } else if (event === 'TOKEN_REFRESHED') {
    authStore.setUser(session.user)
  } else if (event !== 'INITIAL_SESSION') {
    authStore.setUser(null)
    authStore.setUserExtended(null)
  }
})

app.mount('#app')
