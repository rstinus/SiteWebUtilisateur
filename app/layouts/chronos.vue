<template>
  <div class="min-h-screen flex flex-col chronos-theme bg-gray-50 dark:bg-neutral-800 transition-colors">
    <header class="w-full bg-neutral-900 text-white shadow-xl sticky top-0 z-50">
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
            
            <div class="flex flex-row items-center justify-center gap-6">
              <button 
              @click="navigateTo('/chronos')"
              
              class="flex flex-row items-center gap-3 p-2"
              >
              <img src="/logoProjetChronos.png" class="w-10" />
              <h1 class="text-lg sm:text-2xl font-bold tracking-tight">Projet Chronos</h1>
              </button>
            </div>
          </div>
          <button 
            @click="navigateTo('/chronos/register')" 
            class="bg-orange-800 hover:bg-amber-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all active:scale-95"
          >
            <span class="sm:hidden">Inscription</span>
            <span class="hidden sm:inline">Inscription Team & Joueurs Cité</span> 
          </button>
<!--
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
-->
        </nav>
      </div>
    </header>

    <div class="flex flex-1 relative items-start">
      <aside 
        :class="[
          'fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 p-6 transform transition-transform duration-300 ease-in-out flex flex-col',
          /* 2. On force le sticky sous le header (72px) */
          'md:sticky md:top-[72px] md:translate-x-0',
          /* 3. LE RÉGLAGE CLÉ : h-[calc(100vh-72px)] force la bordure jusqu'en bas de l'écran */
          'h-screen md:min-h-[calc(100vh-72px)] md:h-auto',
          isMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0',
          'dark:bg-neutral-800 dark:border-gray-700'
        ]"
      >
        <nav class="pt-16 md:pt-0 dark:text-gray-300 flex-1 overflow-y-auto">
          <div class="grid grid-cols-3 items-center pb-4">
            <h2 class="col-span-2">Mode éclairage</h2>
            <div class="col-span-1 flex justify-end items-center">
              <DarkLightMode />
            </div>
          </div>

          <h3 class="font-bold text-gray-600 text-[12px] uppercase tracking-widest mt-4 pb-2">Projet Chronos</h3>
          <NuxtLink @click="isMenuOpen = false" to="/chronos/calendrier" class="nav-link indent-4 font-bold text-gray-500 text-[14px] block pb-2">Le calendrier</NuxtLink>
          <a @click="isMenuOpen = false" href="https://www.wiki.projetchronos.fr" class="nav-link indent-4 font-bold text-gray-500 text-[14px] block pb-2">Le wiki</a>

          <h3 class="font-bold text-gray-600 text-[12px] uppercase tracking-widest mt-4 pb-2">Info Cité</h3>
          <NuxtLink @click="isMenuOpen = false" to="/chronos/shop" class="nav-link indent-4 font-bold text-gray-500 text-[14px] block pb-2">Le shop</NuxtLink>
          <NuxtLink @click="isMenuOpen = false" to="/chronos/classement" class="nav-link indent-4 font-bold text-gray-500 text-[14px] block pb-2">Le classement</NuxtLink>
          <NuxtLink @click="isMenuOpen = false" to="/chronos/tetes" class="nav-link indent-4 font-bold text-gray-500 text-[14px] block pb-2">Chasse au têtes</NuxtLink>
          <a @click="isMenuOpen = false" href="https://projetchronos-shop.tebex.io/" class="nav-link indent-4 font-bold text-gray-500 text-[14px] block pb-2">La boutique</a>

          <h3 class="font-bold text-gray-600 text-[12px] uppercase tracking-widest mt-4 pb-2">Équipes cité</h3>
          <NuxtLink @click="isMenuOpen = false" to="/chronos/ventes" class="nav-link indent-4 font-bold text-gray-500 text-[14px] block pb-2">Les ventes</NuxtLink>
          <NuxtLink @click="isMenuOpen = false" to="/chronos/joueurs" class="nav-link indent-4 font-bold text-gray-500 text-[14px] block pb-2">Les joueurs</NuxtLink>
        </nav>

        <div class="mt-auto pt-6">
          <BannerAdAside />
        </div>
      </aside>

      <div 
        v-if="isMenuOpen" 
        @click="isMenuOpen = false" 
        class="fixed inset-0 bg-black/50 z-30 md:hidden"
      ></div>

      <main class="flex-1 p-4 sm:p-8 w-full dark:bg-neutral-800 min-h-[120vh]">
        <slot />
      </main>
    </div>
    
    <CookieBanner />
    <footer class="bg-neutral-900 text-white border-t border-gray-800">
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 place-items-center gap-12 mb-12">
          
          <div class="space-y-4  text-center sm:text-left">
            <h3 class="text-gray-100 font-bold text-sm uppercase">Projet Chronos</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Nous sommes un groupe de pote passionés de ce jeu cubique qui est Minecraft. <br/>
              Nous donnons de notre temps et de notre énergie pour continuer à faire vivre la communauté Minecraft Française.
            </p>
          </div>

          <div class="space-y-4">
            <h3 class="text-gray-100 font-bold text-sm uppercase">Juridique</h3>
            <ul class="space-y-2 text-gray-500 text-sm">
              <li><NuxtLink to="/chronos/mentions-legales" class="hover:text-orange-800 transition-colors">Mentions Légales</NuxtLink></li>
              <li><NuxtLink to="/chronos/confidentialite" class="hover:text-orange-800 transition-colors">Politique de Confidentialité</NuxtLink></li>
              <li><NuxtLink to="/chronos/cgu" class="hover:text-orange-800 transition-colors">CGU</NuxtLink></li>
              <li>
                <button 
                  @click="openCookieSettings" 
                  class="hover:text-orange-800 transition-colors text-left"
                >
                  Modifier les paramètres cookies
                </button>
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="text-gray-100 font-bold text-sm uppercase">Nous contacter</h3>
            <p class="text-gray-500 text-sm">Un problème ? Une question ?</p>
            <a href="mailto:projetchronosofficiel@gmail.com" class="block text-orange-800 font-bold text-sm hover:underline">
              projetchronosofficiel@gmail.com
            </a>
            <div class="flex space-x-4 pt-2 place-items-center">
              <a href="https://www.instagram.com/projetchronosofficiel" class="text-gray-400 hover:text-white transition-colors text-xs uppercase font-black">
                <img src="/logoInstagram.png" class="w-9 h-9 inline-block mr-1 -mt-0.5" />
              </a>
              <a href="https://www.tiktok.com/@projetchronosofficial" class="text-gray-400 hover:text-white transition-colors text-xs uppercase font-black">
                <img src="/logoTikTok.png" class="w-9 h-9 inline-block mr-1 -mt-0.5" />
              </a>
              <a href="https://youtube.com/@projetchronos" class="text-gray-400 hover:text-white transition-colors text-xs uppercase font-black">
                <img src="/logoYoutube.png" class="w-9 h-7 inline-block mr-1 -mt-0.5" />
              </a>
              <a href="https://x.com/Projet_Chronos" class="text-gray-400 hover:text-white transition-colors text-xs uppercase font-black">
                <img src="/logoX.png" class="w-9 h-9 inline-block mr-1 -mt-0.5" />
              </a>
            </div>
          </div>

        </div>

        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-600 text-[12px] uppercase tracking-widest">
            © 2026 PROJET CHRONOS — TOUS DROITS RÉSERVÉS
          </p>
          <p class="text-gray-600 text-[12px] uppercase tracking-widest italic">
            Propulsé par Projet Chonos
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import BannerAdAside from '~/components/BannerAdAside.vue'

const isMenuOpen = ref(false)

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

const showBanner = useState('showCookieBanner')

const openCookieSettings = () => {
  showBanner.value = true
}
</script>
