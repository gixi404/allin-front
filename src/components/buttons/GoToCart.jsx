import { Link } from "wouter";
import { len } from "../../utils/helpers";
import { useStore } from "../../utils/store";
import CartBtn from "./CartBtn";
import { useLocation } from "wouter";

function GoToCart() {
  const { myCart } = useStore();
  const pathname = useLocation()[0];

  if (len(myCart) == 0 || pathname == "/cart") return <></>;

  return (
    <Link
      to="/cart"
      onClick={() => scrollTo({ top: 0, behavior: "instant" })}
      className="fixed top-4 left-4 flex justify-center items-center px-3 lg:px-4 py-1.5 lg:py-2 text-lg lg:text-xl rounded-lg bg-orange-100 gap-x-3 z-40 hover:bg-orange-200 duration-100 shadow-md shadow-orange-900"
    >
      <CartBtn isHeader={false} />
      <p className="font-[500]">ir al carrito</p>
    </Link>
  );
}

export default GoToCart;
