<!-- components/atomic/boton-interruptor.vue -->
<template>
  <button
    class="boton-interruptor"
    @click="$emit('click')"
    :title="titulo"
    :aria-label="titulo"
  >
    <slot>
      <IconoSol v-if="modoActual === 'claro'" />
      <IconoLuna v-else />
    </slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ModoTema } from '@/tipos/tema'
import IconoSol from './icono-sol.vue'
import IconoLuna from './icono-luna.vue'

interface Props {
  modoActual?: ModoTema
  titulo?: string
}

const props = withDefaults(defineProps<Props>(), {
  modoActual: 'claro',
  titulo: 'Cambiar tema'
})

defineEmits<{
  click: []
}>()

const icono = computed(() => {
  return props.modoActual === 'claro' ? '☀️' : '🌙'
})
</script>

<style scoped>
.boton-interruptor {
  background: none;
  border: 2px solid var(--color-primario);
  color: var(--color-primario);
  padding: var(--espaciado-sm) var(--espaciado-md);
  border-radius: var(--radio-borde);
  font-size: 1.2rem;
  cursor: pointer;
  transition: var(--transicion);
  display: flex;
  align-items: center;
  gap: var(--espaciado-sm);
}

.boton-interruptor:hover {
  background-color: var(--color-primario);
  color: var(--color-fondo);
  box-shadow: 0 0 8px rgba(var(--color-primario), 0.3);
}

.boton-interruptor:active {
  transform: scale(0.95);
}
</style>
