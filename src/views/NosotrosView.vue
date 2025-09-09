<template>
  <section class="section">
    <div class="about-wrapper">
      <header class="about-hero animate-header">
        <h1>Nosotros</h1>
        <p class="animate-content">
          En Rusoft creemos que la tecnología debe ser un habilitador real del
          negocio. Diseñamos y desarrollamos software que combina calidad
          técnica, foco en el usuario y resultados medibles.
        </p>
      </header>

      <article class="about-content animate-content">
        <h2>Nuestra historia</h2>
        <p>
          Rusoft nace como un equipo con una convicción simple: crear soluciones
          de software que la gente disfrute usar y que, al mismo tiempo,
          resuelvan problemas concretos del día a día. A lo largo del tiempo,
          fuimos creciendo junto a nuestros clientes, acompañando sus desafíos
          de digitalización, optimización de procesos y expansión. En ese camino
          consolidamos una forma de trabajar centrada en la transparencia, la
          mejora continua y la cercanía. No creemos en proyectos “caja negra”:
          nos integramos con tu equipo, compartimos avances de manera frecuente
          y tomamos decisiones basadas en datos y en los objetivos de negocio.
        </p>

        <h2>Cómo trabajamos</h2>
        <p>
          Nuestra metodología combina prácticas ágiles con gestión sólida de
          producto. Arrancamos entendiendo el contexto y los objetivos: hablamos
          con usuarios, relevamos flujos, identificamos oportunidades y
          priorizamos hipótesis. Con ese mapa, diseñamos prototipos de alta
          fidelidad para validar decisiones temprano. Cuando pasamos a
          construcción, iteramos en ciclos cortos, entregando valor de forma
          incremental y manteniendo una calidad técnica que permita escalar sin
          dolor. Creemos en una arquitectura simple y mantenible, tests que den
          confianza y monitoreo que muestre lo que realmente importa.
        </p>

        <div class="about-quote">
          <p>
            “Construimos software que se siente bien de usar y que entrega valor
            desde el primer release. Nuestro estándar es que cada entrega haga
            una diferencia real para el negocio.”
          </p>
        </div>

        <h2>Qué hacemos</h2>
        <p>
          Desarrollamos sistemas a medida para distintos sectores: autogestión
          tributaria, facturación electrónica, cuentas corrientes, control de
          stock y gestión de fiscalizaciones, entre otros. También construimos
          aplicaciones web y móviles orientadas a la experiencia de usuario,
          integraciones con servicios de terceros y tableros de indicadores
          operativos. Más allá de la tecnología, nuestro diferencial está en
          entender el proceso de negocio detrás de cada pedido, proponer mejoras
          y medir impacto una vez que el sistema está en producción.
        </p>

        <h2>Nuestro equipo</h2>
        <p>
          Somos un equipo multidisciplinario de desarrolladores, diseñadores y
          especialistas en producto. Nos une la curiosidad, el trabajo en equipo
          y la obsesión por los detalles que elevan la experiencia. Fomentamos
          una cultura de feedback honesto, documentación clara y aprendizaje
          continuo. Creemos que las mejores soluciones surgen de la combinación
          entre buena comunicación, foco y autonomía para tomar decisiones
          informadas.
        </p>

        <h2>Valores que nos definen</h2>
        <ul class="about-list">
          <li>
            <strong>Transparencia:</strong> visibilidad total del trabajo,
            estimaciones realistas y conversaciones abiertas sobre riesgos y
            trade‑offs.
          </li>
          <li>
            <strong>Calidad pragmática:</strong> código limpio, pruebas
            automatizadas y monitoreo, sin burocracia innecesaria.
          </li>
          <li>
            <strong>Orientación a resultados:</strong> priorizamos lo que mueve
            la aguja del negocio y medimos el impacto de cada entrega.
          </li>
          <li>
            <strong>Empatía con el usuario:</strong> diseñamos para personas, no
            para especificaciones. La usabilidad es un requisito, no un adorno.
          </li>
        </ul>

        <h2>Nuestro compromiso</h2>
        <p>
          Cada proyecto es una relación de largo plazo. Nos comprometemos con la
          estabilidad, el rendimiento y la seguridad de las soluciones que
          construimos. Acompañamos el ciclo completo: discovery, diseño,
          desarrollo, despliegue y evolución. Si algo puede hacerse mejor, lo
          proponemos. Si un objetivo cambia, nos adaptamos. Y si hay que tomar
          decisiones difíciles, lo hacemos con datos y de la mano de nuestros
          clientes.
        </p>

        <div class="about-grid">
          <figure class="about-card">
            <img src="@/assets/tarjeta1.png" alt="Diseño y prototipado" />
            <figcaption>Diseño centrado en el usuario</figcaption>
          </figure>
          <figure class="about-card">
            <img src="@/assets/tarjeta2.png" alt="Desarrollo y entrega" />
            <figcaption>Entrega continua y calidad</figcaption>
          </figure>
        </div>

        <p>
          Si estás pensando en iniciar un nuevo producto, modernizar sistemas o
          integrar herramientas, nos encantaría conversar. En Rusoft combinamos
          estrategia, diseño y tecnología para llevar tus ideas a producción con
          calidad y velocidad.
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.about-wrapper {
  max-width: 980px;
  margin: 0 auto;
  padding: 32px 16px;
}

.about-hero {
  text-align: center;
  margin-bottom: 16px;
}

.about-hero h1 {
  margin: 0 0 6px 0;
}

.about-media {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  margin-bottom: 18px;
  background: rgba(255, 255, 255, 0.08);
}

.about-media img {
  display: block;
  width: 100%;
  height: 320px;
  object-fit: cover;
}

.about-content h2 {
  margin-top: 18px;
  margin-bottom: 8px;
}

.about-content p {
  line-height: 1.65;
  opacity: 1;
}

.about-quote {
  margin: 12px 0;
  padding: 14px 16px;
  border-left: 4px solid #7dd3fc;
  background: rgba(125, 211, 252, 0.15);
  border-radius: 8px;
  border: 1px solid rgba(125, 211, 252, 0.2);
}

.about-list {
  padding-left: 18px;
}

.about-list li {
  margin-bottom: 6px;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 14px 0 6px 0;
}

.about-card {
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.about-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.about-card figcaption {
  padding: 10px 12px;
  font-size: 14px;
  opacity: 1;
}

@media (max-width: 720px) {
  .about-media img {
    height: 240px;
  }
  .about-grid {
    grid-template-columns: 1fr;
  }
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

/* Animaciones escalonadas para elementos específicos */
.about-content h2 {
  animation: slideInUp 0.8s ease-out 0.5s both;
}

.about-content p {
  animation: slideInUp 0.8s ease-out 0.7s both;
}

.about-quote {
  animation: scaleIn 0.6s ease-out 0.9s both;
}

.about-list {
  animation: slideInUp 0.8s ease-out 1.1s both;
}

.about-grid {
  animation: slideInUp 0.8s ease-out 1.3s both;
}

.about-card {
  animation: scaleIn 0.6s ease-out 1.5s both;
}

/* Responsive */
@media (max-width: 768px) {
  .animate-content {
    animation-delay: 0.2s;
  }
  
  .about-content h2 {
    animation-delay: 0.4s;
  }
  
  .about-content p {
    animation-delay: 0.6s;
  }
  
  .about-quote {
    animation-delay: 0.8s;
  }
  
  .about-list {
    animation-delay: 1s;
  }
  
  .about-grid {
    animation-delay: 1.2s;
  }
  
  .about-card {
    animation-delay: 1.4s;
  }
}
</style>
