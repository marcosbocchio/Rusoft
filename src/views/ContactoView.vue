<template>
  <section id="contacto" class="section contact-section">
    <div class="contact-background"></div>
    <div class="contact-wrapper">
      <div class="contact-header animate-header">
        <h1>Contacto</h1>
        <p>Escríbenos y conversemos sobre tu proyecto.</p>
      </div>
      <form @submit.prevent="onSubmit" class="contact-form animate-form">
        <div class="card">
          <label>Nombre</label>
          <input v-model="name" type="text" required class="input-control" />
          <label>Email</label>
          <input v-model="email" type="email" required class="input-control" />
          <label>Teléfono (opcional)</label>
          <input
            v-model="phone"
            type="tel"
            placeholder="Ej: +54 9 11 1234-5678"
            class="input-control"
          />
          <label>Mensaje</label>
          <textarea
            v-model="message"
            required
            rows="5"
            class="input-control"
          ></textarea>
          <button class="button-primary" :disabled="loading">
            {{ loading ? "Enviando..." : "Enviar" }}
          </button>
          <p v-if="success" class="msg-success">
            ¡Gracias! Te contactaremos pronto.
          </p>
          <p v-if="error" class="msg-error">
            Ocurrió un error. Intenta nuevamente.
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { submitContact } from "@/services/contact";

export default defineComponent({
  name: "ContactoView",
  setup() {
    const name = ref("");
    const email = ref("");
    const phone = ref("");
    const message = ref("");
    const loading = ref(false);
    const success = ref(false);
    const error = ref(false);

    const onSubmit = async () => {
      loading.value = true;
      success.value = false;
      error.value = false;
      try {
        await submitContact({
          name: name.value,
          email: email.value,
          phone: phone.value || undefined,
          message: message.value,
        });
        success.value = true;
        name.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
      } catch (e) {
        error.value = true;
      } finally {
        loading.value = false;
      }
    };

    return { name, email, phone, message, loading, success, error, onSubmit };
  },
});
</script>

<style scoped>
.contact-section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  margin-bottom: 0;
  padding-bottom: 0;
}

.contact-background {
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

.contact-wrapper {
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

.contact-header {
  text-align: center;
  margin-bottom: 12px;
}

.contact-header h1 {
  margin: 0 0 4px 0;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.contact-header p {
  color: #ffffff;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.contact-form {
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
  backdrop-filter: blur(8px);
}

.input-control:focus {
  border-color: #7dd3fc;
  background: rgba(10, 14, 20, 0.8);
  box-shadow: 0 0 0 3px rgba(125, 211, 252, 0.3);
  transform: translateY(-2px);
}

.button-primary {
  margin-top: 14px;
  width: 100%;
  padding: 12px 16px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #0b121a;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.05s ease, filter 0.2s ease;
}

.button-primary:hover {
  filter: brightness(1.05);
}

.button-primary:active {
  transform: translateY(1px);
}

.button-primary:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.msg-success {
  color: #22c55e;
  margin-top: 10px;
}

.msg-error {
  color: #ef4444;
  margin-top: 10px;
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

.animate-form {
  animation: slideInUp 1s ease-out 0.3s both;
}

.card {
  animation: scaleIn 0.6s ease-out 0.6s both;
}

/* Animación para los inputs cuando se enfocan */
.input-control {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.input-control:focus {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(125, 211, 252, 0.3);
}

/* Animación para el botón */
.button-primary {
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
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(34, 197, 94, 0.4);
}

/* Animación para los mensajes de éxito/error */
.msg-success,
.msg-error {
  animation: slideInUp 0.5s ease-out;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-background {
    background-attachment: scroll;
  }
  
  .contact-wrapper {
    padding: 24px 16px;
    min-height: auto;
  }
  
  .animate-form {
    animation-delay: 0.2s;
  }
  
  .card {
    animation-delay: 0.4s;
    padding: 20px;
  }
  
  .input-control {
    padding: 12px 14px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .contact-wrapper {
    padding: 20px 12px;
  }
  
  .card {
    padding: 16px;
    border-radius: 12px;
  }
  
  .input-control {
    padding: 10px 12px;
    font-size: 16px;
  }
}
</style>
