<template>
  <v-app>
    <!-- <Navigation component goes here /> -->
    <v-main>
      <!-- Initial loader -->
      <v-container v-if="!isLoaded && !isAuthRoute" class="d-flex justify-center fill-height">
        <v-progress-circular :size="70" :width="7" color="grey" indeterminate></v-progress-circular>
      </v-container>
      <!-- All components below -->
      <!-- Render router-view only if user data is loaded or if the route is /auth -->
      <router-view v-if="isLoaded || isAuthRoute"></router-view>
      <!-- <AppVersion /> -->
    </v-main>
  </v-app>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const route = useRoute()
const user = computed(() => authStore.user)
const isLoaded = ref(false)
const isAuthRoute = computed(() => route.path === '/landing')

watch(
  user,
  async (userLoaded) => {
    if (userLoaded && userLoaded.id) {
      console.log('user loaded')
    }
  },
  { immediate: true },
)
</script>
