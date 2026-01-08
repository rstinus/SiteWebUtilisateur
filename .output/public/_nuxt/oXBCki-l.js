import{_ as a}from"./DbRPfkCn.js";import{c as n,o as l,a as s,e as o,b as i,w as d,d as c,n as p,P as m,r as h}from"./l_vXkkhS.js";import{u as g}from"./CDa5qZsQ.js";const x={class:"min-h-screen flex flex-col chronos-theme"},v={class:"w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl"},f={class:"container mx-auto px-4 py-4"},u={class:"flex justify-between items-center"},b={class:"flex items-center space-x-6"},y={class:"flex flex-1"},k={class:"flex-1 p-8"},B={__name:"chronos",setup(_){return g({style:[{children:`
        .chronos-theme {
          --primary-color: #dc2626;
          --secondary-color: #1f2937;
        }

        .chronos-theme a.active {
          position: relative;
        }

        .chronos-theme a.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--primary-color);
        }
      `}]}),(t,e)=>{const r=a;return l(),n("div",x,[s("header",v,[s("div",f,[s("nav",u,[e[2]||(e[2]=o('<div class="flex items-center space-x-3"><div class="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h1 class="text-2xl font-bold tracking-tight">Projet Chronos</h1></div>',1)),s("div",b,[i(r,{to:"/chronos",class:p(["hover:text-red-400 transition-colors",{"text-red-400 font-semibold":(t._.provides[m]||t.$route).path==="/chronos"}])},{default:d(()=>[...e[0]||(e[0]=[c(" Tableau de bord ",-1)])]),_:1},8,["class"]),e[1]||(e[1]=s("button",{class:"bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition-colors"}," Nouvelle Tâche ",-1))])])])]),s("div",y,[e[3]||(e[3]=o('<aside class="w-64 bg-gray-50 border-r border-gray-200 p-6"><nav class="space-y-2"><h3 class="font-semibold text-gray-500 text-sm uppercase tracking-wider mb-4">Projets</h3><a href="#" class="block p-2 rounded hover:bg-gray-100">Frontend</a><a href="#" class="block p-2 rounded hover:bg-gray-100">Backend</a><a href="#" class="block p-2 rounded hover:bg-gray-100">Design</a><h3 class="font-semibold text-gray-500 text-sm uppercase tracking-wider mt-8 mb-4">Équipes</h3><a href="#" class="block p-2 rounded hover:bg-gray-100">Développement</a><a href="#" class="block p-2 rounded hover:bg-gray-100">Marketing</a></nav></aside>',1)),s("main",k,[h(t.$slots,"default")])]),e[4]||(e[4]=o('<footer class="bg-gray-900 text-white border-t border-gray-800"><div class="container mx-auto px-6 py-6"><div class="flex justify-between items-center"><div><p class="text-gray-400 text-sm">© 2024 Projet Chronos - Gestion de temps avancée</p></div><div class="flex items-center space-x-6"><span class="text-gray-400 text-sm">Statut:</span><div class="flex items-center"><div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div><span class="text-sm">Tous systèmes opérationnels</span></div></div></div></div></footer>',1))])}}};export{B as default};
