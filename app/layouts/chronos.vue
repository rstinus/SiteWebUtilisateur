<template>
  <div class="min-h-screen flex flex-col chronos-theme bg-gray-50">
    <header class="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl sticky top-0 z-50">
      <div class="container mx-auto px-4 py-3 sm:py-4">
        <nav class="flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <button 
              @click="isMenuOpen = !isMenuOpen" 
              class="p-2 -ml-2 md:hidden hover:bg-gray-700 rounded-lg transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img src="/chronos.png" class="w-10 rounded shadow" />
            <h1 class="text-lg sm:text-2xl font-bold tracking-tight">Chronos</h1>
          </div>

          <div class="flex items-center space-x-2 sm:space-x-6">

            <button 
              v-if="!isLoggedIn"
              @click="navigateTo('/chronos/login')"
              class="bg-red-600 hover:bg-red-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all active:scale-95"
            >
              Connexion
            </button>

            <div v-else class="flex items-center space-x-2 sm:space-x-4">
              <NuxtLink to="/chronos" class="hover:text-red-400 transition-colors text-sm"
                :class="{ 'font-semibold': $route.path === '/chronos' }" >
                  <div class="flex items-center space-x-2 bg-gray-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full border border-gray-600">
                    <img 
                      :src="`https://mc-heads.net/avatar/${user.uuid}/24`" 
                      class="w-5 h-5 sm:w-6 sm:h-6 rounded shadow-sm"
                      alt="Avatar"
                    />
                    <span class="text-[10px] sm:text-sm font-medium truncate max-w-[60px] sm:max-w-none">
                      {{ user.name }}
                    </span>
                  </div>
              </NuxtLink>

              <button @click="logout" class="text-gray-400 hover:text-white text-[10px] sm:text-xs underline">
                Déconnexion
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <div class="flex flex-1 relative">
      <aside 
        :class="[
          'fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 p-6 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0',
          isMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'
        ]"
      >
        <nav class="space-y-2 pt-16 md:pt-0">
          <h3 class="font-bold text-gray-400 text-[10px] uppercase tracking-widest mb-4">Info Cité</h3>
          <NuxtLink @click="isMenuOpen = false" to="/chronos/shop" class="nav-link block py-3">Le shop</NuxtLink>
          <NuxtLink @click="isMenuOpen = false" to="/chronos/classement" class="nav-link block py-3">Le classement</NuxtLink>
          <NuxtLink @click="isMenuOpen = false" to="/chronos/calendrier" class="nav-link block py-3">Le calendrier</NuxtLink>

          <h3 class="font-bold text-gray-400 text-[10px] uppercase tracking-widest mt-8 mb-4">Équipes</h3>
          <NuxtLink @click="isMenuOpen = false" to="/chronos/ventes" class="nav-link block py-3">Les ventes</NuxtLink>
          <NuxtLink @click="isMenuOpen = false" to="/chronos/joueurs" class="nav-link block py-3">Les joueurs</NuxtLink>
        </nav>
      </aside>

      <div 
        v-if="isMenuOpen" 
        @click="isMenuOpen = false" 
        class="fixed inset-0 bg-black/50 z-30 md:hidden"
      ></div>

      <main class="flex-1 p-4 sm:p-8 w-full overflow-x-hidden">
        <slot />
      </main>
    </div>

    <footer class="bg-gray-900 text-white border-t border-gray-800">
      <div class="container mx-auto px-6 py-6 text-center">
        <p class="text-gray-500 text-[10px] sm:text-sm uppercase tracking-tighter">
          © 2026 Projet Chronos - Propulsé par la Cité
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false) // État pour ouvrir/fermer le menu sur mobile

const isLoggedIn = useState('isLoggedIn', () => false)
const user = useState('user', () => ({
}))

const logout = () => {
  isLoggedIn.value = false
  user.value = null
  navigateTo('/chronos') 
}

useHead({
  style: [
    {
      children: `
        .chronos-theme { --primary-color: #dc2626; }
        .nav-link { 
          display: block; padding: 0.75rem; border-radius: 0.75rem; 
          color: #4b5563; font-weight: 600; transition: all 0.2s;
          font-size: 0.875rem;
        }
        .nav-link:hover { background-color: #f3f4f6; color: #dc2626; transform: translateX(4px); }
        .router-link-active.nav-link { background-color: #fef2f2; color: #dc2626; border-left: 4px solid #dc2626; border-radius: 0 0.75rem 0.75rem 0; }
      `
    }
  ]
})
</script>