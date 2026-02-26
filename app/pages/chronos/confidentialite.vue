<template>
  <div class="min-h-screen bg-gray-50 dark:bg-neutral-800 flex flex-col transition-colors duration-300">
    <div class="flex-1 container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 gap-4">
            <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 border-l-4 border-orange-700 pl-4">
                Politique de Confidentialité
            </h1>
        </div>

      <div class="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 space-y-8 text-gray-700 dark:text-gray-300">
        
        <section>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3">1. Collecte des données</h2>
          <p class="text-sm leading-relaxed">
            Nous collectons un minimum de données. Il peut s'agir de votre adresse IP (via les logs serveur) ou de votre pseudo Minecraft et/ou discord si vous utilisez nos services de classement ou de boutique.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3">2. Cookies</h2>
          <p class="text-sm leading-relaxed">
            Nous utilisons des cookies pour :
          </p>
          <ul class="list-disc pl-6 text-sm mt-2 space-y-1">
            <li>Mémoriser votre choix de consentement (Cookie <strong>ncc_c</strong>).</li>
            <li>Enregistrer vos préférences de cookies (Cookie <strong>ncc_e</strong>).</li>
            <li>Afficher des publicités non ciblées pour financer nos serveurs.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3">3. Finalité des données</h2>
          <p class="text-sm leading-relaxed">
            Vos données ne sont jamais vendues à des tiers. Elles servent exclusivement au bon fonctionnement technique de Projet Chronos et à la gestion de la communauté.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3">4. Vos droits</h2>
          <p class="text-sm leading-relaxed">
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. <br/>
            Pour toute demande, contactez-nous par mail 
            <a href="mailto:projetchronosofficiel@gmail.com" class="text-orange-700 hover:underline">projetchronosofficiel@gmail.com</a>.
          </p>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'chronos' })
</script>