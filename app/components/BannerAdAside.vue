<template>
  <div class="w-full transition-colors pb-10">
    <div v-if="hasConsent" 
         class="bg-gray-50 dark:bg-neutral-800/50 rounded-2xl p-4 border border-gray-100 dark:border-neutral-700 relative overflow-hidden">
      <h3 class="font-bold text-gray-400 text-[9px] uppercase tracking-widest mb-3 text-center">
        Sponsorisé
      </h3>
      
      <div class="flex justify-center min-h-[100px]">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8835033801649104"
             data-ad-slot="4457333609"
             data-ad-format="auto"
             data-full-width-responsive="true">
        </ins>
      </div>

      <p class="mt-2 text-[10px] text-center text-gray-400 leading-tight">
        Publicité respectueuse
      </p>
    </div>

    <div v-else 
         class="text-[9px] text-center text-gray-400 italic p-4 rounded-xl border border-dashed border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800/50">
      Consentez aux cookies pour soutenir le projet.
    </div>
  </div>
</template>

<script setup>
const consent = useCookie('ncc_c') 
const hasConsent = computed(() => consent.value === true)

const initAd = () => {
  try {
    nextTick(() => {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    })
  } catch (e) {
    console.error("AdSense skipped or blocked:", e)
  }
}

onMounted(() => {
  if (hasConsent.value) {
    initAd()
  }
})

watch(hasConsent, (newVal) => {
  if (newVal) {
    initAd()
  }
})
</script>