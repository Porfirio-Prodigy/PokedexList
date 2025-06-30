import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { toRefs, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { pokemons } = toRefs(props);
    const typeColors = {
      normal: ["#A8A77A", "#C6C6A7"],
      fire: ["#EE8130", "#F6B26B"],
      water: ["#6390F0", "#9DB7F5"],
      electric: ["#F7D02C", "#FAE078"],
      grass: ["#7AC74C", "#A7DB8D"],
      ice: ["#96D9D6", "#C3E6E8"],
      fighting: ["#C22E28", "#D46868"],
      poison: ["#A33EA1", "#C183C1"],
      ground: ["#E2BF65", "#EBD69D"],
      flying: ["#A98FF3", "#C6B7F5"],
      psychic: ["#F95587", "#FA92B2"],
      bug: ["#A6B91A", "#C6D16E"],
      rock: ["#B6A136", "#D1C17D"],
      ghost: ["#735797", "#9F8FBF"],
      dragon: ["#6F35FC", "#9169F7"],
      dark: ["#705746", "#8B6E63"],
      steel: ["#B7B7CE", "#D1D1E0"],
      fairy: ["#D685AD", "#E9AEC7"]
    };
    function getBackgroundGradient(types) {
      if (!types || types.length === 0) return "white";
      const colors = types.map((t) => typeColors[t.type.name.toLowerCase()]).filter(Boolean).flat();
      if (colors.length === 2) {
        return `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
      }
      const uniqueColors = [...new Set(colors)].slice(0, 6);
      return `linear-gradient(135deg, ${uniqueColors.join(", ")})`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(pokemons).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pokemon-container" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(pokemons), (poke) => {
          _push(`<div class="pokemon-card"><div class="pokemon-background" style="${ssrRenderStyle({ background: getBackgroundGradient(poke.types) })}"></div><div class="pokemon-image"><img${ssrRenderAttr("src", poke.sprites.other["official-artwork"].front_default)}${ssrRenderAttr("alt", poke.name)}></div><div class="pokemon-details"><p class="pokemon-number">#${ssrInterpolate(poke.id)}</p><h2 class="pokemon-name">${ssrInterpolate(poke.name)}</h2><div class="pokemon-types"><!--[-->`);
          ssrRenderList(poke.types, (type) => {
            _push(`<a class="${ssrRenderClass(`pokemon-type type-${type.type.name}`)}"${ssrRenderAttr("href", `/pokemon/types/${type.type.name}`)}>${ssrInterpolate(type.type.name)}</a>`);
          });
          _push(`<!--]--></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("pokedex-logo.S-ERW9_L.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header bg-blue-400" }, _attrs))}><a href="/" class="logo"><img${ssrRenderAttr("src", _imports_0)} alt="Pokedex" class="logo-img"></a></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, _sfc_main$1 as a };
//# sourceMappingURL=Header-CfbOZeYy.mjs.map
