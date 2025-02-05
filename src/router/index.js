import { createRouter, createWebHistory } from 'vue-router'
import { supabaseClient } from '../api/supabaseClient'
import LandingPage from '../views/home/LandingPageView.vue'
import Dashboard from '../views/home/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/landing',
      name: 'Landing',
      component: LandingPage,
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import('@/views/auth/AuthCallback.vue'),
      beforeEnter: (to) => {
        const hashDictionary = {}
        const hash = to.hash.replace('#', '')
        hash.split('&').forEach((item) => {
          const [key, value] = item.split('=')
          hashDictionary[key] = value
        })

        if (
          ['access_token', 'expires_in', 'provider_token', 'refresh_token', 'token_type'].some(
            (key) => !(key in hashDictionary),
          )
        )
          return '/'
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const {
    data: { session },
  } = await supabaseClient.auth.getSession()

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!session?.user) {
      next({ name: 'Landing' })
    } else {
      next()
    }
  } else if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (session?.user) {
      next({ name: 'Dashboard' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
