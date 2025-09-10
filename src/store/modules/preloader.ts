import { Module } from 'vuex';
import { preloaderConfig, isCriticalAsset, isOptionalAsset } from '@/config/preloader';

interface PreloaderState {
  isLoading: boolean;
  progress: number;
  currentAsset: string;
  totalAssets: number;
  loadedAssets: number;
  assets: AssetItem[];
  startTime: number;
  criticalAssetsLoaded: boolean;
}

interface AssetItem {
  src: string;
  type: 'image' | 'video';
  name: string;
  loaded: boolean;
  critical: boolean;
  optional: boolean;
}

const preloaderModule: Module<PreloaderState, any> = {
  namespaced: true,
  
  state: {
    isLoading: true,
    progress: 0,
    currentAsset: '',
    totalAssets: 0,
    loadedAssets: 0,
    assets: [],
    startTime: 0,
    criticalAssetsLoaded: false
  },

  getters: {
    isLoading: (state) => state.isLoading,
    loadingProgress: (state) => state.progress,
    currentAsset: (state) => state.currentAsset,
    totalAssets: (state) => state.totalAssets,
    loadedAssets: (state) => state.loadedAssets,
    criticalAssetsLoaded: (state) => state.criticalAssetsLoaded
  },

  mutations: {
    SET_LOADING(state, isLoading: boolean) {
      state.isLoading = isLoading;
    },
    
    SET_PROGRESS(state, progress: number) {
      state.progress = progress;
    },
    
    SET_CURRENT_ASSET(state, asset: string) {
      state.currentAsset = asset;
    },
    
    SET_TOTAL_ASSETS(state, total: number) {
      state.totalAssets = total;
    },
    
    SET_LOADED_ASSETS(state, loaded: number) {
      state.loadedAssets = loaded;
    },
    
    SET_ASSETS(state, assets: AssetItem[]) {
      state.assets = assets;
    },
    
    SET_START_TIME(state, time: number) {
      state.startTime = time;
    },
    
    SET_CRITICAL_ASSETS_LOADED(state, loaded: boolean) {
      state.criticalAssetsLoaded = loaded;
    },
    
    MARK_ASSET_LOADED(state, assetSrc: string) {
      const asset = state.assets.find(a => a.src === assetSrc);
      if (asset) {
        asset.loaded = true;
        state.loadedAssets++;
        state.progress = (state.loadedAssets / state.totalAssets) * 100;
        
        // Verificar si todos los assets críticos están cargados
        const criticalAssets = state.assets.filter(a => a.critical);
        const loadedCriticalAssets = criticalAssets.filter(a => a.loaded);
        state.criticalAssetsLoaded = loadedCriticalAssets.length === criticalAssets.length;
      }
    }
  },

  actions: {
    async initializePreloader({ commit, dispatch }) {
      commit('SET_START_TIME', Date.now());
      
      if (preloaderConfig.debug) {
        console.log('🚀 Iniciando precarga de assets...');
      }
      
      // Función auxiliar para crear assets
      const createAsset = (src: string, type: 'image' | 'video', name: string): AssetItem => ({
        src,
        type,
        name,
        loaded: false,
        critical: isCriticalAsset(name),
        optional: isOptionalAsset(name)
      });
      
      // Definir todos los assets que necesitan precarga
      const assets: AssetItem[] = [
        // Video principal
        createAsset(require('@/assets/video-fondo.mp4'), 'video', 'Video de fondo'),
        // Imágenes de fondo
        createAsset(require('@/assets/background1.png'), 'image', 'Imagen de fondo 1'),
        createAsset(require('@/assets/background2.png'), 'image', 'Imagen de fondo 2'),
        createAsset(require('@/assets/background3.jpeg'), 'image', 'Imagen de fondo 3'),
        createAsset(require('@/assets/background4.png'), 'image', 'Imagen de fondo 4'),
        createAsset(require('@/assets/background-contacto.png'), 'image', 'Imagen de contacto'),
        // Logo y elementos principales
        createAsset(require('@/assets/logo.png'), 'image', 'Logo principal'),
        createAsset(require('@/assets/R.png'), 'image', 'Logo R'),
        // Tarjetas
        createAsset(require('@/assets/tarjeta1.png'), 'image', 'Tarjeta 1'),
        createAsset(require('@/assets/tarjeta2.png'), 'image', 'Tarjeta 2'),
        // Logos de clientes
        createAsset(require('@/assets/logos-clientes/logo-municipalidad_vicente-lopez.png'), 'image', 'Logo Municipalidad Vicente López'),
        createAsset(require('@/assets/logos-clientes/logo-enod-web.jpg'), 'image', 'Logo Enod'),
        createAsset(require('@/assets/logos-clientes/logo-la-pastoriza.jpg'), 'image', 'Logo Pastoriza'),
        createAsset(require('@/assets/logos-clientes/logo_de-marco-corralon.png'), 'image', 'Logo Corralón de Marco'),
        createAsset(require('@/assets/logos-clientes/logo-pri-sports.jpg'), 'image', 'Logo Pri Sports'),
        createAsset(require('@/assets/logos-clientes/logo-sanitarios-alvarez.jpg'), 'image', 'Logo Sanitarios Álvarez'),
        createAsset(require('@/assets/logos-clientes/logo-kanauf.png'), 'image', 'Logo Kanauf'),
        createAsset(require('@/assets/logos-clientes/logo_la-noria_revistimiento.png'), 'image', 'Logo La Noria'),
        createAsset(require('@/assets/logos-clientes/logo_magimundo_color.png'), 'image', 'Logo Magimundo'),
        createAsset(require('@/assets/logos-clientes/logo_abertura-3-febrero-r8_color.png'), 'image', 'Logo Aberturas 3 de Febrero'),
        createAsset(require('@/assets/logos-clientes/logo-enfoque-pop.jpg'), 'image', 'Logo Enfoque Pop'),
        createAsset(require('@/assets/logos-clientes/logo-herrajes-mitre.png'), 'image', 'Logo Herrajes Mitre'),
        createAsset(require('@/assets/logos-clientes/logo_pintureria-san-andres.png'), 'image', 'Logo Pinturería San Andrés')
      ];

      commit('SET_ASSETS', assets);
      commit('SET_TOTAL_ASSETS', assets.length);
      commit('SET_LOADED_ASSETS', 0);
      commit('SET_PROGRESS', 0);

      // Iniciar la precarga
      await dispatch('preloadAssets');
    },

    async preloadAssets({ commit, state, dispatch }) {
      const loadPromises = state.assets.map(asset => 
        dispatch('preloadAsset', asset)
      );

      // Timeout de seguridad de 30 segundos
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Timeout: La precarga tardó demasiado'));
        }, 30000);
      });

      try {
        await Promise.race([Promise.all(loadPromises), timeoutPromise]);
        
        // Verificar tiempo mínimo de visualización
        const elapsedTime = Date.now() - state.startTime;
        const remainingTime = Math.max(0, preloaderConfig.minDisplayTime - elapsedTime);
        
        if (preloaderConfig.debug) {
          console.log(`⏱️ Tiempo transcurrido: ${elapsedTime}ms`);
          console.log(`⏳ Tiempo restante mínimo: ${remainingTime}ms`);
        }
        
        // Esperar el tiempo restante si es necesario
        if (remainingTime > 0) {
          await new Promise(resolve => setTimeout(resolve, remainingTime));
        }
        
        // Pausa adicional al completar
        await new Promise(resolve => setTimeout(resolve, preloaderConfig.completionDelay));
        
        if (preloaderConfig.debug) {
          console.log('✅ Precarga completada exitosamente');
        }
        
        commit('SET_LOADING', false);
      } catch (error) {
        console.error('❌ Error durante la precarga:', error);
        // Aún así, continuar con la carga después de un tiempo mínimo
        await new Promise(resolve => setTimeout(resolve, preloaderConfig.minDisplayTime));
        commit('SET_LOADING', false);
      }
    },

    async preloadAsset({ commit }, asset: AssetItem) {
      return new Promise((resolve, reject) => {
        commit('SET_CURRENT_ASSET', asset.name);

        if (preloaderConfig.debug) {
          console.log(`📦 Cargando ${asset.type}: ${asset.name}`);
        }

        // Timeout individual de 10 segundos por asset
        const assetTimeout = setTimeout(() => {
          const timeoutMsg = `⏰ Timeout cargando ${asset.type}: ${asset.name}`;
          if (asset.critical) {
            console.error(timeoutMsg);
          } else {
            console.warn(timeoutMsg);
          }
          commit('MARK_ASSET_LOADED', asset.src);
          resolve(null);
        }, 10000);

        if (asset.type === 'image') {
          const img = new Image();
          
          img.onload = () => {
            clearTimeout(assetTimeout);
            if (preloaderConfig.debug) {
              console.log(`✅ Imagen cargada: ${asset.name}`);
            }
            commit('MARK_ASSET_LOADED', asset.src);
            resolve(img);
          };
          
          img.onerror = () => {
            clearTimeout(assetTimeout);
            const errorMsg = `❌ Error cargando imagen: ${asset.name}`;
            if (asset.critical) {
              console.error(errorMsg);
            } else {
              console.warn(errorMsg);
            }
            commit('MARK_ASSET_LOADED', asset.src);
            resolve(null);
          };
          
          img.src = asset.src;
        } else if (asset.type === 'video') {
          const video = document.createElement('video');
          
          video.addEventListener('canplaythrough', () => {
            clearTimeout(assetTimeout);
            if (preloaderConfig.debug) {
              console.log(`✅ Video cargado: ${asset.name}`);
            }
            commit('MARK_ASSET_LOADED', asset.src);
            resolve(video);
          });
          
          video.addEventListener('error', () => {
            clearTimeout(assetTimeout);
            const errorMsg = `❌ Error cargando video: ${asset.name}`;
            if (asset.critical) {
              console.error(errorMsg);
            } else {
              console.warn(errorMsg);
            }
            commit('MARK_ASSET_LOADED', asset.src);
            resolve(null);
          });
          
          video.src = asset.src;
          video.load();
        }
      });
    }
  }
};

export default preloaderModule;
