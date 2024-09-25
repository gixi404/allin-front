import { Trash as Icon } from "lucide-react";
import propTypes from "prop-types";
import useDolar from "../../hooks/useDolar";
import { formatPrice, roundPrice } from "../../utils/helpers";
import { useStore } from "../../utils/store";
import DEFAULT_IMG from "/logo-img.png";

function CartProduct(props) {
  const { dolar } = useDolar(),
    { id, img, name, price, showMP, quantity } = props,
    price_product = formatPrice(roundPrice(price * dolar) * quantity),
    image = img == 200 || !img ? DEFAULT_IMG : img,
    { removeProduct, myCart, setMyCart } = useStore();

  function handleQuantity(e) {
    const quantity = Number(e.target.value);
    if (quantity >= 1 && quantity <= 3) {
      const newProduct = { ...props, quantity };
      const newCart = myCart.filter(product => product.id !== id);
      setMyCart([...newCart, newProduct]);
    }
  }

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
      {showMP ? (
        <div className="flex justify-center items-center gap-x-3">
          <p className="font-[500]">Cantidad: {quantity}</p>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-x-3">
          <label htmlFor="quantity" className="font-[500]">
            Cantidad:
            <input
              className="outline-0 rounded-md text-center ml-1 w-8 h-6"
              type="number"
              id="quantity"
              defaultValue={1}
              min={1}
              max={3}
              onChange={handleQuantity}
            />
          </label>
          <Icon
            className="cursor-pointer hover:bg-red-50 duration-100 rounded-lg p-1 w-8 h-8 opacity-70"
            size={28}
            onClick={() => removeProduct(id)}
          />
        </div>
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
  quantity: propTypes.number,
  showMP: propTypes.bool,
};
