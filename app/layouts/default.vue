<!-- layouts/default.vue -->
<template>
  <div>
    <!-- Header spécifique à chaque section -->
    <slot name="header" />

    <!-- Contenu principal -->
    <main>
      <slot />
    </main>

    <!-- Footer spécifique à chaque section -->
    <slot name="footer" />
  </div>
</template>