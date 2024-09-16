import Section from "../components/Section";

function TermsAndConditions() {
  return (
    <Section>
      <div className="w-full max-w-[750px] h-full [&>p]:text-lg lg:[&>p]:text-xl space-y-6 bg-slate-100 p-6 lg:p-10 lg:rounded-lg lg:border-2 border-slate-400">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-10">
          Términos y Condiciones de All In Informática
        </h3>
        <p>
          <b>1. Pago de productos</b> <br />
          Los productos ofrecidos en <b>All In Informática</b> están disponibles
          bajo un esquema de pago. Las tarifas, duración y condiciones
          aplicables a la compra de estos productos están sujetas a cambios sin
          previo aviso.
        </p>
        <p>
          <b>2. Descripción del producto</b> <br />
          Los precios, descripciones y la disponibilidad de los productos se
          detallan en las secciones correspondientes del sitio web. Nos
          esforzamos por proporcionar descripciones precisas, pero la
          representación de los productos (imágenes, gráficos, colores, etc.)
          son ilustrativas, es solo de referencia y no constituye una garantía
          de las características exactas del producto.
        </p>
        <p>
          <b>3. Proceso de compra</b> <br />
          El proceso de compra incluye los siguientes pasos: Selección del
          producto deseado y verificación de la selección de compra. Realización
          del pedido a través del sitio web.
        </p>
        <p>
          <b>4. Retiro de productos</b> <br />
          Todas las compras realizadas en nuestro sitio web deben ser retiradas
          de manera presencial en nuestro local comercial. No ofrecemos envío de
          productos. El comprador debe presentar la confirmación de compra y una
          identificación válida al momento de retirar el pedido.
        </p>
        <p>
          <b>5. Disponibilidad de productos</b> <br />
          La aceptación de un pedido está sujeta a la disponibilidad del
          producto en el momento del retiro. En caso de no contar con stock del
          producto solicitado, ofreceremos una alternativa o la devolución total
          del importe pagado por dicho producto.
        </p>
        <p>
          <b> 6. Aceptación y confirmación del pedido</b> <br />
          El contrato de compra se formaliza en el momento en que confirmamos la
          aceptación del pedido, lo cual en un perido de 1 a 3 días se
          notificará al usuario a través de el número de celular proporcionado
          por el usuario. Si el pedido no puede ser aceptado, se procederá a un
          reembolso completo.
        </p>
        <p>
          <b>7. Formas de pago</b> <br />
          Las opciones de pago aceptadas se detallan durante el proceso de
          compra. Los pagos se procesan de manera segura a través de servicios
          de terceros, en este caso Mercado Pago. No almacenamos detalles de
          tarjetas de crédito ni información de pago. Si un pago falla o es
          rechazado, no estaremos obligados a cumplir con el pedido, y los
          costos adicionales serán responsabilidad del usuario.
        </p>
        <p>
          <b>8. Retención de propiedad</b> <br />
          Los productos seguirán siendo propiedad de All In Informática hasta
          que el pago total sea recibido. El usuario no adquirirá ningún derecho
          sobre el producto hasta que se haya completado el pago.
        </p>
        <p>
          <b>9. Resolución de disputas</b> <br />
          En caso de cualquier disputa, los usuarios pueden comunicarse con
          nosotros para resolverla de manera amistosa. Las reclamaciones pueden
          presentarse a través de nuestro WhastApp: +54 261 498-8748 o de manera
          presencial.
        </p>
      </div>
    </Section>
  );
}

export default TermsAndConditions;
