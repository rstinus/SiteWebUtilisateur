<template>
  <div v-if="isLoggedIn" class="space-y-6">
    <div class="flex justify-between items-end mb-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Les Joueurs de votre équipe</h1>
        <p class="text-gray-500">Liste des membres enregistrés pour l'équipe : <span class="font-bold text-red-600">MineTeam</span></p>
      </div>
    </div>

    <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="i in 3" :key="i" class="h-24 bg-gray-100 animate-pulse rounded-2xl"></div>
    </div>

    <div v-else-if="players && players.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div 
        v-for="player in players" 
        :key="player.player_uuid" 
        class="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors"
      >
        <div class="h-12 w-12 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
          <img 
            :src="`https://minotar.net/helm/${player.player_uuid}/48`" 
            alt="Skin"
            class="h-full w-full object-cover"
          />
        </div>
        
        <div>
          <h3 class="font-bold text-gray-800">Joueur</h3>
          <p class="text-xs text-gray-400 font-mono">{{ player.player_uuid.substring(0, 13) }}...</p>
        </div>
      </div>
    </div>

    <div v-else class="bg-white p-12 rounded-2xl border-2 border-dashed border-gray-200 text-center">
      <p class="text-gray-400">Aucun joueur trouvé dans cette équipe.</p>
    </div>
  </div>

  <div v-else class="text-center py-20">
    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-600 mb-6 text-2xl">
      🔒
    </div>
    <h1 class="text-2xl font-semibold mb-4 text-gray-800">Accès restreint</h1>
    <p class="text-gray-600 mb-6 max-w-sm mx-auto">Veuillez vous connecter pour voir les joueurs de votre équipe.</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'chronos'
})

// Récupération de l'état de connexion (défini dans ton app)
const isLoggedIn = useState('isLoggedIn')

// Appel de ton API server/api/scores.ts
// Note : Tu peux renommer ton fichier API en joueurs.ts si tu préfères
const { data: players, pending } = await useFetch('/api/player')
</script>