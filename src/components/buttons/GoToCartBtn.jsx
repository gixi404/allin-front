import { useLocalStorage } from "@uidotdev/usehooks";
import { Link, useLocation } from "wouter";
import { len } from "../../utils/helpers";
import CartBtn from "./CartBtn";

function GoToCartBtn() {
  const [cart] = useLocalStorage("cart", []);
  const pathname = useLocation()[0];

  if (len(cart) == 0 || pathname == "/cart") return <></>;

  return (
    <Link
      to="/cart"
      onClick={() => scrollTo({ top: 0, behavior: "instant" })}
      className="fixed top-4 left-4 flex justify-center items-center px-3 lg:px-4 py-1.5 lg:py-2 text-lg lg:text-xl rounded-lg bg-orange-100 gap-x-3 z-40 hover:bg-orange-200 duration-100 shadow-md shadow-orange-900/60"
    >
      <CartBtn isHeader={false} />
      <p className="font-[500]">carrito</p>
    </Link>
  );
}

export default GoToCartBtn;
