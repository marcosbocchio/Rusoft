<template>
  <!-- Nuestra Empresa -->
  <section id="empresa" class="empresa-section">
    <div class="empresa-container">
      <div class="empresa-content">

        <!-- Intro -->
        <div class="intro-section">
          <h2 class="intro-title">Nuestra Empresa</h2>
          <p class="intro-description">
            En <span class="brand-text">Rusoft</span> creemos que la tecnología no es un fin en sí mismo, sino un habilitador real del negocio. Diseñamos y desarrollamos software que combina <span class="highlight-text">calidad técnica</span>, foco en el <span class="highlight-text">usuario</span> y resultados <span class="highlight-text">medibles</span>. Nuestro compromiso es que cada entrega marque una diferencia tangible.
          </p>
        </div>

        <!-- Historia + Cómo trabajamos -->
        <div class="grid-section">
          <div class="grid-item">
            <h3 class="section-title">Nuestra historia</h3>
            <p class="section-text">
              Rusoft nace con una convicción simple: crear soluciones de software que la gente disfrute usar y que resuelvan problemas concretos. Crecimos junto a nuestros clientes, acompañando sus desafíos de digitalización, optimización de procesos y expansión. En ese camino consolidamos un estilo de trabajo basado en transparencia, mejora continua y cercanía: no creemos en proyectos "caja negra", sino en integrar equipos y compartir avances frecuentes.
            </p>
          </div>
          <div class="grid-item">
            <h3 class="section-title">Cómo trabajamos</h3>
            <p class="section-text">
              Nuestra metodología combina prácticas ágiles con gestión de producto sólida. Empezamos entendiendo contexto y objetivos, hablamos con usuarios, mapeamos flujos e identificamos oportunidades. Luego prototipamos para validar temprano y construimos en ciclos cortos, entregando valor incremental con calidad técnica. Apostamos por una arquitectura mantenible, tests automatizados y monitoreo que muestra lo que realmente importa.
            </p>
          </div>
        </div>

        <!-- Cita -->
        <blockquote class="quote-section">
          "Construimos software que se siente bien de usar y que entrega valor desde el primer release. Nuestro estándar es que cada entrega haga una diferencia real para el negocio."
        </blockquote>

        <!-- Qué hacemos + Equipo -->
        <div class="grid-section">
          <div class="grid-item">
            <h3 class="section-title">Qué hacemos</h3>
            <p class="section-text">
              Desarrollamos sistemas a medida para distintos sectores: autogestión tributaria, facturación electrónica, control de stock, gestión de fiscalizaciones y más. También creamos aplicaciones web y móviles con foco en la experiencia de usuario, integraciones con terceros y tableros de indicadores. Nuestro diferencial está en entender el proceso de negocio detrás de cada pedido y medir impacto una vez en producción.
            </p>
          </div>
          <div class="grid-item">
            <h3 class="section-title">Nuestro equipo</h3>
            <p class="section-text">
              Somos un equipo multidisciplinario de desarrolladores, diseñadores y especialistas en producto. Nos une la curiosidad, la colaboración y la obsesión por los detalles que elevan la experiencia. Fomentamos feedback honesto, documentación clara y aprendizaje continuo. Creemos que la mejor innovación surge de comunicación abierta, foco y autonomía para decidir.
            </p>
          </div>
        </div>

        <!-- Valores -->
        <div class="valores-section">
          <h3 class="valores-title">Valores que nos definen</h3>
          <div class="valores-grid">
            <div class="valor-card">
              <h4 class="valor-title">Transparencia</h4>
              <p class="valor-text">Visibilidad total del trabajo, estimaciones realistas y conversaciones abiertas sobre riesgos y decisiones.</p>
            </div>
            <div class="valor-card">
              <h4 class="valor-title">Calidad pragmática</h4>
              <p class="valor-text">Código limpio, pruebas automatizadas y monitoreo, evitando burocracia innecesaria.</p>
            </div>
            <div class="valor-card">
              <h4 class="valor-title">Orientación a resultados</h4>
              <p class="valor-text">Priorizamos lo que realmente mueve la aguja del negocio y medimos el impacto de cada entrega.</p>
            </div>
            <div class="valor-card">
              <h4 class="valor-title">Empatía con el usuario</h4>
              <p class="valor-text">Diseñamos para personas, no para especificaciones. La usabilidad es un requisito, no un adorno.</p>
            </div>
          </div>
        </div>

        <!-- Compromiso + Diseño -->
        <div class="grid-section">
          <div class="grid-item">
            <h3 class="section-title">Nuestro compromiso</h3>
            <p class="section-text">
              Cada proyecto es una relación de largo plazo. Acompañamos el ciclo completo: discovery, diseño, desarrollo, despliegue y evolución. Si algo puede hacerse mejor, lo proponemos. Si un objetivo cambia, nos adaptamos. Y si hay decisiones difíciles, las tomamos con datos y de la mano de nuestros clientes.
            </p>
          </div>
          <div class="grid-item">
            <h3 class="section-title">Diseño y prototipado</h3>
            <p class="section-text">
              Diseñamos con foco en el usuario, validamos con prototipos de alta fidelidad y entregamos de forma continua. La calidad técnica y la usabilidad guían cada release.
            </p>
          </div>
        </div>

        <!-- Cierre -->
        <div class="cierre-section">
          <p class="cierre-text">
            Si estás pensando en iniciar un nuevo producto, modernizar sistemas o integrar herramientas, nos encantaría conversar. En <span class="brand-text">Rusoft</span> combinamos estrategia, diseño y tecnología para llevar tus ideas a producción con calidad y velocidad.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.empresa-section {
  background-color: #ffffff;
  padding: 80px 0;
}

