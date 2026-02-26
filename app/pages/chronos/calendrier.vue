<template>
  <div class="space-y-8">
    <div class="grid grid-cols-1 gap-4">
      <h1 class="text-3xl font-bold text-gray-800 tracking-tight dark:text-white text-center sm:text-left">Planning des évènements Projet Chronos</h1>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-between w-full gap-4 mb-8 md:items-end">
      <div class="w-full md:w-64">
        <label class="block text-[10px] uppercase font-black text-gray-400 mb-1 ml-1">
          Filtrer par type
        </label>
        <div class="relative">
          <select 
            v-model="selectedType"
            class="w-full bg-white border border-gray-200 text-gray-700 dark:text-gray-400 py-2 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all appearance-none cursor-pointer font-bold text-sm dark:bg-neutral-700"
          >
            <option v-for="cat in allCategories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <span class="text-xs">▼</span>
          </div>
        </div>
      </div>

      <div class="flex-1 text-center">
        <p class="text-gray-600 font-medium text-sm bg-gray-50 px-4 py-2 rounded-full inline-block border border-gray-100 shadow-sm dark:text-gray-400 dark:bg-neutral-700">
          <span class="text-gray-900 font-black dark:text-gray-300">{{ filteredEvents?.length || 0 }}</span> 
          évènement planifié
          <br/>
          Semaine du {{ weekDays[0].date }} au {{ weekDays[6].date }}
        </p>
      </div>

      <div class="navigation-semaine flex gap-4">
        <button @click="modifierSemaine(-1)" class="p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-gray-100 text-white">◄</button>
        <button @click="modifierSemaine(1)" class="p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-gray-100 text-white">►</button>
      </div>

      <div class="hidden md:block md:w-64"></div>

    </div>


    <div class="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden dark:bg-neutral-700 block md:show p-4 space-y-6 hidden md:block">
      <div class="overflow-x-auto">
        <div class="min-w-[1000px] p-6">
          <div class="flex border-b border-gray-100 pb-4 mb-2">
            <div class="w-32 flex-shrink-0 font-black text-gray-400 uppercase text-xs tracking-widest">
              Jour / Heure
            </div>
            <div class="flex-1 relative h-6">
              <div 
                v-for="hour in hours" 
                :key="hour" 
                class="absolute text-[10px] font-mono text-gray-400 -translate-x-1/2 whitespace-nowrap"
                :style="{ left: getLeftOffset(hour) + '%' }"
              >
                {{ hour }}:00
              </div>
            </div>
          </div>

          <div class="space-y-2 relative">
            <div v-for="day in weekDays" :key="day.date" class="flex items-center group h-20">
              
              <div class="w-32 flex-shrink-0">
                <p class="font-black text-gray-800 text-sm leading-tight dark:text-gray-400">{{ day.name }}</p>
                <p class="text-xs text-orange-800 font-bold">{{ day.date }}</p>
              </div>

              <div class="flex-1 h-full bg-gray-50/50 rounded-2xl relative border border-gray-50 group-hover:bg-gray-50 transition-colors dark:bg-neutral-700 dark:border-neutral-600 dark:hover:bg-neutral-600">
                <div class="absolute inset-0 flex justify-between pointer-events-none">
                  <div v-for="n in hours.length" :key="n" class="h-full border-l border-gray-100/50 w-full"></div>
                </div>

                <div 
                  v-for="event in getEventsByDay(day.date)" 
                  :key="event.id"
                  :class="[
                    'absolute top-2 bottom-2 shadow-sm p-2 flex flex-col justify-center overflow-hidden transition-all z-10',
                    event.colorClass,
                    event.start === 0 ? 'rounded-r-xl' : 'rounded-xl border-l-4',
                    event.end === 24 ? 'rounded-l-xl' : 'rounded-xl'
                  ]"
                  :style="{ 
                    left: getLeftOffset(event.start) + '%', 
                    width: getWidth(event.start, event.end) + '%' 
                  }"
                >
                  <p class="text-[9px] uppercase font-black opacity-70 leading-none mb-1">{{ event.category }}</p>
                  <h3 class="font-bold text-[11px] leading-tight truncate">{{ event.title }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block md:hidden p-4 space-y-6">
      <div v-for="day in weekDays" :key="day.date" class="space-y-3">
        <div class="flex items-center gap-2 border-b border-gray-100 dark:border-neutral-600 pb-2">
          <span class="font-black text-gray-800 dark:text-gray-200 capitalize">{{ day.name }}</span>
          <span class="text-xs text-orange-800 font-bold bg-orange-50 px-2 py-0.5 rounded-full">{{ day.date }}</span>
        </div>

        <div class="space-y-2">
          <div v-if="getEventsByDay(day.date).length === 0" class="text-xs text-gray-400 italic py-2">
            Aucun évènement
          </div>
          
          <div 
            v-for="event in getEventsByDay(day.date)" 
            :key="event.id"
            :class="[
              'p-3 rounded-xl border-l-4 shadow-sm flex flex-col justify-center',
              event.colorClass
            ]"
          >
            <div class="flex justify-between items-start mb-1">
              <span class="text-[10px] uppercase font-black opacity-70">{{ event.category }}</span>
              <span class="text-[10px] font-mono font-bold bg-white/50 px-2 rounded">
                {{ formatHeure(event.start) }} - {{ formatHeure(event.end) }}
              </span>
            </div>
            <h3 class="font-bold text-sm leading-tight text-gray-900">{{ event.title }}</h3>
          </div>
        </div>
      </div>
    </div>

    <BannerAd />
  </div>
