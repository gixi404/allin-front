import propTypes from "prop-types";
import { Link } from "wouter";
import useDolar from "../hooks/useDolar";
import { checkDescrip, formatPrice, roundPrice } from "../utils/helpers";
import { useStore } from "../utils/store";
import DEFAULT_IMG from "/logo-img.png";

function Product(props) {
  const { addProduct, myCart } = useStore(),
    { dolar, isLoading, status } = useDolar(),
    { id, img, price, name, description } = props,
    showBtn = status && dolar != 0 && !isLoading,
    product_img = img == 200 || !img ? DEFAULT_IMG : img,
    product_price = formatPrice(roundPrice(price * dolar)),
    cartIds = myCart.map(p => p.id),
    inCart = cartIds.includes(id);

  return (
    <li className="bg-slate-200 rounded-lg shadow-orange-800 shadow-sm overflow-hidden w-[320px] h-[400px] flex flex-col justify-between items-start">
      <img
        src={product_img}
        alt={`Imagen de ${name}`}
        width={500}
        height={400}
        className="w-full h-[50%] object-cover object-center aspect-[500/400]"
      />
      <div className="px-4 h-[80px] w-full flex flex-col justify-start items-start space-y-2">
        <p className="text-xl font-bold">{name}</p>
        <p className=" text-[16px]">{checkDescrip(description)}</p>
      </div>
      <div className="flex flex-col items-start justify-between w-full pb-4 px-4 gap-y-2 h-[92px]">
        <span className="text-lg font-semibold">
          {isLoading ? "calculando..." : `$${product_price}`}
        </span>
        {showBtn &&
          (inCart ? (
            <Link
              to="/cart"
              onClick={() => scrollTo({ top: 0, behavior: "instant" })}
              className="duration-100 text-black text-lg border-2 border-orange-200 hover:bg-orange-100 bg-orange-50 pt-1 cursor-default h-10 px-4 rounded-lg font-[500] w-full text-center"
            >
              En el carrito
            </Link>
          ) : (
            <button
              onClick={() => addProduct({ ...props, quantity: 1 })}
              className="bg-orange-500 hover:bg-orange-400 duration-100 text-white text-lg border-2 border-orange-400 h-10 px-4 rounded-lg font-[500] w-full text-center"
              style={{ textShadow: "1px 1px 1px black" }}
            >
              Añadir al carrito
            </button>
          ))}
      </div>
    </li>
  );
}

export default Product;

Product.propTypes = {
  id: propTypes.number,
  img: propTypes.string,
  price: propTypes.number,
  name: propTypes.string,
  description: propTypes.string,
};
