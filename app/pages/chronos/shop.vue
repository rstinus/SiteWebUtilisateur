<template>
  <div class="space-y-6">
    <div class="flex justify-between items-end mb-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Le Shop de la Cité</h1>
        <p class="text-gray-500">Achetez les ressources nécessaires pour votre survie.</p>
      </div>
      <div class="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold border border-red-100">
        Monnaie : Engrenage
      </div>
    </div>

    <div v-if="pending" class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="i in 6" :key="i" class="h-48 bg-gray-100 animate-pulse rounded-2xl"></div>
    </div>

    <div v-else-if="items && items.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in items" :key="item.id" class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
        <div class="flex items-start justify-between mb-4">
          <div class="bg-gray-50 p-4 rounded-xl group-hover:bg-red-50 transition-colors">
            <span class="text-3xl">📦</span>
          </div>
          <div class="text-right">
            <span class="block text-2xl font-black text-gray-800">{{ item.price}}</span>
            <span class="text-xs font-bold text-gray-400 uppercase">Prix</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold text-gray-800 mb-1 capitalize">
            {{ item.material || item.name || 'Article sans nom' }}
          </h3>
          <p class="text-sm text-gray-400 mb-4">Disponible immédiatement au spawn.</p>
        </div>

        <button class="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-red-600 transition-colors">
          Achetable en jeu
        </button>
      </div>
    </div>

    <div v-else class="bg-white p-12 rounded-2xl border-2 border-dashed border-gray-200 text-center">
      <p class="text-gray-400">Le shop est actuellement vide ou fermé.</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'chronos'
})

// On appelle l'API que tu as créée dans server/api/shop.ts
const { data: items, pending } = await useFetch('/api/shop')
</script>