<template>
  <div class="min-h-screen bg-gray-50 dark:bg-neutral-800 flex flex-col transition-colors duration-300">
    <div class="flex-1 container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 gap-4">
        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 border-l-4 border-orange-700 pl-4">
          Mentions Légales
        </h1>
      </div>

      <div class="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 space-y-8 text-gray-700 dark:text-gray-300">
        
        <section>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
            1. Édition du site
          </h2>
          <p class="text-sm leading-relaxed">
            Le site <strong>www.projetchronos.fr</strong> est produit et édité par un collectif de particuliers, agissant à titre non professionnel du nom <strong>Projet Chronos</strong>. 
            <br>
            <strong>Responsable du projet :</strong> Rémy STINUS
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
            2. Direction de la publication
          </h2>
          <p class="text-sm">
            Le directeur de la publication est <strong>Monsieur Rémy STINUS</strong>.
            <br>
            <strong>Contact :</strong> vikings92.gaming@gmail.com
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
            3. Hébergement
          </h2>
          <p class="text-sm leading-relaxed">
            Le site est hébergé par la société <strong>OVH</strong>.
            <br>
            SAS au capital de 10 069 020€
            <br>
            RCS Lille Métropole 424 761 419
            <br>
            Siège social : 2 Rue Kellermann, 59100 Roubaix, France.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
            4. Gestion des cookies
          </h2>
          <p class="text-sm leading-relaxed">
            Conformément au RGPD, nous utilisons des cookies pour améliorer votre expérience et financer nos événements via des publicités non intrusives. <br/>
            Vous pouvez modifier vos préférences à tout moment via le module de gestion des cookies présent sur le site.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
            5. Propriété Intellectuelle
          </h2>
          <p class="text-sm leading-relaxed">
            L'ensemble des éléments graphiques, textes et logos présents sur le site sont la propriété exclusive du collectif <strong>Projet Chronos</strong>. Toute reproduction, même partielle, sans accord préalable est interdite. 
            Minecraft est une marque déposée de Mojang Synergies AB, nous ne sommes pas affiliés à Mojang.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'chronos'
})
</script>