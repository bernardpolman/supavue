<template>
  <div>
    <p v-if="user">Welcome, {{ user.email }}!</p>
    <p v-else>You are not logged in!</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const user = computed(() => authStore.user)
</script>
