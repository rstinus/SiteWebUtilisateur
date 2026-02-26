<template>
  <ClientOnly>
    <div v-if="showBanner" class="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-96 z-50">
      <div class="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-6 text-gray-900 dark:text-white">
        <h3 class="text-lg font-bold mb-2">🍪 Cookies sur Projet Chronos</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          On utilise des cookies pour que ton aventure sur le serveur soit la plus fluide possible.
          Afin de nous aider dans le financement des events nous avons décider de mettre des publicités non ciblées sur le site
          (pas de panique elles sont placées à des stratégique qui ne vous gênes pas dans la navigation).
        </p>
        
        <div class="flex flex-col gap-2">
          <button 
            @click="handleAcceptAll"
            class="w-full bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded transition-all active:scale-95"
          >
            Tout accepter
          </button>
          
          <button 
            @click="handleDenyAll"
            class="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-2 px-4 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-all active:scale-95"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const { isConsentGiven, cookiesEnabledIds, moduleOptions } = useCookieControl()

const cookieConsent = useCookie('ncc_c') 
const cookieEnabled = useCookie('ncc_e')

const showBanner = useState('showCookieBanner', () => cookieConsent.value === undefined)

const handleAcceptAll = () => {
  const allIds = moduleOptions.cookies.optional.map(c => c.id)
  isConsentGiven.value = true
  cookiesEnabledIds.value = allIds
  cookieConsent.value = 'true'
  cookieEnabled.value = allIds.join(',')
  showBanner.value = false
}

const handleDenyAll = () => {
  isConsentGiven.value = true
  cookiesEnabledIds.value = []
  cookieConsent.value = 'false'
  cookieEnabled.value = ''
  showBanner.value = false
}
</script>