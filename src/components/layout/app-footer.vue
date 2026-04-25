<!-- components/layout/app-footer.vue -->
<template>
  <footer class="pie-pagina">
    <div class="contenedor">
      <div class="contenido">
        <slot>
          <p>&copy; 2025 FM Image Visualizer. Todos los derechos reservados.</p>
        </slot>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Componente de pie de página reutilizable
</script>

<style scoped>
.pie-pagina {
  background-color: var(--color-fondo-secundario);
  border-top: 1px solid var(--color-borde);
  margin-top: auto;
  padding: var(--espaciado-lg) 0;
}

.contenedor {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--espaciado-md);
}

.contenido p {
  margin-bottom: 0;
  color: var(--color-texto-secundario);
  font-size: var(--fuente-tamanio-sm);
  text-align: center;
}
</style>
