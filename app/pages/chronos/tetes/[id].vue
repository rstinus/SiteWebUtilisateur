<template>
    <div class="p-6">
        <div v-if="!user?.team || pending" class="text-center py-10">
            <p class="animate-pulse text-gray-400 font-bold uppercase">
                Veuillez vous connecter pour lire cette page
            </p>
        </div>

        <div
            v-else-if="error"
            class="max-w-md mx-auto text-center p-10 bg-red-50 border-2 border-dashed border-red-200 rounded-3xl"
        >
            <div class="text-6xl mb-4">🔒</div>
            <h1 class="text-xl font-black text-red-600 uppercase mb-2">
                Accès Refusé
            </h1>
            <p class="text-red-400 text-sm font-bold mb-6 italic">
                {{ error.statusMessage }}
            </p>
            <NuxtLink
                to="/chronos/tetes"
                class="bg-red-600 text-white px-6 py-2 rounded-lg font-bold uppercase text-xs"
            >
                Retour à la chasse
            </NuxtLink>
        </div>

        <div
            v-else-if="res?.data"
            class="max-w-2xl mx-auto text-center bg-white p-8 rounded-3xl shadow-xl border-t-4 border-green-500"
        >
            <img
                :src="`https://mc-heads.net/avatar/${headId}/128.png`"
                class="w-32 h-32 mx-auto mb-4 drop-shadow-md"
            />
            <h1 class="text-3xl font-black uppercase">
                {{ res.data.nomObjectif }}
            </h1>
            <p class="text-green-500 font-bold mb-6 italic text-sm">
                ✓ DÉCOUVERTE TERMINÉE
            </p>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "chronos",
});
const route = useRoute();
const user = useState("user");

const {
    data: res,
    error,
    pending,
} = await useFetch(
    () => {
        if (!user.value?.team) return null;

        // On envoie l'ID de la tête et le NOM de la team
        return `/api/head-detail?id=${route.params.id}&idTeam=${user.value.team}`;
    },
    {
        watch: [user],
    },
);
const headId = route.params.id;
</script>
