<template>
  <div v-if="isLoggedIn" class="space-y-6">
    <h1 class="text-3xl font-bold mb-6">Les Ventes de votre équipe</h1>
    </div>

    <div v-else class="text-center py-20">
      <h1 class="text-2xl font-semibold mb-4">Vous devez être connecté pour accéder à cette page.</h1>
      <p class="text-gray-600 mb-6">Veuillez vous connecter pour voir les ventes de votre équipe.</p>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'chronos'
})
const isLoggedIn = useState('isLoggedIn')
</script>