/**
 * Pruebas unitarias para el componente HelloMundo.
 * Verifica el renderizado correcto, el interruptor de tema
 * y la emisión de eventos.
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloMundo from '../HelloMundo.vue'

describe('HelloMundo', () => {
  it('renderiza el saludo "¡Hola Mundo!"', () => {
    // Monta el componente con el modo claro activo
    const wrapper = mount(HelloMundo, {
      props: { modoOscuro: false },
    })

    // Verifica que el saludo principal esté presente
    expect(wrapper.find('.saludo').text()).toBe('¡Hola Mundo!')
  })

  it('muestra el indicador de modo claro cuando modoOscuro es false', () => {
    const wrapper = mount(HelloMundo, {
      props: { modoOscuro: false },
    })

    // Verifica que el texto del indicador menciona el modo claro
    expect(wrapper.find('.texto-indicador').text()).toContain('claro')
  })

  it('muestra el indicador de modo oscuro cuando modoOscuro es true', () => {
    const wrapper = mount(HelloMundo, {
      props: { modoOscuro: true },
    })

    // Verifica que el texto del indicador menciona el modo oscuro
    expect(wrapper.find('.texto-indicador').text()).toContain('oscuro')
  })

  it('aplica la clase activa al interruptor cuando modoOscuro es true', () => {
    const wrapper = mount(HelloMundo, {
      props: { modoOscuro: true },
    })

    // Verifica que el botón tiene la clase CSS de estado activo
    expect(wrapper.find('.interruptor').classes()).toContain('interruptor--activo')
  })

  it('no aplica la clase activa al interruptor cuando modoOscuro es false', () => {
    const wrapper = mount(HelloMundo, {
      props: { modoOscuro: false },
    })

    // Verifica que el botón NO tiene la clase CSS de estado activo
    expect(wrapper.find('.interruptor').classes()).not.toContain('interruptor--activo')
  })

  it('emite el evento "cambiar-tema" con true al hacer clic en modo claro', async () => {
    const wrapper = mount(HelloMundo, {
      props: { modoOscuro: false },
    })

    // Simula el clic en el interruptor
    await wrapper.find('.interruptor').trigger('click')

    // Verifica que el evento fue emitido con el valor correcto
    expect(wrapper.emitted('cambiar-tema')).toBeTruthy()
    expect(wrapper.emitted('cambiar-tema')[0]).toEqual([true])
  })

  it('emite el evento "cambiar-tema" con false al hacer clic en modo oscuro', async () => {
    const wrapper = mount(HelloMundo, {
      props: { modoOscuro: true },
    })

    // Simula el clic en el interruptor
    await wrapper.find('.interruptor').trigger('click')

    // Verifica que el evento fue emitido con el valor correcto
    expect(wrapper.emitted('cambiar-tema')).toBeTruthy()
    expect(wrapper.emitted('cambiar-tema')[0]).toEqual([false])
  })

  it('tiene el atributo aria-checked correcto en el interruptor', () => {
    // Verifica accesibilidad en modo oscuro
    const wrapperOscuro = mount(HelloMundo, {
      props: { modoOscuro: true },
    })
    expect(wrapperOscuro.find('.interruptor').attributes('aria-checked')).toBe('true')

    // Verifica accesibilidad en modo claro
    const wrapperClaro = mount(HelloMundo, {
      props: { modoOscuro: false },
    })
    expect(wrapperClaro.find('.interruptor').attributes('aria-checked')).toBe('false')
  })
})
