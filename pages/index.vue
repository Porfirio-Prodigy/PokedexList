<template>
  <Header></Header>
  <div>
    <h1 class="title">Pokedex List</h1>

    <div>

      <Card :pokemons="pokemons" />

      <div class="flex justify-center align-center my-5">
        <button
            @click="loadMore"
            class="btn-gradient mt-4 bg-blue-400 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-500"
        >
            Carregar mais
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Card from '~/components/Card.vue'
import Header from "~/components/Header.vue"

const pokemons = ref([])
const offset = ref(0)
const limit = 12

async function loadPokemons() {
  try {
    const response = await $fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset.value}&limit=${limit}`
    )
    const results = response.results

    const detailed = await Promise.all(results.map(p => $fetch(p.url)))

    pokemons.value.push(...detailed)
    offset.value += limit
  } catch (error) {
    console.error('Erro ao buscar Pokémons:', error)
  }
}

function loadMore() {
  loadPokemons()
}

onMounted(() => {
  loadPokemons()
})
</script>
