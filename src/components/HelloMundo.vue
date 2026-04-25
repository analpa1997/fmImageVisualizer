<script setup>
/**
 * Componente HelloMundo - Página principal de la aplicación.
 * Muestra un saludo "¡Hola Mundo!" y un interruptor para alternar
 * entre el modo oscuro y el modo claro de la interfaz.
 */

// Definición de las propiedades que recibe el componente desde el padre
const props = defineProps({
  /**
   * Indica si el modo oscuro está activo.
   * @type {Boolean}
   */
  modoOscuro: {
    type: Boolean,
    required: true,
  },
})

// Definición de los eventos que emite este componente
const emit = defineEmits([
  /**
   * Se emite cuando el usuario cambia el interruptor de tema.
   * @param {boolean} valor - true para oscuro, false para claro
   */
  'cambiar-tema',
])

/**
 * Alterna entre el modo oscuro y el modo claro al hacer clic
 * en el interruptor.
 */
const alternarTema = () => {
  emit('cambiar-tema', !props.modoOscuro)
}
</script>

<template>
  <main class="pagina-principal">
    <!-- Cabecera de la página con el interruptor de tema -->
    <header class="cabecera">
      <h1 class="titulo-app">FM Image Visualizer</h1>

      <!-- Interruptor de modo oscuro/claro -->
      <div class="control-tema">
        <!-- Icono del sol (modo claro) -->
        <span class="icono-tema" aria-hidden="true">☀️</span>

        <!-- Botón de interruptor accesible -->
        <button
          class="interruptor"
          :class="{ 'interruptor--activo': modoOscuro }"
          role="switch"
          :aria-checked="modoOscuro"
          :aria-label="modoOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
          @click="alternarTema"
        >
          <!-- Círculo deslizante del interruptor -->
          <span class="interruptor__circulo"></span>
        </button>

        <!-- Icono de la luna (modo oscuro) -->
        <span class="icono-tema" aria-hidden="true">🌙</span>
      </div>
    </header>

    <!-- Sección del mensaje principal -->
    <section class="seccion-principal">
      <div class="tarjeta-saludo">
        <!-- Saludo principal "Hola Mundo" -->
        <h2 class="saludo">¡Hola Mundo!</h2>
        <p class="descripcion">
          Bienvenido a <strong>FM Image Visualizer</strong>, tu herramienta para
          explorar y visualizar paquetes de imágenes.
        </p>

        <!-- Indicador del tema activo -->
        <div class="indicador-tema">
          <span class="punto-indicador" :class="{ 'punto-indicador--oscuro': modoOscuro }"></span>
          <span class="texto-indicador">
            Modo {{ modoOscuro ? 'oscuro' : 'claro' }} activado
          </span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ─── Página principal ─────────────────────────────────────────── */
.pagina-principal {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-fondo);
  color: var(--color-texto);
  transition:
    background-color var(--transicion),
    color var(--transicion);
}

/* ─── Cabecera ──────────────────────────────────────────────────── */
.cabecera {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--color-tarjeta);
  border-bottom: 1px solid var(--color-borde);
  box-shadow: 0 2px 4px var(--color-sombra);
  transition:
    background-color var(--transicion),
    border-color var(--transicion);
}

.titulo-app {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primario);
  letter-spacing: -0.025em;
}

/* ─── Control de tema ───────────────────────────────────────────── */
.control-tema {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icono-tema {
  font-size: 1.1rem;
  user-select: none;
}

/* ─── Interruptor (toggle switch) ──────────────────────────────── */
.interruptor {
  /* Dimensiones y forma de pastilla */
  position: relative;
  width: 3rem;
  height: 1.5rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;

  /* Colores del fondo del interruptor */
  background-color: var(--color-borde);
  transition: background-color var(--transicion);

  /* Mejora de accesibilidad: indicador de foco visible */
  &:focus-visible {
    outline: 2px solid var(--color-primario);
    outline-offset: 2px;
  }
}

/* Estado activo (modo oscuro) del interruptor */
.interruptor--activo {
  background-color: var(--color-primario);
}

/* Círculo deslizante del interruptor */
.interruptor__circulo {
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform var(--transicion);
}

/* Desplaza el círculo hacia la derecha cuando el modo oscuro está activo */
.interruptor--activo .interruptor__circulo {
  transform: translateX(1.5rem);
}

/* ─── Sección principal ─────────────────────────────────────────── */
.seccion-principal {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

/* ─── Tarjeta de saludo ─────────────────────────────────────────── */
.tarjeta-saludo {
  background-color: var(--color-tarjeta);
  border: 1px solid var(--color-borde);
  border-radius: 1rem;
  padding: 3rem 4rem;
  text-align: center;
  box-shadow: 0 4px 24px var(--color-sombra);
  max-width: 36rem;
  width: 100%;
  transition:
    background-color var(--transicion),
    border-color var(--transicion),
    box-shadow var(--transicion);
}

/* Mensaje principal "¡Hola Mundo!" */
.saludo {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-primario);
  margin-bottom: 1rem;
  line-height: 1.1;
  transition: color var(--transicion);
}

.descripcion {
  font-size: 1rem;
  color: var(--color-texto);
  margin-bottom: 2rem;
  opacity: 0.85;
  transition: color var(--transicion);
}

/* ─── Indicador del tema activo ─────────────────────────────────── */
.indicador-tema {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  background-color: var(--color-fondo);
  border: 1px solid var(--color-borde);
  font-size: 0.875rem;
  transition:
    background-color var(--transicion),
    border-color var(--transicion);
}

.punto-indicador {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: var(--color-primario);
  flex-shrink: 0;
  transition: background-color var(--transicion);
}

.punto-indicador--oscuro {
  background-color: #7cb9e8;
}

.texto-indicador {
  color: var(--color-texto);
  transition: color var(--transicion);
}

/* ─── Diseño responsivo ─────────────────────────────────────────── */
@media (max-width: 480px) {
  .cabecera {
    padding: 0.75rem 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tarjeta-saludo {
    padding: 2rem 1.5rem;
  }

  .saludo {
    font-size: 2rem;
  }
}
</style>
