<template>
  <div v-if="pokemons.length" class="pokemon-container">
    <div
      v-for="poke in pokemons"
      :key="poke.id"
      class="pokemon-card"
    >
      <div class="pokemon-background" :style="{ background: getBackgroundGradient(poke.types) }"></div>
      <div class="pokemon-image">
        <img
          :src="poke.sprites.other['official-artwork'].front_default"
          :alt="poke.name"
        />
      </div>

      <div class="pokemon-details">
        <p class="pokemon-number">#{{ poke.id }}</p>
        <h2 class="pokemon-name">{{ poke.name }}</h2>
        <div class="pokemon-types">
          <a
            v-for="type in poke.types"
            :key="type.type.name"
            :class="`pokemon-type type-${type.type.name}`"
            :href="`/pokemon/types/${type.type.name}`"
          >
            {{ type.type.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import "~/assets/css/card.css"

const props = defineProps({
  pokemons: {
    type: Array,
    required: true,
  },
})

const { pokemons } = toRefs(props)

const typeColors = {
  normal: ['#A8A77A', '#C6C6A7'],
  fire: ['#EE8130', '#F6B26B'],
  water: ['#6390F0', '#9DB7F5'],
  electric: ['#F7D02C', '#FAE078'],
  grass: ['#7AC74C', '#A7DB8D'],
  ice: ['#96D9D6', '#C3E6E8'],
  fighting: ['#C22E28', '#D46868'],
  poison: ['#A33EA1', '#C183C1'],
  ground: ['#E2BF65', '#EBD69D'],
  flying: ['#A98FF3', '#C6B7F5'],
  psychic: ['#F95587', '#FA92B2'],
  bug: ['#A6B91A', '#C6D16E'],
  rock: ['#B6A136', '#D1C17D'],
  ghost: ['#735797', '#9F8FBF'],
  dragon: ['#6F35FC', '#9169F7'],
  dark: ['#705746', '#8B6E63'],
  steel: ['#B7B7CE', '#D1D1E0'],
  fairy: ['#D685AD', '#E9AEC7'],
}

function getBackgroundGradient(types) {
  if (!types || types.length === 0) return 'white'

  const colors = types
    .map(t => typeColors[t.type.name.toLowerCase()])
    .filter(Boolean)
    .flat()

  if (colors.length === 2) {
    return `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`
  }

  const uniqueColors = [...new Set(colors)].slice(0, 6)
  return `linear-gradient(135deg, ${uniqueColors.join(', ')})`
}
</script>

<style scoped>

</style>
