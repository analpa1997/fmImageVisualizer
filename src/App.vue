<!-- App.vue -->
<template>
  <AppLayout
    titulo="FM Image Visualizer"
    :modo-actual="modoActual"
    @cambiar-tema="alternarModo"
  >
    <PaginaPrincipal :modo-actual="modoActual" />
  </AppLayout>
</template>

<script setup lang="ts">
import { useModoTema } from '@/composables/useModoTema'
import AppLayout from '@/components/layout/app-layout.vue'
import PaginaPrincipal from '@/views/pagina-principal.vue'

// Usar el composable para gestionar el tema
const { modoActual, alternarModo } = useModoTema()
</script>
