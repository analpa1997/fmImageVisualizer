<!-- views/pagina-principal.vue -->
<template>
  <div class="pagina-principal">
    <section class="seccion-bienvenida">
      <h2>¡Bienvenido!</h2>
      <p class="parrafo-principal">
        Este es el <strong>FM Image Visualizer</strong>, una aplicación para visualizar y gestionar
        paquetes de imágenes.
      </p>
    </section>

    <section class="seccion-tema">
      <h3>Modo de Tema</h3>
      <p>
        Puedes cambiar entre modo claro y oscuro utilizando el botón en la esquina superior derecha.
        Tu preferencia se guardará automáticamente.
      </p>
      <div class="indicador-tema">
        <span class="etiqueta">Tema actual:</span>
        <strong :class="'tema-' + modoActual">{{ modoActual === 'claro' ? '☀️ Claro' : '🌙 Oscuro' }}</strong>
      </div>
    </section>

    <section class="seccion-inicio">
      <h3>Próximas Características</h3>
      <ul class="lista-caracteristicas">
        <li>Carga y gestión de imágenes</li>
        <li>Organización de paquetes FM</li>
        <li>Vista previa de imágenes</li>
        <li>Filtrado y búsqueda avanzada</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { ModoTema } from '@/tipos/tema'

interface Props {
  modoActual?: ModoTema
}

withDefaults(defineProps<Props>(), {
  modoActual: 'claro'
})
</script>

<style scoped>
.pagina-principal {
  display: flex;
  flex-direction: column;
  gap: var(--espaciado-xl);
}

section {
  padding: var(--espaciado-lg);
  background-color: var(--color-fondo-secundario);
  border-radius: var(--radio-borde-lg);
  border: 1px solid var(--color-borde);
}

h2 {
  color: var(--color-primario);
  font-size: 2rem;
}

h3 {
  color: var(--color-primario);
  margin-bottom: var(--espaciado-md);
}

p {
  color: var(--color-texto-secundario);
  line-height: 1.8;
}

.parrafo-principal {
  font-size: 1.1rem;
}

.indicador-tema {
  display: flex;
  align-items: center;
  gap: var(--espaciado-md);
  margin-top: var(--espaciado-md);
  padding: var(--espaciado-md);
  background-color: var(--color-fondo);
  border-radius: var(--radio-borde);
  border: 1px solid var(--color-borde);
}

.etiqueta {
  color: var(--color-texto-secundario);
}

.tema-claro {
  color: var(--color-primario);
}

.tema-oscuro {
  color: var(--color-primario);
}

.lista-caracteristicas {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--espaciado-sm);
  margin-top: var(--espaciado-md);
}

.lista-caracteristicas li {
  padding: var(--espaciado-sm) var(--espaciado-md);
  background-color: var(--color-fondo);
  border-left: 3px solid var(--color-primario);
  border-radius: var(--radio-borde);
}

.lista-caracteristicas li::before {
  content: '✓ ';
  color: var(--color-primario);
  font-weight: bold;
  margin-right: var(--espaciado-sm);
}
</style>
