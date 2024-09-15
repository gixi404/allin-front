import { ArrowLeft as Icon } from "lucide-react";
import propTypes from "prop-types";
import CartProduct from "./CartProduct";
import ProductsBtn from "../buttons/ProductsBtn";

function CartItems({ cart, showMP, setShowMP }) {
  return (
    <>
      <hr className="w-full border border-slate-400 rounded-lg" />
      {showMP && (
        <p
          className="text-xl flex gap-x-2 hover:underline"
          onClick={() => setShowMP(false)}
        >
          <Icon size={25} strokeWidth={1.3} />
          <span className="cursor-pointer">Editar pedido</span>
        </p>
      )}
      <ul className="space-y-4 w-full">
        {cart.map(p => (
          <CartProduct key={p.id} showMP={showMP} {...p} />
        ))}
      </ul>
      <div className="w-full justify-center items-center flex">
        <ProductsBtn text="agregar productos" />
      </div>
    </>
  );
}

export default CartItems;

CartItems.propTypes = {
  cart: propTypes.array,
  showMP: propTypes.bool,
  setShowMP: propTypes.func,
};
