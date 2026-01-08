import { _ as __nuxt_component_0 } from './nuxt-link-B5o38ai7.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-bold">Bienvenue sur notre plateforme</h1><div class="mt-8 grid grid-cols-2 gap-8">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/app/pages/zenora",
    class: "p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-2xl font-bold"${_scopeId}>Zenora</h2><p class="mt-2"${_scopeId}>Application de bien-être et méditation</p>`);
      } else {
        return [
          createVNode("h2", { class: "text-2xl font-bold" }, "Zenora"),
          createVNode("p", { class: "mt-2" }, "Application de bien-être et méditation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/chronos",
    class: "p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-2xl font-bold"${_scopeId}>Projet Chronos</h2><p class="mt-2"${_scopeId}>Gestion de temps et productivité</p>`);
      } else {
        return [
          createVNode("h2", { class: "text-2xl font-bold" }, "Projet Chronos"),
          createVNode("p", { class: "mt-2" }, "Gestion de temps et productivité")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Bwi71FcB.mjs.map
