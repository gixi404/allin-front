import { useLocalStorage } from "@uidotdev/usehooks";
import { Trash as Icon } from "lucide-react";
import propTypes from "prop-types";
import useDolar from "../hooks/useDolar";
import { formatPrice } from "../utils/helpers";
import DEFAULT_IMG from "/logo-img.png";

function CartProduct(props) {
  const { dolar } = useDolar(),
    [cart, setCart] = useLocalStorage("cart", []),
    { id, img, name, price } = props,
    price_product = formatPrice((price * dolar).toFixed(2)),
    image = img == 200 ? DEFAULT_IMG : img;

  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          alt="Imagen de producto"
          className="w-16 h-16 object-cover object-center bg-white rounded-md"
          src={image}
          loading="lazy"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-lg text-gray-900">${price_product}</p>
        </div>
      </div>
      <Icon
        className="cursor-pointer hover:bg-white duration-100 rounded-lg p-1 w-8 h-8 opacity-70"
        size={28}
        onClick={() => setCart(cart.filter(p => p.id != id))}
      />
    </li>
  );
}

export default CartProduct;

CartProduct.propTypes = {
  id: propTypes.number,
  img: propTypes.string,
  name: propTypes.string,
  price: propTypes.number,
};
