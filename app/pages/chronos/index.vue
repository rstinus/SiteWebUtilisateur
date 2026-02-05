<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Tableau de bord Chronos</h1>

    <div v-if="isLoggedIn" class="space-y-6">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-6">
          <img 
            :src="`https://mc-heads.net/avatar/${user.uuid}`" 
            alt="Avatar"
            class="rounded-lg shadow-md w-24 h-24 bg-gray-100"
          />
          <div>
            <h3 class="text-gray-400 uppercase text-xs font-bold tracking-widest mb-1">Bienvenue</h3>
            <h2 class="text-2xl font-black text-gray-800">{{ user.name }}</h2>
            <p class="text-green-500 text-sm font-medium">● Joueur Actif</p>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-gray-400 uppercase text-xs font-bold tracking-widest mb-3">État du serveur</h3>
          <div class="flex justify-between items-center mb-2">
            <span class="text-gray-700 font-bold">Statut: <span class="text-green-500">EN LIGNE</span></span>
            <span class="text-sm text-gray-500">125/250 joueurs</span>
          </div>
          <div class="bg-gray-100 p-2 rounded flex justify-between items-center border border-gray-200">
            <code class="text-sm text-gray-600">cite-engrenage.fr</code>
            <button class="text-gray-400 hover:text-gray-600"><img src="/logoMC.png" alt="Logo Minecraft" class="w-12 h-11"/></button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-gray-400 uppercase text-xs font-bold tracking-widest mb-4">Votre Portefeuille</h3>
          <div class="flex items-center space-x-4 mb-4">
            <div class="text-4xl">⚙️</div>
            <div>
              <span class="text-3xl font-black text-gray-800">1,500</span>
              <span class="ml-2 text-gray-500 font-bold">ChronosCoins</span>
            </div>
          </div>
          <div class="text-sm text-gray-400">Historique : <span class="text-green-500">+50 reçus</span> | <span class="text-red-500">-20 achetés</span></div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-gray-400 uppercase text-xs font-bold tracking-widest mb-4">Classement Équipe</h3>
          <div class="space-y-2">
            <div class="flex justify-between text-sm">
              <span class="font-bold text-gray-700">#5 Équipe Alpha</span>
              <span class="text-gray-500">3,450 pts</span>
            </div>
            <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div class="bg-blue-500 h-full" style="width: 65%"></div>
            </div>
            <p class="text-[10px] text-gray-400 italic text-right">Progression vers le Top 3</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
          <h3 class="text-gray-400 uppercase text-xs font-bold tracking-widest mb-2">Prochaine Phase</h3>
          <div class="text-4xl font-mono font-black text-red-600 mb-1">02:45:13</div>
          <p class="text-sm text-gray-500 font-bold">Phase 2: JcJ Débloqué</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-gray-400 uppercase text-xs font-bold tracking-widest mb-4">Vos Quêtes</h3>
          <ul class="space-y-3">
            <li class="flex items-center text-sm text-gray-600 italic">
              <span class="mr-2 text-red-500">❌</span> Miner 100 diamants
            </li>
            <li class="flex items-center text-sm text-gray-700 font-bold">
              <span class="mr-2 text-red-500">❌</span> Vaincre le Wither
            </li>
            <li class="flex items-center text-sm text-gray-700 font-bold">
              <span class="mr-2 text-green-500">✔</span> Récolter 500 blés
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div v-else class="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-20 text-center">
      <div class="text-6xl mb-6">🛡️</div>
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Accès Restreint</h2>
      <p class="text-gray-500 mb-6">Veuillez vous connecter pour accéder au tableau de bord complet de l'événement.</p>
    </div>

  </div>
</template>

<script setup>
definePageMeta({
  layout: 'chronos'
})

const isLoggedIn = useState('isLoggedIn')
const user = useState('user')
</script>