.empresa-container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 16px;
}

.empresa-content {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

/* Intro Section */
.intro-section {
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
}

.intro-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 24px 0;
}

.intro-description {
  font-size: 1.125rem;
  line-height: 1.75;
  color: #475569;
  margin: 0;
}

.brand-text {
  font-weight: 600;
  color: #052c59;
}

.highlight-text {
  font-weight: 500;
}

/* Grid Section */
.grid-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 16px 0;
}

.section-text {
  color: #475569;
  line-height: 1.75;
  margin: 0;
}

/* Quote Section */
.quote-section {
  padding: 32px;
  background-color: #f8fafc;
  border-left: 4px solid #052c59;
  font-style: italic;
  font-size: 1.125rem;
  color: #334155;
  max-width: 896px;
  margin: 0 auto;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Valores Section */
.valores-section {
  text-align: center;
}

.valores-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 32px 0;
}

.valores-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.valor-card {
  padding: 24px;
  background-color: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.valor-title {
  font-weight: 600;
  color: #052c59;
  margin: 0 0 8px 0;
}

.valor-text {
  color: #475569;
  font-size: 0.875rem;
  line-height: 1.75;
  margin: 0;
}

/* Cierre Section */
.cierre-section {
  text-align: center;
  max-width: 768px;
  margin: 80px auto 0;
}

.cierre-text {
  font-size: 1.125rem;
  line-height: 1.75;
  color: #334155;
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .grid-section {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .valores-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .empresa-section {
    padding: 60px 0;
  }
  
  .empresa-container {
    padding: 0 20px;
  }
  
  .empresa-content {
    gap: 60px;
  }
  
  .intro-title {
    font-size: 1.875rem;
  }
  
  .intro-description {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .section-text {
    font-size: 0.95rem;
  }
  
  .valores-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .valor-card {
    padding: 20px;
  }
  
  .valor-title {
    font-size: 1rem;
  }
  
  .valor-text {
    font-size: 0.85rem;
  }
  
  .quote-section {
    padding: 24px;
    font-size: 1rem;
  }
  
  .cierre-section {
    margin-top: 60px;
  }
  
  .cierre-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .empresa-section {
    padding: 40px 0;
  }
  
  .empresa-container {
    padding: 0 16px;
  }
  
  .empresa-content {
    gap: 40px;
  }
  
  .intro-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .intro-description {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .section-title {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
  
  .section-text {
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  .valores-title {
    font-size: 1.3rem;
    margin-bottom: 24px;
  }
  
  .valores-grid {
    gap: 16px;
  }
  
  .valor-card {
    padding: 16px;
  }
  
  .valor-title {
    font-size: 0.95rem;
    margin-bottom: 6px;
  }
  
  .valor-text {
    font-size: 0.8rem;
    line-height: 1.5;
  }
  
  .quote-section {
    padding: 20px;
    font-size: 0.95rem;
    margin: 0 16px;
  }
  
  .cierre-section {
    margin-top: 40px;
  }
  
  .cierre-text {
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

@media (max-width: 360px) {
  .empresa-container {
    padding: 0 12px;
  }
  
  .empresa-content {
    gap: 32px;
  }
  
  .intro-title {
    font-size: 1.3rem;
  }
  
  .intro-description {
    font-size: 0.9rem;
  }
  
  .section-title {
    font-size: 1.1rem;
  }
  
  .section-text {
    font-size: 0.85rem;
  }
  
  .valores-title {
    font-size: 1.2rem;
  }
  
  .valor-card {
    padding: 14px;
  }
  
  .valor-title {
    font-size: 0.9rem;
  }
  
  .valor-text {
    font-size: 0.75rem;
  }
  
  .quote-section {
    padding: 16px;
    font-size: 0.9rem;
    margin: 0 12px;
  }
  
  .cierre-text {
    font-size: 0.9rem;
  }
}
</style>
