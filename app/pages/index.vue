<!-- pages/index.vue (Accueil) -->
<template>
  <div>
    <h1 class="text-3xl font-bold">Bienvenue sur notre plateforme</h1>
    <div class="mt-8 grid grid-cols-2 gap-8">
      <NuxtLink
          to="/app/pages/zenora"
          class="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <h2 class="text-2xl font-bold">Zenora</h2>
        <p class="mt-2">Application de bien-être et méditation</p>
      </NuxtLink>

      <NuxtLink
          to="/chronos"
          class="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <h2 class="text-2xl font-bold">Projet Chronos</h2>
        <p class="mt-2">Gestion de temps et productivité</p>
      </NuxtLink>
    </div>
  </div>
</template>

<!-- Pas besoin de definePageMeta, il utilisera default.vue -->