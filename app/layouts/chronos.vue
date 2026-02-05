<template>
  <div class="min-h-screen flex flex-col chronos-theme">
    <header class="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 class="text-2xl font-bold tracking-tight">Projet Chronos</h1>
          </div>

          <div class="flex items-center space-x-6">
            <NuxtLink
                to="/chronos"
                class="hover:text-red-400 transition-colors"
                :class="{ 'text-red-400 font-semibold': $route.path === '/chronos' }"
            >
              Tableau de bord
            </NuxtLink>
            
            <button 
              v-if="!isLoggedIn"
              @click="login"
              class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Connexion
            </button>

            <div v-else class="flex items-center space-x-4">
              <div class="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-full border border-gray-600">
                <img 
                  :src="`https://mc-heads.net/avatar/${user.uuid}`" 
                  class="w-6 h-6 rounded"
                  alt="Avatar"
                />
                <span class="text-sm font-medium">{{ user.name }}</span>
              </div>
              <button @click="logout" class="text-gray-400 hover:text-white text-xs underline">
                Déconnexion
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <div class="flex flex-1">
      <aside class="w-64 bg-gray-50 border-r border-gray-200 p-6">
        <nav class="space-y-2">
          <h3 class="font-semibold text-gray-500 text-sm uppercase tracking-wider mb-4">Info Cité</h3>
          <NuxtLink to="/chronos/shop" class="block p-2 rounded hover:bg-gray-100">Le shop</NuxtLink>
          <NuxtLink to="/chronos/classement" class="block p-2 rounded hover:bg-gray-100">Le classement</NuxtLink>
          <NuxtLink to="/chronos/calendrier" class="block p-2 rounded hover:bg-gray-100">Le calendrier</NuxtLink>

          <h3 class="font-semibold text-gray-500 text-sm uppercase tracking-wider mt-8 mb-4">Équipes</h3>
          <NuxtLink to="/chronos/ventes" class="block p-2 rounded hover:bg-gray-100">Les ventes</NuxtLink>
          <NuxtLink to="/chronos/joueurs" class="block p-2 rounded hover:bg-gray-100">Les joueurs</NuxtLink>
        </nav>
      </aside>

      <main class="flex-1 p-8">
        <slot />
      </main>
    </div>

    <footer class="bg-gray-900 text-white border-t border-gray-800">
      <div class="container mx-auto px-6 py-6 text-center">
        <p class="text-gray-400 text-sm">© 2026 Projet Chronos - Gestionnaire d'Événements</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Utilisation de useState pour que l'état soit partagé avec tes pages (index.vue)
const isLoggedIn = useState('isLoggedIn', () => false)
const user = useState('user', () => ({
  name: 'Vikings92',
  uuid: 'def58a2b-714f-45ad-9fb3-82b3c127f836'
}))

const login = () => isLoggedIn.value = true
const logout = () => isLoggedIn.value = false

useHead({
  style: [
    {
      children: `
        .chronos-theme { --primary-color: #dc2626; --secondary-color: #1f2937; }
        .chronos-theme a.active { position: relative; }
        .chronos-theme a.active::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 2px; background-color: var(--primary-color);
        }
      `
    }
  ]
})
</script>