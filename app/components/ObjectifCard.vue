<template>
    <div
        class="bg-white p-5 rounded-2xl shadow-sm border-2 transition-all hover:shadow-md flex items-center space-x-5"
        :class="objectif.termine ? 'border-green-500' : 'border-gray-100'"
    >
        <div class="relative">
            <img
                :src="`https://mc-heads.net/avatar/${objectif.valeurCondition}/64.png`"
                alt="Objectif Head"
                class="w-16 h-16 rounded-lg bg-gray-50 border border-gray-100 shadow-sm"
            />
            <div
                v-if="objectif.termine"
                class="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-sm"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
        </div>

        <div class="flex-1">
            <div class="flex justify-between items-start mb-1">
                <h4
                    class="font-black text-gray-800 uppercase text-sm tracking-tight"
                >
                    {{ objectif.nomObjectif }}
                </h4>
                <span
                    class="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-400"
                >
                    ID: {{ objectif.valeurCondition }}
                </span>
            </div>

            <div class="mb-3">
                <template v-if="objectif.lore == 1">
                    <NuxtLink
                        :to="`/chronos/tetes/${objectif.valeurCondition}`"
                        class="inline-block bg-blue-600 text-white text-[10px] px-3 py-1.5 rounded-md font-black uppercase hover:bg-blue-700 transition-all active:scale-95"
                    >
                        VOIR LA FICHE
                    </NuxtLink>
                </template>
                <p v-else class="text-xs text-gray-400 italic line-clamp-1">
                    {{ objectif.lore }}
                </p>
            </div>

            <div class="flex items-center space-x-2">
                <span
                    class="text-[10px] font-black uppercase tracking-widest"
                    :class="
                        objectif.termine ? 'text-green-500' : 'text-red-500'
                    "
                >
                    {{ objectif.termine ? "TROUVÉ" : "NON TROUVÉ" }}
                </span>
                <div
                    class="h-1.5 w-1.5 rounded-full"
                    :class="
                        objectif.termine
                            ? 'bg-green-500'
                            : 'bg-red-500 animate-pulse'
                    "
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    objectif: Object,
});

// Petit log de debug : fais F12 dans ton navigateur pour voir ce que contient 'lore'
// console.log("Lore de l'objectif:", props.objectif.nomObjectif, "Valeur:", props.objectif.lore);
</script>
