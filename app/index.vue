<script setup>
// Cette fonction s'exécute côté serveur et côté client
definePageMeta({
  middleware: () => {
    return navigateTo('/chronos')
  }
})
</script>

<template>
  <div>Chargement...</div>
</template>