</template>

<script setup>
definePageMeta({ layout: 'chronos' })

const startScale = 0
const endScale = 24
const hours = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]

const modifierSemaine = (direction) => {
  const nouvelleDate = new Date(startDate.value);
  nouvelleDate.setDate(nouvelleDate.getDate() + (direction * 7));
  startDate.value = nouvelleDate;
};

const getMonday = (d) => {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff)).setHours(0, 0, 0, 0);
}

const startDate = ref(new Date(getMonday(new Date())));

const endDate = computed(() => {
  const date = new Date(startDate.value);
  date.setDate(date.getDate() + 6);
  return date.toISOString().split('T')[0];
});

const weekDays = computed(() => {
  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startDate.value);
    day.setDate(day.getDate() + i);
    
    return {
      name: day.toLocaleDateString('fr-FR', { weekday: 'long' }),
      date: day.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }),
      fullDate: day.toISOString().split('T')[0]
    };
  });
});

const categoryStyles = {
  'Fallen Kingdom': 'bg-blue-100 text-blue-800 border-blue-500',
  'Cité': 'bg-red-100 text-red-800 border-red-500',
  'default': 'bg-green-100 text-green-800 border-green-500',
  '': 'bg-pink-100 text-pink-800 border-pink-500',
  '': 'bg-gray-300 text-gray-800 border-gray-400'
}

const selectedType = ref('Tous')
const { data: categories } = await useFetch('/api/EventList')

const allCategories = computed(() => {
  const rawData = categories.value || []
  return ['Tous', ...new Set(rawData)]
})

const { data: allEvents, refresh } = await useFetch('/api/calendarEvent', {
  query: { 
    start: computed(() => startDate.value.toISOString().split('T')[0]),
    end: endDate,
    type: selectedType
  }
});

const filteredEvents = computed(() => {
  if (!allEvents.value) return []
  if (selectedType.value === 'Tous') return allEvents.value
  
  return allEvents.value.filter(event => event.category === selectedType.value)
})

const getEventsByDay = (dateString) => {
  const dayData = weekDays.value.find(d => d.date === dateString);
  if (!dayData) return [];
  
  const targetDate = dayData.fullDate;

  return filteredEvents.value.map(event => {
    const startDateRaw = event.fullStartDate.replace('T', ' ').replace('Z', '');
    const endDateRaw = event.fullEndDate.replace('T', ' ').replace('Z', '');
    
    const eventStart = new Date(startDateRaw);
    const eventEnd = new Date(endDateRaw);
    
    const eventStartDateStr = event.fullStartDate.split('T')[0];
    const eventEndDateStr = event.fullEndDate.split('T')[0];

    if (targetDate >= eventStartDateStr && targetDate <= eventEndDateStr) {
      let start = 0;
      let end = 24;

      if (targetDate === eventStartDateStr) {
        start = eventStart.getHours() + (eventStart.getMinutes() / 60);
      }
      if (targetDate === eventEndDateStr) {
        end = eventEnd.getHours() + (eventEnd.getMinutes() / 60);
      }

      return { 
        ...event, 
        start, 
        end,
        colorClass: categoryStyles[event.category] || categoryStyles['default']
      };
    }
    return null;
  }).filter(e => e !== null);
}

const formatHeure = (decimalHour) => {
  const h = Math.floor(decimalHour);
  const m = Math.round((decimalHour - h) * 60);
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

const getLeftOffset = (start) => ((start - startScale) / (endScale - startScale)) * 100
const getWidth = (start, end) => ((end - start) / (endScale - startScale)) * 100
</script>

<style scoped>
::-webkit-scrollbar { height: 8px; }
::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: #ef4444; }
</style>