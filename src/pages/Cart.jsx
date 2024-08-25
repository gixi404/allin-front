import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import BuyBtnMP from "../components/buttons/BuyBtnMP";
import CartProduct from "../components/CartProduct";
import EmptyCart from "../components/EmptyCart";
import Loader from "../components/Loader";
import useDolar from "../hooks/useDolar";
import { formatPrice, len } from "../utils/helpers";
import { useStore } from "../utils/store";

const KEY = import.meta.env.VITE_MP_PUBLIC;

function Cart() {
  initMercadoPago(KEY, { locale: "es-AR" });
  const { myCart } = useStore(),
    [preferenceId, setPreferenceId] = useState(null),
    { dolar, isLoading } = useDolar(),
    calculatePrice = myCart.reduce((acc, i) => acc + i.price, 0) * dolar,
    total = formatPrice(calculatePrice.toFixed(2));

  async function createPreference() {
    try {
      const res = await fetch("http:/localhost/create-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Consolador", price: 320 }),
      });
      const { id } = res.data;
      return id;
    } catch (err) {
      console.error(`catch 'createPreference' ${err.message}`);
    }
  }

  async function buy() {
    if (len(myCart) == 0) return;
    const id = await createPreference();
    if (id) setPreferenceId(id);
    else alert("No se pudo crear la preferencia");
  }

  return (
    <section className="w-[100vw] lg:w-full h-full lg:min-w-[1100px] min-h-[400px] flex justify-center items-start">
      {preferenceId && (
        <Wallet
          initialization={{ preferenceId }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full max-w-[600px] border-2 p-6 rounded-lg border-slate-400 flex flex-col items-start justify-center gap-y-8">
          <h3 className="text-4xl font-bold w-full text-start">
            Carrito de Compras
          </h3>
          <div className="flex items-center justify-between w-full">
            <p className="text-2xl font-semibold">Total</p>
            <p className="text-2xl font-bold">${total}</p>
          </div>
          {len(myCart) > 0 && (
            <div className="w-full flex flex-col justify-center items-center gap-y-4">
              <BuyBtnMP buy={buy} />
              {/* <BuyBtnCash /> */}
            </div>
          )}
          {len(myCart) > 0 ? (
            <ul className="space-y-4 w-full">
              {myCart.map(p => (
                <CartProduct key={p.id} {...p} />
              ))}
            </ul>
          ) : (
            <EmptyCart />
          )}
        </div>
      )}
    </section>
  );
}

export default Cart;
