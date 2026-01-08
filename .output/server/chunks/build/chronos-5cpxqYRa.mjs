import { _ as __nuxt_component_0 } from './nuxt-link-B5o38ai7.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useHead } from './composables-DpfodX0M.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = {
  __name: "chronos",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      style: [
        {
          children: `
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
      `
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col chronos-theme" }, _attrs))}><header class="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl"><div class="container mx-auto px-4 py-4"><nav class="flex justify-between items-center"><div class="flex items-center space-x-3"><div class="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h1 class="text-2xl font-bold tracking-tight">Projet Chronos</h1></div><div class="flex items-center space-x-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/chronos",
        class: ["hover:text-red-400 transition-colors", { "text-red-400 font-semibold": _ctx.$route.path === "/chronos" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tableau de bord `);
          } else {
            return [
              createTextVNode(" Tableau de bord ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition-colors"> Nouvelle Tâche </button></div></nav></div></header><div class="flex flex-1"><aside class="w-64 bg-gray-50 border-r border-gray-200 p-6"><nav class="space-y-2"><h3 class="font-semibold text-gray-500 text-sm uppercase tracking-wider mb-4">Projets</h3><a href="#" class="block p-2 rounded hover:bg-gray-100">Frontend</a><a href="#" class="block p-2 rounded hover:bg-gray-100">Backend</a><a href="#" class="block p-2 rounded hover:bg-gray-100">Design</a><h3 class="font-semibold text-gray-500 text-sm uppercase tracking-wider mt-8 mb-4">Équipes</h3><a href="#" class="block p-2 rounded hover:bg-gray-100">Développement</a><a href="#" class="block p-2 rounded hover:bg-gray-100">Marketing</a></nav></aside><main class="flex-1 p-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div><footer class="bg-gray-900 text-white border-t border-gray-800"><div class="container mx-auto px-6 py-6"><div class="flex justify-between items-center"><div><p class="text-gray-400 text-sm">© 2024 Projet Chronos - Gestion de temps avancée</p></div><div class="flex items-center space-x-6"><span class="text-gray-400 text-sm">Statut:</span><div class="flex items-center"><div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div><span class="text-sm">Tous systèmes opérationnels</span></div></div></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/chronos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chronos-5cpxqYRa.mjs.map
