<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 gap-4">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white text-center sm:text-left">Le Classement de la Cité</h1>
    </div>
    <div class="text-center py-20">
      <p class="text-gray-600 mb-6 max-w-sm mx-auto dark:text-gray-400">Aucun classement en cours !</p>
    </div>
  </div>
  <BannerAd />
</template>

<script setup>
definePageMeta({
  layout: 'chronos'
})
</script>