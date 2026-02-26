<template>
  <div class="flex flex-col md:flex-row gap-8 items-start">
    <div class="flex-1">
        <h2 class="text-2xl font-bold dark:text-white">Contenu Principal</h2>
        <p class="dark:text-gray-400">Votre texte ou grille d'évènements...</p>
    </div>

    <aside class="hidden md:block sticky top-24 w-64 h-fit">
      <BannerAd />
    </aside>
  </div>
</template>

<script setup>
</script>