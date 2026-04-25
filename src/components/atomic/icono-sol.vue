<!-- components/atomic/icono-sol.vue -->
<template>
  <span class="icono-sol" :title="titulo">☀️</span>
</template>

<script setup lang="ts">
interface Props {
  titulo?: string
}

withDefaults(defineProps<Props>(), {
  titulo: 'Modo claro'
})
</script>

<style scoped>
.icono-sol {
  font-size: 1.5rem;
  display: inline-block;
}
</style>
