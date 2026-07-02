import Image from "next/image";
import Link from "next/link";

const whatsappNumber = "5492634251825";
const whatsappText = encodeURIComponent(
  "Hola Studio Print, quiero pedir un presupuesto."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

const services = [
  {
    title: "DTF Textil",
    text: "Impresiones resistentes, colores intensos y gran durabilidad en prendas y telas.",
    image: "/images/dtftextil.png",
  },
  {
    title: "Sublimación",
    text: "Colores vibrantes y acabados profesionales en tazas, termos, mousepads y regalos.",
    image: "/images/sublimacion.png",
  },
  {
    title: "Vinilo Textil",
    text: "Personalizá prendas con nombres, logos, frases y diseños únicos con terminaciones limpias.",
    image: "/images/vinilotextil.png",
  },
  {
    title: "Stickers y Stickers UV",
    text: "Stickers con brillo, relieve y terminaciones premium para tu marca, productos o emprendimiento.",
    image: "/images/stickers.png",
  },
  {
    title: "Grabado y Corte Láser",
    text: "Grabados y cortes precisos sobre madera, acrílico, cuero y más, con excelente terminación.",
    image: "/images/grabadoycorte.png",
  },
];

const process = [
  {
    title: "Contanos tu idea",
    text: "Compartinos qué producto necesitás, cantidades y referencias.",
  },
  {
    title: "Te asesoramos",
    text: "Elegimos juntos el material, la técnica y la mejor terminación.",
  },
  {
    title: "Creamos tu producto",
    text: "Preparamos el diseño y producimos tu pedido con atención al detalle.",
  },
  {
    title: "Lo recibís donde estés",
    text: "Coordinamos retiro en San Martín o envío según tu necesidad.",
  },
];

export default function Home() {
  return (
    <main className="site">
      <header className="site-header">
        <Link href="#inicio" className="brand" aria-label="Studio Print inicio">
          <Image
            src="/images/logo-studio-print.png"
            alt="Studio Print"
            width={124}
            height={124}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link href="#inicio">Inicio</Link>
          <Link href="#servicios">Servicios</Link>
          <Link href="#trabajos">Trabajos</Link>
          <Link href="#proceso">Cómo trabajamos</Link>
          <Link href="#contacto">Contacto</Link>
        </nav>

        <div className="header-actions">
          <Link
            className="instagram"
            href="https://www.instagram.com/studioprint.sm/"
            target="_blank"
          >
            @studioprint.sm
          </Link>
          <Link className="btn btn-primary" href={whatsappUrl} target="_blank">
            Pedí tu presupuesto
          </Link>
          <button className="menu-button" aria-label="Abrir menú">
            ☰
          </button>
        </div>
      </header>

      <section id="inicio" className="hero section-shell">
        <div className="hero-copy">
          <h1>
            Impresión y personalización que hacen{" "}
            <span>destacar tu marca</span>
          </h1>
          <p className="lead">
            Creamos productos únicos para cada ocasión, cuidando cada detalle
            para que el resultado sea único y de la mejor calidad.
          </p>

          <div className="hero-buttons">
            <Link className="btn btn-primary" href={whatsappUrl} target="_blank">
              💬 Pedí tu presupuesto
            </Link>
            <Link className="btn btn-secondary" href="#servicios">
              Ver servicios →
            </Link>
          </div>

          <div className="features">
            <article>
              <strong>Calidad premium</strong>
              <span>Materiales de primera</span>
            </article>
            <article>
              <strong>Atención personalizada</strong>
              <span>Te asesoramos en cada paso</span>
            </article>
            <article>
              <strong>Envíos y retiros</strong>
              <span>San Martín, Mendoza y alrededores</span>
            </article>
          </div>
        </div>

        <div className="hero-visual" aria-label="Productos personalizados Studio Print">
          <span className="hero-visual-glow" aria-hidden="true" />
          <span className="hero-hexagon" aria-hidden="true" />
          <Image
            src="/images/hero-products.png"
            alt="Remera, taza, stickers, botella y producto de corte láser personalizados"
            width={1448}
            height={1086}
            priority
          />
        </div>
      </section>

      <section id="servicios" className="section services-section">
        <p className="eyebrow center">Nuestros servicios</p>
        <h2>
          Soluciones para <span>cada idea</span>
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-image-wrap">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1448}
                  height={1086}
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  aria-label={`Consultar por ${service.title}`}
                >
                  →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="trabajos" className="section works-section">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">Trabajos destacados</p>
            <h2>
              Ideas que cobraron <span>vida</span>
            </h2>
          </div>
          <Link
            href="https://www.instagram.com/studioprint.sm/"
            target="_blank"
          >
            Ver Instagram →
          </Link>
        </div>

        <div className="works-grid">
          {services.map((item) => (
            <article className="work-card" key={item.title}>
              <Image
                src={item.image}
                alt={item.title}
                width={1448}
                height={1086}
              />
              <div>
                <h3>{item.title}</h3>
                <p>Productos personalizados listos para destacar tu marca.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="proceso" className="section process-section">
        <div className="process-copy">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2>
            Un proceso simple, resultados <span>increíbles</span>
          </h2>
          <p className="muted">
            Te acompañamos desde la idea inicial hasta la entrega final del
            producto.
          </p>
        </div>

        <div className="steps">
          {process.map((step, index) => (
            <article key={step.title} className="step-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <div className="contact-card">
          <p className="eyebrow center">Contacto</p>
          <h2>
            Hablemos de <span>tu proyecto</span>
          </h2>
          <p>
            Mandanos tu idea, producto o cantidad estimada y te ayudamos a
            elegir la mejor opción.
          </p>
          <div className="contact-actions">
            <Link className="btn btn-primary" href={whatsappUrl} target="_blank">
              WhatsApp
            </Link>
            <Link
              className="btn btn-secondary"
              href="https://www.instagram.com/studioprint.sm/"
              target="_blank"
            >
              Instagram
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <Image src="/images/logo-studio-print.png" alt="Studio Print" width={58} height={58} />
          <p>Studio Print · San Martín, Mendoza · Productos personalizados</p>
        </div>

        <Link
          className="footer-credit"
          href="https://www.pantech.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Sitio desarrollado por</span>
          <Image
            src="/images/pantech-logo.png"
            alt="Pantech"
            width={120}
            height={40}
          />
        </Link>
      </footer>

      <Link
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        aria-label="Contactar por WhatsApp"
      >
        💬
      </Link>
    </main>
  );
}
