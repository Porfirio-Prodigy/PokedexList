import { _ as __nuxt_component_0, a as _sfc_main$1 } from './Header-CfbOZeYy.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    const pokemon = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="search-container" data-v-cad50ca9><form class="my-4 flex gap-2 form-control" data-v-cad50ca9><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Digite o nome ou c\xF3digo do seu Pok\xE9mon" class="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:border-transparent transition" data-v-cad50ca9><button type="submit" class="bg-blue-400 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition" data-v-cad50ca9> Procurar </button></form><div class="mt-4" data-v-cad50ca9>`);
      if (pokemon.value) {
        _push(`<div data-v-cad50ca9>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          pokemons: [pokemon.value]
        }, null, _parent));
        _push(`</div>`);
      } else if (search.value) {
        _push(`<p class="text-red-600 mt-4 text-center" data-v-cad50ca9> Pok\xE9mon n\xE3o encontrado. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pokemon/search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cad50ca9"]]);

export { index as default };
//# sourceMappingURL=index-DXmw02lW.mjs.map
