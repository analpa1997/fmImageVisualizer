<script setup>
/**
 * Componente raíz de la aplicación FM Image Visualizer.
 * Gestiona el estado global del modo oscuro/claro y aplica
 * la clase correspondiente al elemento raíz del documento.
 */
import { ref, watch, onMounted } from 'vue'
import HelloMundo from './components/HelloMundo.vue'

// Estado reactivo que indica si el modo oscuro está activo
const modoOscuro = ref(false)

/**
 * Aplica o elimina la clase CSS 'modo-oscuro' en el elemento <html>
 * para que las variables de color del tema se activen en toda la página.
 */
const aplicarTema = (oscuro) => {
  if (oscuro) {
    document.documentElement.classList.add('modo-oscuro')
  } else {
    document.documentElement.classList.remove('modo-oscuro')
  }
}

/**
 * Maneja el cambio de tema emitido por el componente hijo.
 * @param {boolean} nuevoValor - true para modo oscuro, false para modo claro
 */
const alCambiarTema = (nuevoValor) => {
  modoOscuro.value = nuevoValor
  // Persiste la preferencia del usuario en el almacenamiento local
  localStorage.setItem('tema-oscuro', JSON.stringify(nuevoValor))
}

// Observa los cambios en el estado del modo oscuro y aplica el tema
watch(modoOscuro, aplicarTema)

// Al montar el componente, recupera la preferencia guardada del usuario
onMounted(() => {
  const temaGuardado = localStorage.getItem('tema-oscuro')
  if (temaGuardado !== null) {
    modoOscuro.value = JSON.parse(temaGuardado)
  } else {
    // Si no hay preferencia guardada, detecta la preferencia del sistema
    modoOscuro.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  aplicarTema(modoOscuro.value)
})
</script>

<template>
  <!-- Contenedor principal que hereda el tema a través de variables CSS -->
  <div class="contenedor-app">
    <!-- Componente principal de la página Hello World -->
    <HelloMundo :modo-oscuro="modoOscuro" @cambiar-tema="alCambiarTema" />
  </div>
</template>

<style scoped>
/* El contenedor principal ocupa toda la altura disponible */
.contenedor-app {
  min-height: 100vh;
  background-color: var(--color-fondo);
  transition: background-color var(--transicion);
}
</style>
