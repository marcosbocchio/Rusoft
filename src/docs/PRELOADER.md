# Sistema de Precarga de Assets

## Descripción

El sistema de precarga implementado en esta aplicación Vue.js asegura que todas las imágenes y videos se carguen completamente antes de mostrar el contenido principal, evitando el efecto de carga progresiva que puede verse poco profesional.

## Características

### ✅ Funcionalidades Principales

- **Precarga completa**: Carga todos los assets antes de mostrar la página
- **Barra de progreso**: Muestra el progreso de carga en tiempo real
- **Assets críticos vs opcionales**: Diferencia entre contenido esencial y opcional
- **Tiempo mínimo de visualización**: Evita que el precargador aparezca y desaparezca muy rápido
- **Manejo de errores**: Continúa la carga aunque algunos assets fallen
- **Modo debug**: Logging detallado en desarrollo
- **Responsive**: Se adapta a diferentes tamaños de pantalla

### 🎨 Interfaz de Usuario

- **Diseño atractivo**: Gradiente azul con animaciones suaves
- **Logo de la empresa**: Muestra el logo durante la carga
- **Indicadores visuales**: Puntos animados y barra de progreso con efecto shimmer
- **Transiciones suaves**: Animaciones de entrada y salida

## Estructura del Sistema

### Componentes

```
src/
├── components/
│   └── Preloader.vue          # Componente visual del precargador
├── store/
│   └── modules/
│       └── preloader.ts       # Lógica de estado y precarga
├── config/
│   └── preloader.ts           # Configuración del sistema
└── docs/
    └── PRELOADER.md           # Esta documentación
```

### Assets Precargados

El sistema precarga automáticamente:

#### 🎥 Videos
- `video-fondo.mp4` - Video principal de fondo

#### 🖼️ Imágenes Principales
- `logo.png` - Logo principal
- `background1.png` - Imagen de fondo 1
- `background2.png` - Imagen de fondo 2
- `background3.jpeg` - Imagen de fondo 3
- `background-contacto.png` - Imagen de contacto
- `R.png` - Logo R
- `tarjeta1.png` - Tarjeta 1
- `tarjeta2.png` - Tarjeta 2

#### 🏢 Logos de Clientes
- Todos los logos en `assets/logos-clientes/`

## Configuración

### Archivo de Configuración (`src/config/preloader.ts`)

```typescript
export const preloaderConfig: PreloaderConfig = {
  minDisplayTime: 1500,        // Tiempo mínimo de visualización (ms)
  completionDelay: 500,        // Pausa al completar (ms)
  debug: true,                 // Modo debug (desarrollo)
  criticalAssets: [            // Assets críticos
    'video-fondo.mp4',
    'logo.png',
    'background1.png'
  ],
  optionalAssets: [            // Assets opcionales
    'background2.png',
    'background3.jpeg',
    'background-contacto.png'
  ]
};
```

### Personalización

Para agregar nuevos assets a la precarga:

1. **Agregar el asset** en `src/store/modules/preloader.ts`:
```typescript
createAsset(require('@/assets/nuevo-asset.jpg'), 'image', 'Nuevo Asset')
```

2. **Configurar como crítico u opcional** en `src/config/preloader.ts`:
```typescript
criticalAssets: ['nuevo-asset.jpg']  // Crítico
// o
optionalAssets: ['nuevo-asset.jpg']  // Opcional
```

## Uso

### Integración en la Aplicación

El precargador se integra automáticamente en `App.vue`:

```vue
<template>
  <div>
    <Preloader />
    <div v-if="!isLoading" class="app-content">
      <!-- Contenido principal -->
    </div>
  </div>
</template>
```

### Estado del Store

```typescript
// Getters disponibles
store.getters['app/isLoading']           // Boolean: si está cargando
store.getters['app/loadingProgress']     // Number: progreso (0-100)
store.getters['app/currentAsset']        // String: asset actual
store.getters['app/totalAssets']         // Number: total de assets
store.getters['app/loadedAssets']        // Number: assets cargados
```

## Flujo de Funcionamiento

1. **Inicialización**: La app se monta y se inicia el precargador
2. **Identificación**: Se identifican todos los assets a precargar
3. **Carga paralela**: Se cargan todos los assets simultáneamente
4. **Progreso**: Se actualiza la barra de progreso en tiempo real
5. **Verificación**: Se verifica que se cumpla el tiempo mínimo
6. **Transición**: Se oculta el precargador y se muestra el contenido

## Optimizaciones

### Rendimiento
- **Carga paralela**: Todos los assets se cargan simultáneamente
- **Assets críticos**: Se priorizan los assets esenciales
- **Manejo de errores**: Los assets opcionales pueden fallar sin afectar la carga

### Experiencia de Usuario
- **Tiempo mínimo**: Evita parpadeos muy rápidos
- **Feedback visual**: Barra de progreso y mensajes informativos
- **Transiciones suaves**: Animaciones de entrada y salida

## Debugging

En modo desarrollo, el sistema muestra logs detallados:

```
🚀 Iniciando precarga de assets...
📦 Cargando image: Logo principal
✅ Imagen cargada: Logo principal
📦 Cargando video: Video de fondo
✅ Video cargado: Video de fondo
⏱️ Tiempo transcurrido: 1200ms
⏳ Tiempo restante mínimo: 300ms
✅ Precarga completada exitosamente
```

## Consideraciones Técnicas

### Compatibilidad
- **Navegadores modernos**: Soporta todos los navegadores modernos
- **Dispositivos móviles**: Optimizado para móviles y tablets
- **Conexiones lentas**: Maneja conexiones lentas graciosamente

### Limitaciones
- **Tamaño de assets**: Assets muy grandes pueden ralentizar la carga inicial
- **Conexión lenta**: En conexiones muy lentas, el precargador puede tardar mucho
- **Memoria**: Precargar muchos assets puede usar mucha memoria

## Mejoras Futuras

- [ ] **Lazy loading inteligente**: Cargar solo assets visibles
- [ ] **Compresión de assets**: Optimización automática de imágenes
- [ ] **Cache del navegador**: Aprovechar el cache para cargas posteriores
- [ ] **Progressive loading**: Cargar assets por prioridad
- [ ] **WebP support**: Soporte para formatos modernos de imagen
