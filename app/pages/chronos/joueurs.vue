<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 gap-4">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white text-center sm:text-left">Les Joueurs de votre équipe</h1>
    </div>
    <div v-if="isLoggedIn" class="space-y-6 dark:text-white">
      <div class="flex justify-between items-end mb-8">
        <div>
          <p class="text-gray-500 dark:text-white">Liste des membres enregistrés pour l'équipe :
            <span class="font-bold text-red-600 dark:text-white">{{ user?.team || 'Équipe inconnue ' }}</span>
          </p>
        </div>
      </div>

      <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="i in 3" :key="i" class="h-24 bg-gray-100 animate-pulse rounded-2xl dark:text-white"></div>
      </div>

      <div v-else-if="players && players.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div 
          v-for="player in players" 
          :key="player.uuidPlayer" 
          class="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors"
        >
          <div class="h-12 w-12 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
            <img 
              :src="`https://mc-heads.net/avatar/${player.uuidPlayer}/48`" 
              alt="Skin"
              class="h-full w-full object-cover"
            />
          </div>
          
          <div>
            <h3 class="font-bold text-gray-800">
              {{ player.name || 'Joueur inconnu' }}
            </h3>
            <p class="text-xs text-gray-400 font-mono">{{ player.uuidPlayer.substring(0, 13) }}...</p>
          </div>
        </div>
      </div>

      <div v-else class="bg-white p-12 rounded-2xl border-2 border-dashed border-gray-200 text-center  dark:text-white">
        <p class="text-gray-400 dark:text-white">Aucun joueur trouvé dans cette équipe.</p>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <h1 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Accès restreint</h1>
      <p class="text-gray-600 mb-6 max-w-sm mx-auto dark:text-gray-400">Une fois l'inscription de l'équipe complété avec la vérification dans le lobby vous trouverez les membres de votre équipe ici !</p>
      <p class="text-gray-600 mb-6 max-w-sm mx-auto dark:text-gray-400">Veuillez vous connecter pour voir les joueurs de votre équipe si vous êtes inscrit et que la connexion est disponible !</p>
    </div>
  </div>
  <BannerAd />
</template>

<script setup>
definePageMeta({
  layout: 'chronos'
})

const isLoggedIn = useState('isLoggedIn')
const user = useState('user')

const { data: players, pending, error } = await useFetch('/api/player', {
  query: { team: user.value?.team },
  watch: [isLoggedIn]
})
</script>