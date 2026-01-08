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
  __name: "zenora",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      style: [
        {
          children: `
        .zenora-theme {
          --primary-color: #6366f1;
          --secondary-color: #8b5cf6;
        }

        .zenora-theme a {
          transition: all 0.2s ease;
        }
      `
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col zenora-theme" }, _attrs))}><header class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"><div class="container mx-auto px-4 py-4"><nav class="flex justify-between items-center"><div class="flex items-center space-x-3"><div class="w-10 h-10 bg-white rounded-full flex items-center justify-center"><span class="text-blue-600 font-bold text-xl">Z</span></div><h1 class="text-2xl font-bold">Zenora</h1></div><div class="space-x-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/users/profil",
        class: ["hover:underline", { "font-semibold underline": _ctx.$route.path.startsWith("/zenora/profile") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Mon Profil `);
          } else {
            return [
              createTextVNode(" Mon Profil ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/zenora/contact",
        class: ["hover:underline", { "font-semibold underline": _ctx.$route.path.startsWith("/zenora/profile") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav></div></header><main class="flex-grow container mx-auto px-4 py-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-gray-900 text-white"><div class="container mx-auto px-6 py-8"><div class="text-center"><p class="text-gray-400">© 2024 Zenora - Application de bien-être et méditation</p><div class="mt-4 space-x-4"><a href="/mentions-legales" class="text-gray-400 hover:text-white">Mentions légales</a><a href="/confidentialite" class="text-gray-400 hover:text-white">Confidentialité</a><a href="/contact" class="text-gray-400 hover:text-white">Contact</a></div></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/zenora.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=zenora-PBA8AWPY.mjs.map
