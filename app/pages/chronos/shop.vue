<template>
  <div class="space-y-6 px-2 sm:px-0"> <div class="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end mb-8">
      <div>
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800">Le Shop de la Cité</h1>
        <p class="text-sm sm:text-base text-gray-500">Ressources nécessaires pour votre survie.</p>
      </div>
      <div class="self-start sm:self-auto bg-red-50 text-red-600 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border border-red-100 flex items-center gap-2">
        <span class="text-lg">⚙️</span> Monnaie : Engrenage
      </div>
    </div>

    <div v-if="pending" class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      <div v-for="i in 6" :key="i" class="h-40 sm:h-48 bg-gray-100 animate-pulse rounded-2xl"></div>
    </div>

    <div v-else-if="items && items.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <div v-for="item in items" :key="item.id" class="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
        <div class="flex items-center justify-between mb-4"> <div class="bg-gray-50 p-3 sm:p-4 rounded-xl group-hover:bg-red-50 transition-colors">
            <span class="text-2xl sm:text-3xl">📦</span>
          </div>
          <div class="text-right">
            <span class="block text-xl sm:text-2xl font-black text-gray-800 leading-none">{{ item.price }}</span>
          </div>
        </div>
        
        <div class="mb-4">
          <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-1 capitalize truncate">
            {{ item.material || item.name || 'Article' }}
          </h3>
          <p class="text-xs sm:text-sm text-gray-400 leading-tight">Disponible au spawn.</p>
        </div>

        <button class="w-full py-3 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-red-600 active:scale-95 transition-all">
          Achetable en jeu
        </button>
      </div>
    </div>

    <div v-else class="bg-white p-8 sm:p-12 rounded-2xl border-2 border-dashed border-gray-200 text-center">
      <p class="text-gray-400 text-sm">Le shop est actuellement vide ou fermé.</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'chronos'
})

const { data: items, pending } = await useFetch('/api/shop')
</script>