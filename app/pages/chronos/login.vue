<template>
  <div class="min-h-[60vh] flex items-center justify-center">
    <div class="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-600 text-white text-3xl mb-4 shadow-lg shadow-red-200">
          ⛏️
        </div>
        <h1 class="text-2xl font-black text-gray-800">Cité Engrenages</h1>
        <p class="text-gray-500">Connectez-vous avec votre pseudo Minecraft</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2 ml-1">Pseudo Minecraft</label>
          <input 
            v-model="pseudo"
            type="text" 
            placeholder="Ex: JeanEude92"
            class="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
            required
          />
        </div>

        <p v-if="errorMessage" class="text-red-500 text-sm font-medium ml-1">
          ⚠️ {{ errorMessage }}
        </p>

        <button 
          type="submit" 
          :disabled="loading"
          class="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-red-600 transition-all shadow-lg hover:shadow-red-200 disabled:opacity-50"
        >
          {{ loading ? 'Vérification...' : 'Rejoindre la Cité' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const pseudo = ref('')
const loading = ref(false)
const errorMessage = ref('')

// On récupère l'état global de connexion
const isLoggedIn = useState('isLoggedIn')
const userTeam = useState('userTeam') // Pour stocker son équipe

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    const response = await $fetch('/api/login', {
      method: 'POST',
      body: { username: pseudo.value }
    })

    if (response.success) {
      const isLoggedIn = useState('isLoggedIn')
      const user = useState('user')
      
      isLoggedIn.value = true
      
      user.value = {
        name: response.player.name,
        uuid: response.player.uuid,
        team: response.player.team
      }
      
      await navigateTo('/chronos')
    }
  } catch (err) {
    errorMessage.value = err.statusMessage || 'Une erreur est survenue'
  } finally {
    loading.value = false
  }
}
</script>