export type SiteContent = {
  site: {
    brand: string;
    tagline: string;
    nav: string[];
    footer: {
      columns: Record<string, string[]>;
      copyright: string;
      logo_alt: string;
    };
  };
  pages: any;
};

export const content: SiteContent = {
  site: {
    brand: "Rusoft",
    tagline: "Soluciones Innovadoras de Software",
    nav: ["Inicio", "Servicios", "Portafolio", "Nosotros", "Contacto"],
    footer: {
      columns: {
        Servicios: [
          "Desarrollo de Software",
          "Sistemas de Autogestión",
          "Facturación Electrónica",
          "Consultoría",
        ],
        Empresa: ["Nosotros", "Proceso", "Contacto", "FAQ"],
        Legal: ["Política de Privacidad", "Términos de Servicio"],
      },
      copyright: "© 2025 Rusoft. Todos los derechos reservados.",
      logo_alt: "Rusoft Logo",
    },
  },
  pages: {
    home: {
      hero: {
        headline: "Creamos el software que tu negocio necesita para crecer.",
        subheadline:
          "Diseñamos y programamos webs y apps a medida: intuitivas, potentes y hechas para el éxito. ¿Estás listo para despegar online?",
        primary_cta: { label: "Hablemos de tu idea", intent: "start_intake" },
      },
      social_proof: {
        title: "Lo que Dicen Nuestros Clientes",
        testimonials: [
          {
            quote:
              "Rusoft ha demostrado una comprensión profunda de las necesidades de nuestros usuarios, traduciéndolas en una interfaz que es a la vez poderosa y una delicia de usar.",
            author: "Sofía García",
            role: "Directora de Producto, InnovaTech",
          },
          {
            quote:
              "El sistema de autogestión que desarrollaron para nosotros ha sido un cambio de juego. La eficiencia y la reducción de errores son notables. ¡Un equipo increíblemente profesional!",
            author: "Juan Pérez",
            role: "Gerente de Finanzas, Logística Total",
          },
          {
            quote:
              "Desde el diseño inicial hasta el despliegue final, el equipo de Rusoft fue colaborativo y transparente. Su consultoría nos ayudó a definir mejor nuestro producto y a lanzarlo con éxito.",
            author: "Ana Rodríguez",
            role: "CEO, EmprendeDigital",
          },
        ],
        clients_title: "Algunos de nuestros principales clientes:",
        clients: [
          "Municipalidad de Vicente Lopez",
          "ENOD",
          "La Pastoriza",
          "Pri Sport",
          "De Marco",
          "De Marco Knauf",
          "Sanitarios Alvarez",
        ],
      },
      services: {
        title: "Servicios Clave",
        items: [
          {
            name: "Sistemas de Autogestión Tributaria",
            summary:
              "Soluciones para simplificar y automatizar tus obligaciones fiscales y contables.",
          },
          {
            name: "Sistemas de Facturación Electrónica",
            summary:
              "Implementamos sistemas de facturación eficientes y seguros, cumpliendo con la normativa vigente.",
          },
          {
            name: "Sistemas de Cuentas Corrientes",
            summary:
              "Gestión avanzada de saldos de clientes y proveedores para un control financiero preciso.",
          },
          {
            name: "Sistemas de Control de Stock",
            summary:
              "Optimiza tu inventario, reduce pérdidas y mejora la eficiencia de tu cadena de suministro.",
          },
          {
            name: "Gestión de Fiscalizaciones",
            summary:
              "Sistemas especializados para gestionar y automatizar procesos de fiscalización y auditorías.",
          },
          {
            name: "Soluciones de Inteligencia Artificial",
            summary:
              "Implementamos IA para automatizar procesos, análisis predictivo y optimización de decisiones de negocio.",
          },
          {
            name: "Desarrollo de APIs y Microservicios",
            summary:
              "Arquitecturas escalables y modulares que permiten integración eficiente entre sistemas y servicios.",
          },
          {
            name: "Migración y Modernización de Sistemas",
            summary:
              "Actualizamos sistemas legacy a tecnologías modernas, mejorando rendimiento y mantenibilidad.",
          },
          {
            name: "Consultoría en Transformación Digital",
            summary:
              "Acompañamos a las empresas en su proceso de digitalización con estrategias personalizadas.",
          },
          {
            name: "Sistemas de Business Intelligence",
            summary:
              "Dashboards y reportes inteligentes que transforman datos en insights accionables para tu negocio.",
          },
          {
            name: "Desarrollo de Aplicaciones Móviles",
            summary:
              "Apps nativas e híbridas para iOS y Android, diseñadas para ofrecer la mejor experiencia de usuario.",
          },
          {
            name: "Auditoría y Optimización de Procesos",
            summary:
              "Analizamos y optimizamos tus procesos de negocio para maximizar eficiencia y reducir costos operativos.",
          },
        ],
      },
    },
  },
};