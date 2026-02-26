<template>
  <footer class="bg-gray-900 text-white w-full">
    <div class="container mx-auto px-6 py-16">
      <!-- Top Section - Grid de liens -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        <!-- Brand Column -->
        <div class="space-y-5">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span class="text-xl font-bold">Z</span>
            </div>
            <h2 class="text-2xl font-bold">Zenora</h2>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Votre solution digitale pour une gestion simplifiée et efficace de vos projets.
          </p>
          <div class="flex space-x-4 pt-2">
            <a href="#" class="text-gray-400 hover:text-purple-500 transition-colors duration-200" aria-label="Facebook">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-purple-500 transition-colors duration-200" aria-label="Twitter">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-purple-500 transition-colors duration-200" aria-label="LinkedIn">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links 1 -->
        <div>
          <h3 class="text-base font-semibold mb-5 text-white">Produit</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Fonctionnalités</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Tarifs</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">API</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Documentation</a></li>
          </ul>
        </div>

        <!-- Quick Links 2 -->
        <div>
          <h3 class="text-base font-semibold mb-5 text-white">Entreprise</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">À propos</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Carrières</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Blog</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Presse</a></li>
          </ul>
        </div>

        <!-- Quick Links 3 -->
        <div>
          <h3 class="text-base font-semibold mb-5 text-white">Légal</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Confidentialité</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Conditions d'utilisation</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookies</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Mentions légales</a></li>
          </ul>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="bg-gray-800 rounded-xl p-8 mb-12">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">Restez informé</h3>
            <p class="text-gray-400 text-sm">Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités.</p>
          </div>
          <form class="flex w-full md:w-auto md:min-w-[400px]">
            <input
                type="email"
                placeholder="Votre email"
                class="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 text-sm"
            >
            <button
                type="submit"
                class="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-r-lg transition-colors duration-200 whitespace-nowrap"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p class="text-gray-400 text-sm">
            © 2024 Zenora. Tous droits réservés.
          </p>
          <div class="flex flex-wrap gap-6">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Mentions légales</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Politique de cookies</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">RGPD</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer prêt à l'emploi avec Vue 3 et Nuxt.js
</script>

<style scoped>
footer {
  margin-top: auto;
}
</style>