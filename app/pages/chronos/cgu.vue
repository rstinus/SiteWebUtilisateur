<template>
  <div class="min-h-screen bg-gray-50 dark:bg-neutral-800 flex flex-col transition-colors duration-300">
    <div class="flex-1 container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 gap-4">
            <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 border-l-4 border-orange-700 pl-4">
                Conditions Générales d'Utilisation
            </h1>
        </div>

      <div class="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 space-y-8 text-gray-700 dark:text-gray-300">
        
        <section>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3">1. Objet</h2>
          <p class="text-sm leading-relaxed">
            Les présentes CGU ont pour objet d'encadrer l'accès et l'utilisation du site <strong>Projet Chronos</strong>. En naviguant sur le site, vous acceptez sans réserve ces conditions.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3">2. Services fournis</h2>
          <p class="text-sm leading-relaxed">
            Projet Chronos est un projet communautaire lié au jeu Minecraft. Le site fournit des informations sur le serveur, le classement des joueurs, le wiki des évenements etpermet l'accès à la boutique ou des services liés au projet.
          </p>
        </section>

        <section>
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3">3. Comportement de l'utilisateur</h2>
            <p class="text-sm leading-relaxed">
                L'utilisateur s'engage à utiliser le site et ses services de manière respectueuse. Toute utilisation abusive du site et des autres services est strictement interdite. Cela inclut, les comportements suivants : <br/>
            </p>
            <ul class="list-disc list-inside text-sm leading-relaxed">
                <li>Tentative de piratage ou d'intrusion dans le site.</li>
                <li>Tentative de perturber le fonctionnement du site (ex: attaques DDoS).</li>
                <li>Tentative de vol de données ou d'informations sensibles.</li>
            </ul>  
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3">4. Responsabilité</h2>
          <p class="text-sm leading-relaxed">
            L'équipe de Projet Chronos s'efforce de maintenir le site accessible, mais ne peut être tenue responsable en cas d'interruption de service, de bugs ou de pertes de données.
          </p>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'chronos' })
</script>