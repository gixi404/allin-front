import { initMercadoPago } from "@mercadopago/sdk-react";
import { useSessionStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import BuyBtn from "../components/buttons/BuyBtn";
import CartProduct from "../components/CartProduct";
import EmptyCart from "../components/EmptyCart";
import Loader from "../components/Loader";
import useDolar from "../hooks/useDolar";
import { CHECKOUT_URL } from "../utils/consts";
import { formatPrice, len } from "../utils/helpers";

const KEY = import.meta.env.VITE_MP_PUBLIC;

function Cart() {
  const [cart] = useSessionStorage("cart", []),
    { dolar, isLoading } = useDolar(),
    calculatePrice = cart.reduce((acc, i) => acc + i.price, 0) * dolar,
    total = formatPrice(calculatePrice.toFixed(2)),
    [preferenceId, setPreferenceId] = useState(null),
    hasProducts = len(cart) > 0,
    myCart = () =>
      cart.map(p => ({
        id: p.id,
        title: p.name,
        unit_price: p.price * dolar,
      }));

  useEffect(() => {
    if (!hasProducts || preferenceId != null) return;
    initMercadoPago(KEY, { locale: "es-AR" });
    getPreference();
  }, [dolar]);

  async function getPreference() {
    try {
      const res = await fetch(CHECKOUT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: myCart() }),
      });
      const { preferenceId } = await res.json();
      setPreferenceId(preferenceId);
    } catch (err) {
      console.error(`catch 'getPreference' ${err.message}`);
    }
  }

  return (
    <section className="w-[100vw] lg:w-full h-full lg:min-w-[1100px] min-h-[400px] flex justify-center items-start">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-10 px-4 lg:px-8">
          <div className="w-full lg:w-3/6 flex flex-col justify-start items-center gap-y-2 lg:gap-y-4">
            <h3 className="w-full text-2xl lg:text-3xl font-semibold">
              Aviso sobre tu compra
            </h3>
            <p className="w-full text-pretty text-sm lg:text-lg">
              El retiro de la compra se realiza de manera presencial en nuestro
              local. La compra una vez realizada, estará disponible su retiro
              hasta dentro de los próximos 3 días hábiles. En caso de no contar
              con stock de un producto en particular se reembolsará el valor del
              producto en su totalidad. <br /> <br /> Para cualquier consulta o
              reclamo comuniquese vía WhatsApp a este número: +54 261 123-4567.
            </p>
          </div>
          <div className="w-full lg:w-3/6 border-2 p-6 rounded-lg border-slate-400 flex flex-col items-start justify-center gap-y-8">
            <div className="flex items-center justify-between w-full">
              <p className="text-xl lg:text-2xl font-semibold">Total</p>
              <p className="text-xl lg:text-2xl font-bold">${total}</p>
            </div>
            {hasProducts && <BuyBtn preferenceId={preferenceId} />}
            <hr className="w-full border border-slate-400 rounded-lg" />
            {hasProducts ? (
              <ul className="space-y-4 w-full">
                {cart.map(p => (
                  <CartProduct key={p.id} {...p} />
                ))}
              </ul>
            ) : (
              <EmptyCart />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
