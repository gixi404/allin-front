import Section from "../components/Section";

function AboutUs() {
  return (
    <Section>
      <div className="w-full max-w-[700px] px-8 sm:px-0 flex flex-col justify-start items-start gap-y-8">
        <h3 className="w-full text-4xl lg:text-5xl tracking-tight text-balance font-[700] text-start sm:mb-6">
          Sobre Nosotros
        </h3>
        <p className="text-[19px] font-[500] w-full text-start">
          En <b>All In Informática</b>, nos especializamos en ofrecer una amplia
          gama de insumos informáticos y servicios técnicos de alta calidad.
          Somos un equipo apasionado por la tecnología y comprometido con
          brindar soluciones prácticas y eficientes a nuestros clientes. Desde
          componentes y accesorios hasta equipos completos, nuestra prioridad es
          facilitarte el acceso a productos confiables y adaptados a tus
          necesidades.
        </p>

        <p className="text-[19px] font-[500] w-full text-start">
          No solo vendemos productos; también te acompañamos con un servicio
          técnico especializado. Nuestro objetivo es asegurarnos de que tu
          tecnología funcione a la perfección, ya sea a través de reparaciones,
          mantenimiento o asesoramiento personalizado. Creemos que la tecnología
          debe ser una herramienta accesible y útil para todos, por eso nos
          esforzamos por ofrecer un servicio amigable y soluciones sostenibles.
        </p>

        <p className="text-[19px] font-[500] w-full text-start">
          Te invitamos a explorar nuestro sitio web o visitar nuestro local para
          descubrir cómo podemos ayudarte. En All In Informática, trabajamos
          para ser tu aliado más confiable en tecnología y soluciones
          informáticas.
        </p>
      </div>
    </Section>
  );
}

export default AboutUs;
