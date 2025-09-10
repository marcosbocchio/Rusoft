<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <div class="footer-item">
            <span class="footer-label">Ubicación:</span>
            <span class="footer-value">Gualeguaychú 2011, CABA, Argentina</span>
          </div>
          <div class="footer-item">
            <span class="footer-label">Email:</span>
            <a href="mailto:rusoft@rusoft.com.ar" class="footer-link">rusoft@rusoft.com.ar</a>
          </div>
        </div>
        <div class="copy">© 2025 Rusoft. Todos los derechos reservados.</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFooter",
});
</script>

<style scoped>
.app-footer {
  background: #0b0f14;
  color: #c9d3df;
  padding: 32px 20px;
  margin-top: 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
}

.footer-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

.footer-label {
  font-size: 12px;
  font-weight: 600;
  color: #8b949e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-value {
  font-size: 14px;
  color: #c9d3df;
}

.footer-link {
  font-size: 14px;
  color: #58a6ff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #79c0ff;
  text-decoration: underline;
}

.copy {
  font-size: 14px;
  opacity: 0.8;
  text-align: center;
  border-top: 1px solid #21262d;
  padding-top: 20px;
  width: 100%;
}

@media (min-width: 768px) {
  .footer-info {
    flex-direction: row;
    gap: 40px;
  }
  
  .footer-item {
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }
  
  .footer-label {
    font-size: 13px;
  }
  
  .footer-value,
  .footer-link {
    font-size: 15px;
  }
}
</style>
