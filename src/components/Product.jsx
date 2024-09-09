import { useSessionStorage } from "@uidotdev/usehooks";
import propTypes from "prop-types";
import { Link } from "wouter";
import useDolar from "../hooks/useDolar";
import { formatPrice } from "../utils/helpers";
import DEFAULT_IMG from "/logo-img.png";

function Product(props) {
  const [myCart, setCart] = useSessionStorage("cart", []),
    { dolar, isLoading, status } = useDolar(),
    { id, img, price, name, description } = props,
    showBtn = status && dolar != 0 && !isLoading,
    product_img = img == 200 ? DEFAULT_IMG : img,
    product_price = formatPrice((price * dolar).toFixed(2)),
    cartIds = myCart.map(p => p.id),
    inCart = cartIds.includes(id);

  return (
    <li className="bg-slate-200 rounded-lg shadow-orange-800 shadow-sm overflow-hidden w-[320px] h-[380px] flex flex-col justify-between items-start">
      <img
        src={product_img}
        alt={`Imagen de ${name}`}
        width={500}
        height={400}
        className="w-full h-[50%] object-cover object-center aspect-[500/400]"
      />
      <div className="px-4 h-[80px] w-full flex flex-col justify-start items-start space-y-2">
        <p className="text-xl font-bold">{name}</p>
        <p className=" text-[16px]">{description == 300 ? "" : description}</p>
      </div>
      <div className="flex items-center justify-between w-full pb-4 px-4">
        <span className="text-lg font-semibold">
          {isLoading ? "calculando..." : `$${product_price}`}
        </span>
        {showBtn &&
          (inCart ? (
            <Link
              to="/cart"
              onClick={() => scrollTo({ top: 0, behavior: "instant" })}
              className=" duration-100 text-black text-lg border-2 border-orange-200 hover:bg-orange-100 bg-orange-50 pt-1 cursor-default h-10 px-4 rounded-lg font-[500]"
            >
              En el carrito
            </Link>
          ) : (
            <button
              onClick={() => setCart([...myCart, props])}
              className="bg-orange-500 hover:bg-orange-400 duration-100 text-white text-lg border-2 border-orange-400 h-10 px-4 rounded-lg font-[500]"
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
