<template>
  <div></div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()
const user = computed(() => authStore.user)

onMounted(() => {
  if (user.value) {
    // arrived on callback page with an existing user, going home
    setTimeout(() => {
      router.push('/')
    }, 0)
  }
})
</script>
