<template>
  <section class="section cv-section">
    <div class="cv-background"></div>
    <div class="cv-wrapper">
      <div class="cv-header animate-header">
        <h1>Subir Currículum</h1>
        <p class="animate-content">
          Únete a nuestro equipo. Sube tu currículum y conversemos sobre las oportunidades disponibles.
        </p>
      </div>
      <form @submit.prevent="onSubmit" class="cv-form animate-form">
        <div class="card">
          <label>Nombre Completo</label>
          <input v-model="name" type="text" required class="input-control" />
          
          <label>Email</label>
          <input v-model="email" type="email" required class="input-control" />
          
          <label>Currículum (PDF, DOC, DOCX)</label>
          <input
            ref="fileInput"
            type="file"
            accept=".pdf,.doc,.docx"
            @change="onFileChange"
            required
            class="input-control file-input"
          />
          
          <button class="button-primary" :disabled="loading">
            {{ loading ? "Enviando..." : "Enviar Currículum" }}
          </button>
          
          <p v-if="success" class="msg-success">
            ¡Gracias! Hemos recibido tu currículum. Te contactaremos pronto.
          </p>
          <p v-if="error" class="msg-error">
            Ocurrió un error al enviar tu currículum. Intenta nuevamente.
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { uploadCV } from "@/services/cv";

export default defineComponent({
  name: "CvView",
  setup() {
    const name = ref("");
    const email = ref("");
    const file = ref<File | null>(null);
    const loading = ref(false);
    const success = ref(false);
    const error = ref(false);
    const fileInput = ref<HTMLInputElement | null>(null);

    const onFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        file.value = target.files[0];
      }
    };

    const onSubmit = async () => {
      if (!file.value) return;
      
      loading.value = true;
      success.value = false;
      error.value = false;
      
      try {
        await uploadCV({
          name: name.value,
          email: email.value,
          file: file.value,
        });
        
        success.value = true;
        // Limpiar formulario
        name.value = "";
        email.value = "";
        file.value = null;
        if (fileInput.value) {
          fileInput.value.value = "";
        }
      } catch (e) {
        error.value = true;
      } finally {
        loading.value = false;
      }
    };

    return {
      name,
      email,
      file,
      loading,
      success,
      error,
      fileInput,
      onFileChange,
      onSubmit,
    };
  },
});
</script>

<style scoped>
.cv-section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  margin-bottom: 0;
  padding-bottom: 0;
}

.cv-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(135deg, rgba(10, 14, 20, 0.7), rgba(15, 23, 42, 0.8)),
    url('@/assets/background-contacto.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
}

.cv-wrapper {
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  padding: 60px 16px 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
}

.cv-header {
  text-align: center;
  margin-bottom: 12px;
}

.cv-header h1 {
  margin: 0 0 4px 0;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.cv-header p {
  color: #ffffff;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.cv-form {
  width: 100%;
}

.card {
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.05), rgba(34, 197, 94, 0.05));
  z-index: -1;
}

label {
  display: block;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 6px;
  color: #ffffff;
  opacity: 0.9;
}

.input-control {
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(10, 14, 20, 0.8);
  color: #ffffff;
  font-size: 16px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  backdrop-filter: blur(8px);
}

.input-control:focus {
  border-color: #7dd3fc;
  background: rgba(10, 14, 20, 0.8);
  box-shadow: 0 0 0 3px rgba(125, 211, 252, 0.3);
  transform: translateY(-2px);
}

.input-control:hover {
  border-color: rgba(125, 211, 252, 0.4);
}

.file-input {
  cursor: pointer;
}

.file-input::-webkit-file-upload-button {
  background: #495057;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  margin-right: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.file-input::-webkit-file-upload-button:hover {
  filter: brightness(1.05);
}

.button-primary {
  margin-top: 14px;
  width: 100%;
  padding: 12px 16px;
  background: #495057;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.button-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.button-primary:hover::before {
  left: 100%;
}

.button-primary:hover {
  filter: brightness(1.05);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(34, 197, 94, 0.4);
}

.button-primary:active {
  transform: translateY(1px);
}

.button-primary:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}

.msg-success {
  color: #22c55e;
  margin-top: 10px;
  animation: slideInUp 0.5s ease-out;
}

.msg-error {
  color: #ef4444;
  margin-top: 10px;
  animation: slideInUp 0.5s ease-out;
}

/* Animaciones de entrada */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-header {
  animation: fadeInDown 0.8s ease-out;
}

.animate-content {
  animation: slideInUp 1s ease-out 0.3s both;
}

.animate-form {
  animation: slideInUp 1s ease-out 0.3s both;
}

.card {
  animation: scaleIn 0.6s ease-out 0.6s both;
}

/* Responsive */
@media (max-width: 768px) {
  .cv-wrapper {
    padding: 24px 12px;
  }
  
  .animate-content,
  .animate-form {
    animation-delay: 0.2s;
  }
  
  .card {
    animation-delay: 0.4s;
    padding: 16px;
  }
  
  .input-control {
    font-size: 16px; /* Previene zoom en iOS */
  }
}

@media (max-width: 480px) {
  .cv-header h1 {
    font-size: 1.8rem;
  }
  
  .card {
    padding: 12px;
  }
}
</style>
