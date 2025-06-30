<template>
  <div>
    <Header></Header>
    <h1>Tipo: {{ type }}</h1>

    <div v-if="pending || loadingPokemons">Carregando...</div>
    <div v-else-if="error">Erro: {{ error.message }}</div>

    <div v-else>
      <Card :pokemons="pokemons" />
      <div v-if="!pokemons.length">Nenhum Pokémon encontrado.</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import Card from '~/components/Card.vue'

const type = useRoute().params.type
const { data, pending, error } = await useFetch(`https://pokeapi.co/api/v2/type/${type}`)

const pokemons = ref([])
const loadingPokemons = ref(true)

watchEffect(async () => {
  if (data.value?.pokemon) {
    loadingPokemons.value = true
    try {
      const results = await Promise.all(
        data.value.pokemon.map((p) => $fetch(p.pokemon.url))
      )
      pokemons.value = results
    } catch (err) {
      console.error('Erro ao carregar pokémons:', err)
    } finally {
      loadingPokemons.value = false
    }
  }
})
</script>
