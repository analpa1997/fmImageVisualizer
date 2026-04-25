<!-- components/layout/app-header.vue -->
<template>
  <header class="encabezado">
    <div class="contenedor">
      <div class="titulo-seccion">
        <h1>{{ titulo }}</h1>
      </div>

      <nav class="navegacion">
        <slot name="navegacion" />
        <BotonInterruptor
          :modo-actual="modoActual"
          @click="$emit('cambiar-tema')"
        />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { ModoTema } from '@/tipos/tema'
import BotonInterruptor from '@/components/atomic/boton-interruptor.vue'

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
.encabezado {
  background-color: var(--color-fondo-secundario);
  border-bottom: 1px solid var(--color-borde);
  padding: var(--espaciado-md) 0;
  box-shadow: var(--sombra-sm);
}

.contenedor {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--espaciado-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--espaciado-md);
}

.titulo-seccion h1 {
  margin-bottom: 0;
  font-size: 1.5rem;
  color: var(--color-primario);
}

.navegacion {
  display: flex;
  align-items: center;
  gap: var(--espaciado-md);
}
</style>
