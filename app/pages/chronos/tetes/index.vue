<script setup>
definePageMeta({
    layout: "chronos",
});

const isLoggedIn = useState("isLoggedIn");
const user = useState("user");
// UN SEUL APPEL : Il récupère les objectifs + l'énigme
const {
    data: res,
    pending,
    error,
    refresh, // On garde refresh pour recharger si le joueur trouve le mot
} = await useFetch(
    () => {
        if (!isLoggedIn.value || !user.value?.team) return null;
        return `/api/objectifs?nomTeam=${encodeURIComponent(user.value.team)}`;
    },
    {
        watch: [isLoggedIn, user],
    },
);

const guess = ref("");
const messageFeedback = ref("");
const isSuccess = ref(false);

const submitGuess = async () => {
    if (!guess.value) return;

    try {
        const response = await $fetch("/api/check-secret", {
            method: "POST",
            body: {
                idTeam: user.value.team,
                guess: guess.value,
            },
        });

        if (response.success) {
            isSuccess.value = true;
            messageFeedback.value = response.message;
            // Optionnel : on rafraîchit les données si besoin
            refresh();
        } else {
            isSuccess.value = false;
            messageFeedback.value = response.message;
        }
    } catch (err) {
        messageFeedback.value = "Erreur lors de l'envoi.";
    }
};

// On extrait les données du résultat unique
const objectifs = computed(() => res.value?.data || []);
// DEUXIÈME FETCH CORRIGÉ
const { data: enigme, refresh: refreshEnigme } = await useFetch(() => {
    const id = user.value?.teamId || user.value?.team;
    if (!id) return null; // Ne fait rien si l'user est vide
    return `/api/patternSecret?idTeam=${id}`;
}, {
    // Valeur affichée pendant que l'user charge ou si pas d'énigme
    default: () => ({ pattern_sent: "Chargement de l'énigme..." }),
    watch: [user] // Re-lance la requête dès que 'user' change
});

// Pour débugger, utilise un watcher plutôt qu'un log direct
watch(user, (newUser) => {
    console.log("L'utilisateur est maintenant chargé :", newUser);
}, { deep: true });
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="error" class="bg-red-100 text-red-700 p-4 rounded mb-4">
      Impossible de charger les objectifs.
    </div>

    <div class="flex flex-col md:flex-row gap-8 items-start">
      
      <div class="flex-1 w-full">
        
        <div v-if="isLoggedIn">
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold">Chasse aux Têtes</h1>
            <div class="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">
              Équipe : {{ user?.team }}
            </div>
          </div>

          <div v-if="!pending" class="mb-8 p-6 bg-gray-900 text-white rounded-2xl shadow-xl border border-blue-500/30">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2"><span class="text-2xl">🧩</span> L'Énigme du Lore</h2>
            <div class="text-4xl font-mono tracking-widest text-center my-6 text-blue-400 uppercase">
              {{ enigme?.pattern_sent }}
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
              <input v-model="guess" type="text" placeholder="Entrez votre réponse..." class="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" @keyup.enter="submitGuess" />
              <button @click="submitGuess" class="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold text-white">Valider</button>
            </div>
            <p v-if="messageFeedback" :class="['mt-4 text-sm font-bold', isSuccess ? 'text-green-400' : 'text-red-400']">{{ messageFeedback }}</p>
          </div>

          <div v-if="pending" class="text-center py-10">
            <p class="animate-pulse text-gray-400 text-xl">Chargement des données...</p>
          </div>
          <div v-else-if="objectifs.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <ObjectifCard v-for="(obj, index) in objectifs" :key="index" :objectif="obj" />
          </div>
          <div v-else class="bg-white dark:bg-neutral-800 p-10 rounded-xl border border-gray-100 dark:border-neutral-700 text-center text-gray-500">
            Aucun objectif trouvé pour l'équipe "{{ user?.team }}".
          </div>
        </div>

        <div v-else class="bg-gray-50 dark:bg-neutral-800 border-2 border-dashed border-gray-200 dark:border-neutral-700 rounded-3xl p-20 text-center">
          <div class="text-6xl mb-6">🛡️</div>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Accès Restreint</h2>
          <p class="text-gray-500 mb-6">Veuillez vous connecter pour accéder au contenu.</p>
          <NuxtLink to="/chronos/login" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">Se connecter</NuxtLink>
        </div>
      </div>

      <aside class="w-full md:w-64 flex-shrink-0 sticky top-24">
        <BannerAdRight />
        <div class="mt-4 p-4 bg-orange-50 dark:bg-neutral-800 rounded-xl text-[10px] text-orange-800 dark:text-orange-300">
          💡 <b>Astuce :</b> Les têtes trouvées rapportent des points bonus à ton équipe !
        </div>
      </aside>

    </div>
  </div>
</template>
