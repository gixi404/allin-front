function CartAside() {
  return (
    <aside className="w-full lg:w-2/6 flex flex-col justify-start items-start gap-y-2 lg:gap-y-4">
      <p className="w-full text-2xl lg:text-3xl font-semibold">
        Aviso sobre tu compra
      </p>
      <p className="w-full text-pretty text-sm lg:text-lg">
        El retiro de la compra se realiza de manera presencial en nuestro local.
        La compra una vez realizada, estará disponible su retiro hasta dentro de
        los próximos 3 días hábiles. En caso de no contar con stock de un
        producto en particular se reembolsará el valor del producto en su
        totalidad. <br /> <br /> Para cualquier consulta o reclamo comuniquese
        vía WhatsApp a este número: +54 261 498-8748.
      </p>
    </aside>
  );
}

export default CartAside;
