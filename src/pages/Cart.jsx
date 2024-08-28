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
      const res = await fetch("http://localhost:3000/create-preference", {
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
            {len(myCart) > 0 && (
              <div className="w-full flex flex-col justify-center items-center gap-y-4">
                <BuyBtnMP buy={buy} />
                {/* <BuyBtnCash /> */}
              </div>
            )}
            <hr className="w-full border lg:border-2 border-slate-400 rounded-lg" />
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
        </div>
      )}
    </section>
  );
}

export default Cart;
