<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl mb-4">Choisis ton univers :</h1>

    <div class="flex gap-10">
      <div class="cursor-pointer" @click="choose('chronos')">
        <img src="/chronos.png" class="w-48 rounded shadow" />
        <p class="text-center mt-2">Chronos</p>
      </div>

      <div class="cursor-pointer" @click="choose('zenora')">
        <img src="/zenora.png" class="w-48 rounded shadow" />
        <p class="text-center mt-2">Zenora</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function choose(choice) {
  const keep = window.confirm("Voulez-vous conserver ce choix ?")
  if (keep) localStorage.setItem("site_choice", choice)
  router.push("/" + choice)
}
</script>
