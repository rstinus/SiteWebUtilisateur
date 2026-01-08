<!-- layouts/zenora.vue -->
<template>
  <div class="min-h-screen flex flex-col zenora-theme">
    <!-- Header Zenora -->
    <header class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex justify-between items-center">
          <!-- Logo Zenora -->
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span class="text-blue-600 font-bold text-xl">Z</span>
            </div>
            <h1 class="text-2xl font-bold">Zenora</h1>
          </div>

          <!-- Navigation spécifique Zenora -->
          <div class="space-x-6">
            <NuxtLink
                to="/users/profil"
                class="hover:underline"
                :class="{ 'font-semibold underline': $route.path.startsWith('/zenora/profile') }"
            >
              Mon Profil
            </NuxtLink>
            <NuxtLink
                to="/zenora/contact"
                class="hover:underline"
                :class="{ 'font-semibold underline': $route.path.startsWith('/zenora/profile') }"
            >
              Contact
            </NuxtLink>
          </div>
        </nav>
      </div>
    </header>

    <!-- Contenu principal -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- Footer Zenora -->
    <footer class="bg-gray-900 text-white">
      <div class="container mx-auto px-6 py-8">
        <div class="text-center">
          <p class="text-gray-400">© 2024 Zenora - Application de bien-être et méditation</p>
          <div class="mt-4 space-x-4">
            <a href="/mentions-legales" class="text-gray-400 hover:text-white">Mentions légales</a>
            <a href="/confidentialite" class="text-gray-400 hover:text-white">Confidentialité</a>
            <a href="/contact" class="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Style global pour Zenora
useHead({
  style: [
    {
      children: `
        .zenora-theme {
          --primary-color: #6366f1;
          --secondary-color: #8b5cf6;
        }

        .zenora-theme a {
          transition: all 0.2s ease;
        }
      `
    }
  ]
})
</script>