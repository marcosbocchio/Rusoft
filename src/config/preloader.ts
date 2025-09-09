// Configuración del sistema de precarga
export interface PreloaderConfig {
  // Tiempo mínimo de visualización del precargador (en ms)
  minDisplayTime: number;
  // Tiempo de pausa después de completar la carga (en ms)
  completionDelay: number;
  // Si debe mostrar mensajes de debug en consola
  debug: boolean;
  // Assets críticos que deben cargarse sí o sí
  criticalAssets: string[];
  // Assets opcionales que pueden fallar sin afectar la carga
  optionalAssets: string[];
}

export const preloaderConfig: PreloaderConfig = {
  minDisplayTime: 1500, // Mínimo 1.5 segundos de visualización
  completionDelay: 500, // 500ms de pausa al completar
  debug: process.env.NODE_ENV === 'development',
  criticalAssets: [
    'video-fondo.mp4',
    'logo.png',
    'background1.png'
  ],
  optionalAssets: [
    'background2.png',
    'background3.jpeg',
    'background-contacto.png'
  ]
};

// Función para obtener la configuración
export const getPreloaderConfig = (): PreloaderConfig => {
  return preloaderConfig;
};

// Función para verificar si un asset es crítico
export const isCriticalAsset = (assetName: string): boolean => {
  return preloaderConfig.criticalAssets.some(critical => 
    assetName.includes(critical)
  );
};

// Función para verificar si un asset es opcional
export const isOptionalAsset = (assetName: string): boolean => {
  return preloaderConfig.optionalAssets.some(optional => 
    assetName.includes(optional)
  );
};
