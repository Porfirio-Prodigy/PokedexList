import { ssrRenderComponent } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';
import { _ as __nuxt_component_0, a as _sfc_main$1 } from './Header-CfbOZeYy.mjs';
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
import './server.mjs';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const pokemons = ref([]);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(__nuxt_component_0, null, null, _parent));
      _push(`<div><h1 class="title">Pokedex List</h1><div>`);
      _push(ssrRenderComponent(_sfc_main$1, { pokemons: pokemons.value }, null, _parent));
      _push(`<div class="flex justify-center align-center my-5"><button class="btn-gradient mt-4 bg-blue-400 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-500"> Carregar mais </button></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C7y3aXS3.mjs.map
