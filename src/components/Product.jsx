import propTypes from "prop-types";
import {
  checkDescrip,
  formatPrice,
  msgWhatsApp,
  roundPrice,
} from "../utils/helpers";
import DEFAULT_IMG from "/logo-img.png";
import useDolar from "../hooks/useDolar";
import { useSearch } from "wouter";

function Product(props) {
  const { dolar } = useDolar(),
    { img, name, description, price } = props,
    product_img = img == 200 || !img ? DEFAULT_IMG : img,
    product_price = formatPrice(roundPrice(price * dolar)),
    showPrices = useSearch() == "prices=1";

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
        <p className="text-xl font-bold uppercase">{name}</p>
        <p className="text-[16px]">{checkDescrip(description)}</p>
      </div>
      {showPrices ? (
        <p className="text-xl font-bold pl-4 pb-4 w-full text-start">
          ${product_price}
        </p>
      ) : (
        <div className="flex flex-col items-start justify-between w-full pb-4 px-4 gap-y-2 h-auto">
          <p className="text-transparent">-</p>
          <a
            target="_blank"
            href={msgWhatsApp(`Hola, quiero consultar por ${name}`)}
            className="bg-orange-500 hover:bg-orange-400 duration-100 text-white text-lg border-2 border-orange-400 h-10 px-4 rounded-lg font-[500] w-full text-center pt-1"
          >
            Consultar
          </a>
        </div>
      )}
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
