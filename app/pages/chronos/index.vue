<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Tableau de bord Chronos</h1>

    <div v-if="isLoggedIn" class="space-y-6">
      <div class="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <img 
          :src="`https://crafatar.com/avatars/${user.uuid}?size=100&overlay`" 
          alt="Avatar du joueur"
          class="rounded-lg shadow-md w-20 h-20"
        />
        <div>
          <h2 class="text-2xl font-bold">Bienvenue, {{ user.name }}</h2>
          <p class="text-gray-500 text-sm">Prêt pour la suite de l'événement ?</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 class="text-xl font-bold mb-4">Vos Statistiques</h2>
          <p class="text-gray-600 italic">Progression, inventaire et objectifs en cours...</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 class="text-xl font-bold mb-4">Activité récente</h2>
          <p class="text-gray-600 italic">Derniers points gagnés...</p>
        </div>
      </div>
    </div>

    <div v-else class="space-y-6">
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
        <p class="text-blue-700 font-medium">Connectez-vous pour voir vos statistiques personnelles.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-bold text-gray-800 mb-2">État du Serveur</h3>
          <p class="text-green-500 font-semibold flex items-center">
            <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            En ligne : 125 joueurs
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-bold text-gray-800 mb-2">Top Équipes</h3>
          <ol class="text-sm text-gray-600">
            <li>1. <span class="font-bold">Team Alpha</span> (4500 pts)</li>
          </ol>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-bold text-gray-800 mb-2">Événement</h3>
          <p class="text-sm text-gray-600 italic">Phase 2 en cours...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'chronos'
})

// Utilisation de useState pour partager l'état avec le layout
const isLoggedIn = useState('isLoggedIn')
const user = useState('user')
</script>