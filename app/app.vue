<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Redirection automatique au lancement
onMounted(() => {
  const saved = localStorage.getItem('site_choice')

  if (!saved && route.path !== '/select') {
    router.push('/select')
  }
  else if (saved && route.path === '/') {
    router.push('/' + saved)
  }
})
</script>
