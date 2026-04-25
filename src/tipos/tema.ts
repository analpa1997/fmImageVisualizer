/**
 * tipos/tema.ts - Tipos de TypeScript para el sistema de temas
 */

export type ModoTema = 'claro' | 'oscuro'

export interface ConfiguracionTema {
  modoActual: ModoTema
  cambiarModo: (modo: ModoTema) => void
  alternarModo: () => void
}
