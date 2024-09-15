import ProductsBtn from "../buttons/ProductsBtn";

function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-6 w-full">
      <p className="text-xl lg:text-2xl">El carrito está vacío...</p>
      <ProductsBtn text="ver productos" />
    </div>
  );
}

export default EmptyCart;
