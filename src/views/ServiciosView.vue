<template>
  <section class="section servicios-bg">
    <div class="container">
      <h1>Nuestros Servicios</h1>
      <p>Aquí puedes describir los servicios que ofrece Rusoft.</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServiciosView",
});
</script>

<style scoped>
/* Agrega estilos específicos para esta vista si es necesario */
.servicios-bg {
  background-image: url('@/assets/background4.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 60vh;
  display: flex;
  align-items: center;
}
</style>
