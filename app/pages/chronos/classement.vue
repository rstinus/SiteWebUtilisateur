<template>
  <div class="space-y-6">
    <div class="flex justify-between items-end mb-6">
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Le Classement de la Cité</h1>
        <p class="text-gray-500">Mise à jour en temps réel des scores par équipe.</p>
      </div>
      <button 
        @click="refresh()" 
        class="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
      >
        <span class="mr-2">🔄</span> Actualiser
      </button>
    </div>

    <div v-if="pending" class="flex justify-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
    </div>

    <div v-else-if="ladder && ladder.length > 0" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <table class="w-full text-left border-collapse">
        <thead class="bg-gray-50 border-b border-gray-100">
          <tr>
            <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400 w-20">Rang</th>
            <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Équipe</th>
            <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400 text-right">Points</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          <tr v-for="(equipe, index) in ladder" :key="equipe.id" class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4">
              <span 
                class="w-8 h-8 flex items-center justify-center rounded-full font-black text-sm"
                :class="{
                  'bg-yellow-100 text-yellow-700': index === 0,
                  'bg-gray-200 text-gray-700': index === 1,
                  'bg-orange-100 text-orange-700': index === 2,
                  'bg-gray-50 text-gray-400': index > 2
                }"
              >
                {{ index + 1 }}
              </span>
            </td>
            <td class="px-6 py-4">
              <div class="font-bold text-gray-800">{{ equipe.team_name }}</div>
              <div class="text-xs text-gray-400 italic">{{ equipe.score_name }}</div>
            </td>
            <td class="px-6 py-4 text-right">
              <span class="text-xl font-black text-red-600">{{ equipe.score.toLocaleString() }}</span>
              <span class="ml-1 text-xs font-bold text-gray-400">PTS</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="bg-white p-12 rounded-2xl border-2 border-dashed border-gray-200 text-center">
      <p class="text-gray-400">Aucune donnée de classement disponible pour le moment.</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'chronos'
})

// Récupération des données depuis ton API server/api/scores.ts
const { data: ladder, pending, refresh } = await useFetch('/api/scores')
</script>