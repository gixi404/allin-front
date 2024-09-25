import { Trash as Icon } from "lucide-react";
import propTypes from "prop-types";
import useDolar from "../../hooks/useDolar";
import { formatPrice, roundPrice } from "../../utils/helpers";
import { useStore } from "../../utils/store";
import CartQuantity from "./CartQuantity";
import DEFAULT_IMG from "/logo-img.png";

function CartProduct(props) {
  const { dolar } = useDolar(),
    { id, img, name, price, showMP, quantity } = props,
    price_product = formatPrice(roundPrice(price * dolar) * quantity),
    image = img == 200 || !img ? DEFAULT_IMG : img,
    { removeProduct, myCart, setMyCart } = useStore();

  function handleQuantity(e) {
    const quantity = parseInt(e.target.value);
    if ([1, 2, 3].includes(quantity)) {
      const updatedCart = myCart.map(product =>
        product.id === id ? { ...product, quantity } : product
      );
      setMyCart(updatedCart);
    }
  }

  return (
    <li className="flex sm:flex-row flex-col items-start sm:items-center justify-between border-b  border-slate-400 pb-2">
      <div className="flex items-center space-x-4">
        <img
          alt="Imagen de producto"
          className="w-16 h-16 object-cover object-center bg-white rounded-md"
          src={image}
          loading="lazy"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-lg text-gray-900">${price_product}</p>
        </div>
      </div>

      <div className="flex justify-end items-end sm:items-center gap-x-3 w-full sm:w-max">
        <CartQuantity
          showMP={showMP}
          quantity={quantity}
          handleQuantity={handleQuantity}
        />
        {!showMP && (
          <Icon
            className="cursor-pointer hover:bg-red-50 duration-100 rounded-lg p-1 w-8 h-8 opacity-70"
            size={28}
            onClick={() => removeProduct(id)}
          />
        )}
      </div>
    </li>
  );
}

export default CartProduct;

CartProduct.propTypes = {
  id: propTypes.number,
  img: propTypes.string,
  name: propTypes.string,
  price: propTypes.number,
  quantity: propTypes.number,
  showMP: propTypes.bool,
};
