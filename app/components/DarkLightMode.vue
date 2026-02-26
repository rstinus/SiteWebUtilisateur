<template>
  <ClientOnly>
    <button 
      @click="toggleColor" 
      class="relative flex items-center w-14 h-8 bg-gray-700 dark:bg-gray-400 rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none"
      aria-label="Basculer le thème"
    >
      <div 
        class="absolute left-1 w-6 h-6 bg-gray-400 dark:bg-gray-700 rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
        :class="$colorMode.value === 'dark' ? 'translate-x-6' : 'translate-x-0'"
      ></div>

      <div class="relative w-full flex justify-between items-center px-1 pointer-events-none">
        
        <svg 
          class="w-4 h-4 transition-colors duration-300 z-10" 
          :class="$colorMode.value === 'dark' ? 'text-gray-900' : 'text-gray-900'"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>

        <svg 
          class="w-4 h-4 transition-colors duration-300 z-10" 
          :class="$colorMode.value === 'dark' ? 'text-gray-400' : 'text-gray-400'"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>

      </div>
    </button>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()

const toggleColor = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>