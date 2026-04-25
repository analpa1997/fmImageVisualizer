# FM Image Visualizer

Visualizador de paquetes de imágenes FM — página **¡Hola Mundo!** con interruptor de modo oscuro/claro.

## Vista previa

| Modo claro | Modo oscuro |
|---|---|
| ![Modo claro](https://github.com/user-attachments/assets/fe6c5f68-df49-4629-b450-d4958e49f835) | ![Modo oscuro](https://github.com/user-attachments/assets/b39509c7-9d99-46bf-b499-ae5e17cec64f) |

## Stack tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| [Vue 3](https://vuejs.org/) | ^3.4 | Framework principal — Composition API con `<script setup>` |
| [Vite](https://vitejs.dev/) | ^5.0 | Bundler y servidor de desarrollo |
| [Vitest](https://vitest.dev/) | ^1.0 | Framework de pruebas unitarias |
| [Vue Test Utils](https://test-utils.vuejs.org/) | ^2.4 | Utilidades de prueba para componentes Vue |
| [ESLint](https://eslint.org/) + [eslint-plugin-vue](https://eslint.vuejs.org/) | ^8 / ^9 | Linter de código |

## Características

- ✅ Página **¡Hola Mundo!** con diseño centrado y limpio
- 🌗 **Interruptor de modo oscuro/claro** con transición suave
- 💾 **Persistencia** de la preferencia del usuario en `localStorage`
- 🎨 **Detección automática** del esquema de color del sistema operativo
- ♿ **Accesible**: rol `switch` y atributos `aria-*` en el interruptor
- 📱 **Diseño responsivo** para móviles y escritorio
- 🧪 **Pruebas unitarias** con 8 casos de prueba

## Arquitectura del proyecto

```
fmImageVisualizer/
├── index.html                          # Punto de entrada HTML
├── vite.config.js                      # Configuración de Vite + Vitest
├── package.json                        # Dependencias y scripts
├── .eslintrc.cjs                       # Configuración de ESLint
└── src/
    ├── main.js                         # Inicialización de la app Vue
    ├── App.vue                         # Componente raíz — gestiona el tema
    ├── assets/
    │   └── estilos.css                 # Variables CSS y estilos globales
    └── components/
        ├── HelloMundo.vue              # Componente "¡Hola Mundo!" + interruptor
        └── __tests__/
            └── HelloMundo.spec.js      # Pruebas unitarias
```

## Buenas prácticas de Vue aplicadas

- **Composition API** con `<script setup>` (sintaxis azucarada recomendada)
- **Props tipadas** con `defineProps` y validación de tipo
- **Emisión de eventos** con `defineEmits` y documentación de payload
- **Componentes de un solo archivo** (SFC — `.vue`)
- **Variables CSS** para tematización sin JavaScript extra
- **Separación de responsabilidades**: `App.vue` gestiona el estado global; `HelloMundo.vue` es presentacional
- Todo el código y comentarios **en español**

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación de producción
npm run preview

# Ejecutar pruebas unitarias
npm run test:unit

# Lintear el código
npm run lint
```
