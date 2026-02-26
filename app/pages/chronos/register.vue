<template>
  <div class="dark:bg-neutral-900">
    <div class="min-h-[70vh] flex items-center justify-center py-10 px-4">
      <div class="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-2xl dark:bg-neutral-800">

        <div class="grid grid-cols-1 md:grid-cols-5 items-center gap-12 mb-12 w-full">
          <div class="flex justify-start span-full md:col-span-1">
              <button 
                  type="button" 
                  @click="navigateTo('/chronos')"
                  class="group flex items-center gap-2 px-6 py-3 bg-orange-800 hover:bg-amber-900 text-white rounded-xl font-bold transition-all active:scale-95"
              >
                  <span class="transition-transform group-hover:-translate-x-1">←</span>
                  Retour Accueil
              </button>
          </div>

          <div class="text-center span-full md:col-span-3">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-900 text-white text-3xl mb-4">
                  <img src="/logoProjetChronos.png" alt="Logo Chronos" class="w-12" />
              </div>
              <h1 class="text-2xl font-black text-gray-800 dark:text-gray-300">Cité Engrenages</h1>
              <p class="text-gray-500 dark:text-gray-400">Créez votre équipe pour l'aventure</p>
          </div>

          <div class="md:col-span-1 flex justify-end">
            <DarkLightMode/>
          </div>
        </div>

        <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div class="space-y-2">
            <label class="block text-sm font-bold text-gray-700 ml-1 dark:text-gray-400">Pseudo Minecraft du chef d'équipe</label>
            <input 
              v-model="form.username1" 
              type="text"
              placeholder="Ex: Vikings92" 
              class="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-neutral-200 dark:border-neutral-600 dark:focus:bg-neutral-600 dark:focus:border-neutral-600"
              required 
            />
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-bold text-gray-700 ml-1 dark:text-gray-400">Pseudo Discord du chef d'équipe</label>
            <input 
              v-model="form.usernamediscord" 
              type="text"
              placeholder="Ex: Vikings92" 
              class="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-neutral-200 dark:border-neutral-600 dark:focus:bg-neutral-600 dark:focus:border-neutral-600"
              required 
            />
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-bold text-gray-700 ml-1 dark:text-gray-400">Pseudo Minecraft</label>
            <input 
              v-model="form.username2" 
              type="text"
              placeholder="Ex: oo0kiat" 
              class="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-neutral-200 dark:border-neutral-600 dark:focus:bg-neutral-600 dark:focus:border-neutral-600"
              required 
            />
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-bold text-gray-700 ml-1 dark:text-gray-400">Pseudo Minecraft</label>
            <input 
              v-model="form.username3" 
              type="text"
              placeholder="Ex: Miinnee_" 
              class="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-neutral-200 dark:border-neutral-600 dark:focus:bg-neutral-600 dark:focus:border-neutral-600"
              required 
            />
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-bold text-gray-700 ml-1 dark:text-gray-400">Pseudo Minecraft</label>
            <input 
              v-model="form.username4" 
              type="text"
              placeholder="Ex: wiftIII" 
              class="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-neutral-200 dark:border-neutral-600 dark:focus:bg-neutral-600 dark:focus:border-neutral-600"
              required 
            />
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-bold text-gray-700 ml-1 dark:text-gray-400">Pseudo Minecraft</label>
            <input 
              v-model="form.username5" 
              type="text"
              placeholder="Ex: wild_mogway_ " 
              class="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-neutral-200 dark:border-neutral-600 dark:focus:bg-neutral-600 dark:focus:border-neutral-600"
              required 
            />
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-bold text-gray-700 ml-1 dark:text-gray-400">Préfixe (3 lettres)</label>
            <input 
              v-model="form.prefix" 
              placeholder="Ex: ENG" 
              maxlength="3" 
              pattern="[A-Za-z]{3}"
              class="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all uppercase dark:bg-neutral-200 dark:border-neutral-600 dark:focus:bg-neutral-600 dark:focus:border-neutral-600"
              required 
            />
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-bold text-gray-700 ml-1 dark:text-gray-400">Nom de l'équipe</label>
            <input 
              v-model="form.teamName" 
              type="text"
              placeholder="Ex: Les Engrenages" 
              class="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all dark:bg-neutral-200 dark:border-neutral-600 dark:focus:bg-neutral-600 dark:focus:border-neutral-600"
              required 
            />
          </div>

          <p v-if="errorMessage" class="text-red-500 text-sm font-medium ml-1 md:col-span-2">
            ⚠️ {{ errorMessage }}
          </p>

          <button 
            type="submit" 
            :disabled="loading"
            class="w-full md:col-span-2 py-4 bg-orange-800 hover:bg-amber-900 text-white rounded-xl font-bold transition-all active:scale-95 shadow-lg hover:shadow-red-200 disabled:opacity-50"
          >
            {{ loading ? 'Inscription en cours...' : 'S\'inscrire maintenant' }}
          </button>
        </form>
      </div>
    </div>
    <BannerAd />
  </div>
</template>

<script setup>
const form = ref({
  username1: '',
  usernamediscord: '',
  username2: '',
  username3: '',
  username4: '',
  username5: '',
  teamName: '',
  prefix: ''
});

const loading = ref(false);
const errorMessage = ref('');

const submitForm = async () => {
  loading.value = true;
  errorMessage.value = '';
  
  try {
      const payload = {
      teamName: form.value.teamName,
      prefix: form.value.prefix,
      players: [
        form.value.username1,
        form.value.username2,
        form.value.username3,
        form.value.username4,
        form.value.username5
      ],
      discord: form.value.usernamediscord
    };

    const response = await $fetch('/api/register', {
      method: 'POST',
      body: payload
    });

    await navigateTo('/chronos');
    
  } catch (e) {
    errorMessage.value = e.data?.message || 'Erreur lors de l\'inscription';
  } finally {
    loading.value = false;
  }
};
</script>