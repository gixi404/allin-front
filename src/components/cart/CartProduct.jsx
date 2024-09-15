import { Trash as Icon } from "lucide-react";
import propTypes from "prop-types";
import useDolar from "../../hooks/useDolar";
import { formatPrice, roundPrice } from "../../utils/helpers";
import { useStore } from "../../utils/store";
import DEFAULT_IMG from "/logo-img.png";

function CartProduct(props) {
  const { dolar } = useDolar(),
    { id, img, name, price, showMP } = props,
    price_product = formatPrice(roundPrice(price * dolar)),
    image = img == 200 || !img ? DEFAULT_IMG : img,
    { removeProduct } = useStore();

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
          <p className="font-semibold">{name}</p>
          <p className="text-lg text-gray-900">${price_product}</p>
        </div>
      </div>
      {!showMP && (
        <Icon
          className="cursor-pointer hover:bg-white duration-100 rounded-lg p-1 w-8 h-8 opacity-70"
          size={28}
          onClick={() => removeProduct(id)}
        />
      )}
    </li>
  );
}

export default CartProduct;

CartProduct.propTypes = {
  id: propTypes.number,
  img: propTypes.string,
  name: propTypes.string,
  price: propTypes.number,
  showMP: propTypes.bool,
};
