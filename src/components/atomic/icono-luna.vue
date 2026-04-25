<!-- components/atomic/icono-luna.vue -->
<template>
  <span class="icono-luna" :title="titulo">🌙</span>
</template>

<script setup lang="ts">
interface Props {
  titulo?: string
}

withDefaults(defineProps<Props>(), {
  titulo: 'Modo oscuro'
})
</script>

<style scoped>
.icono-luna {
  font-size: 1.5rem;
  display: inline-block;
}
</style>
