import { ShoppingBasket as Icon } from "lucide-react";
import propTypes from "prop-types";
import { Link } from "wouter";

function ProductsBtn({ text }) {
  return (
    <Link
      to="/products"
      className="bg-slate-800 text-lg lowercase font-[500] text-white px-4 hover:bg-slate-700 duration-150 hover:scale-95 py-3 rounded-xl border-2 border-rose-300/40 flex justify-center items-center gap-x-3 w-full max-w-[320px] lg:w-max"
    >
      <Icon size={28} strokeWidth={1.5} />
      <span className="capitalize">{text}</span>
    </Link>
  );
}

export default ProductsBtn;

ProductsBtn.propTypes = {
  text: propTypes.string.isRequired,
};
