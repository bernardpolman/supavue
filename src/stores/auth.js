import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(newUser) {
      this.user = newUser
    },
  },
})
