<!-- components/layout/app-layout.vue -->
<template>
  <div class="contenedor-layout">
    <AppHeader
      :titulo="titulo"
      :modo-actual="modoActual"
      @cambiar-tema="$emit('cambiar-tema')"
    >
      <template #navegacion>
        <slot name="navegacion" />
      </template>
    </AppHeader>

    <main class="contenido-principal">
      <div class="contenedor">
        <slot />
      </div>
    </main>

    <AppFooter>
      <template #default>
        <slot name="pie" />
      </template>
    </AppFooter>
  </div>
</template>

<script setup lang="ts">
import type { ModoTema } from '@/tipos/tema'
import AppHeader from './app-header.vue'
import AppFooter from './app-footer.vue'

interface Props {
  titulo?: string
  modoActual?: ModoTema
}

withDefaults(defineProps<Props>(), {
  titulo: 'FM Image Visualizer',
  modoActual: 'claro'
})

defineEmits<{
  'cambiar-tema': []
}>()
</script>

<style scoped>
.contenedor-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.contenido-principal {
  flex: 1;
  padding: var(--espaciado-xl) 0;
}

.contenedor {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--espaciado-md);
  width: 100%;
}
</style>
