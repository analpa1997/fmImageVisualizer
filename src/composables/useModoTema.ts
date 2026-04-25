/**
 * composables/useModoTema.ts - Composable para gestionar el tema claro/oscuro
 * Maneja: cambios de tema, persistencia en localStorage, reactitividad
 */

import { ref, watch } from 'vue'
import type { ModoTema } from '@/tipos/tema'

const CLAVE_ALMACENAMIENTO = 'fm-modo-tema'

/** Obtiene el tema guardado o el tema del sistema */
function obtenerTemaPredeterminado(): ModoTema {
  // Intentar obtener del localStorage
  const temaguardado = localStorage.getItem(CLAVE_ALMACENAMIENTO) as ModoTema | null
  if (temaguardado && (temaguardado === 'claro' || temaguardado === 'oscuro')) {
    return temaguardado
  }

  // Sino, usar preferencia del sistema
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'oscuro'
  }

  return 'claro'
}

/** Aplica el tema al DOM */
function aplicarTema(tema: ModoTema): void {
  document.documentElement.setAttribute('data-tema', tema)
}

export function useModoTema() {
  const modoActual = ref<ModoTema>(obtenerTemaPredeterminado())

  // Aplicar tema inicial
  aplicarTema(modoActual.value)

  // Escuchar cambios y actualizar DOM + localStorage
  watch(modoActual, (nuevoModo) => {
    aplicarTema(nuevoModo)
    localStorage.setItem(CLAVE_ALMACENAMIENTO, nuevoModo)
  })

  /** Cambiar a un tema específico */
  const cambiarModo = (modo: ModoTema): void => {
    modoActual.value = modo
  }

  /** Alternar entre claro y oscuro */
  const alternarModo = (): void => {
    modoActual.value = modoActual.value === 'claro' ? 'oscuro' : 'claro'
  }

  return {
    modoActual,
    cambiarModo,
    alternarModo
  }
}
