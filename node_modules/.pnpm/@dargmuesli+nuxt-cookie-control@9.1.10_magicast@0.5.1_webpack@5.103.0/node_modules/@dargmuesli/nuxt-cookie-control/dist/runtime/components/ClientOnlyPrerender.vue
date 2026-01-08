<template>
  <slot v-if="!isPrerendered" />
  <ClientOnly v-else>
    <slot />
  </ClientOnly>
</template>

<script setup>
import { useRuntimeConfig } from "#app";
const runtimeConfig = useRuntimeConfig();
const isPrerendered = runtimeConfig.public.cookieControl._isPrerendered;
</script>
