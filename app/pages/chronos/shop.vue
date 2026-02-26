<template>
  <div class="space-y-6 px-2 sm:px-0">
        
    <div class="grid grid-cols-1 gap-4">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white text-center sm:text-left">Le Shop de la Cité</h1>
    </div>
    <div class="text-center py-20">
      <p class="text-gray-600 mb-6 max-w-sm mx-auto dark:text-gray-400">Le shop est actuellement fermé !</p>
    </div>
  </div>
  <BannerAd />
</template>

<script setup>
definePageMeta({
  layout: 'chronos'
})
</script>