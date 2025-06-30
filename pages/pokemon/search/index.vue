<template>
  <Header />

  <div class="search-container">
    <form @submit.prevent="handleSubmit" class="my-4 flex gap-2 form-control">
      <input
        v-model="search"
        type="text"
        placeholder="Digite o nome ou código do seu Pokémon"
        class="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:border-transparent transition"
      />
      <button
        type="submit"
        class="bg-blue-400 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition"
      >
        Procurar
      </button>
    </form>

    <div class="mt-4">
      <div v-if="pokemon">
        <Card :pokemons="[pokemon]" />
      </div>
      <p v-else-if="search" class="text-red-600 mt-4 text-center">
        Pokémon não encontrado.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/components/Card.vue'

const search = ref('')
const pokemon = ref(null)

async function handleSubmit() {
  try {
    const data = await $fetch(`https://pokeapi.co/api/v2/pokemon/${search.value.toLowerCase()}`)
    pokemon.value = data
  } catch (error) {
    pokemon.value = null
  }
}
</script>

<style scoped>
.pokemon-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
}

.form-control {
  display: flex;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
}

.search-container {
  padding: 0 16px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1080px) {
  .form-control {
    max-width: 100%;
    margin: 0;
  }
}
</style>
