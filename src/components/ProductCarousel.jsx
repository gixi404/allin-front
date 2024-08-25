import propTypes from "prop-types";

function ProductCarousel({ img, name, description, price }) {
  return (
    <li className="bg-slate-200 rounded-lg shadow-orange-800 shadow-sm overflow-hidden w-[320px] h-[380px] flex flex-col justify-between items-start">
      <img
        src={img}
        alt="Imagen de producto"
        width={500}
        height={400}
        className="w-full h-[50%] object-cover object-center aspect-[500/400]"
      />
      <div className="px-4 h-[80px] w-full flex flex-col justify-start items-start space-y-2">
        <p className="text-xl font-bold">{name}</p>
        <p className=" text-[16px]">{description}</p>
      </div>
      <div className="flex items-center justify-between w-full pb-4 px-4">
        <span className="text-lg font-semibold">${price}</span>
        <button
          onClick={() => console.log("sexo")}
          className="bg-orange-500 hover:bg-orange-400 duration-100 text-white text-lg border-2 border-orange-400 h-10 px-4 rounded-lg font-[500]"
          style={{ textShadow: "1px 1px 1px black" }}
        >
          Añadir al carrito
        </button>
      </div>
    </li>
  );
}

export default ProductCarousel;

ProductCarousel.propTypes = {
  img: propTypes.string,
  name: propTypes.string,
  description: propTypes.string,
  price: propTypes.number,
};
