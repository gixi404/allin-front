import { initMercadoPago } from "@mercadopago/sdk-react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BuyBtn from "../components/buttons/BuyBtn";
import CartAside from "../components/cart/CartAside";
import CartForm from "../components/cart/CartForm";
import CartList from "../components/cart/CartList";
import CartTitle from "../components/cart/CartTitle";
import EmptyCart from "../components/cart/EmptyCart";
import Loader from "../components/Loader";
import Section from "../components/Section";
import useDolar from "../hooks/useDolar";
import { CHECKOUT_URL } from "../utils/consts";
import { formatPrice, len, roundPrice } from "../utils/helpers";
import { useStore } from "../utils/store";

const MP_KEY = import.meta.env.VITE_MP_PUBLIC;

function Cart() {
  const { myCart } = useStore(),
    { dolar, isLoading } = useDolar(),
    hasProducts = myCart && len(myCart) > 0,
    [showMP, setShowMP] = useState(false),
    [name] = useLocalStorage("name", ""),
    [phone] = useLocalStorage("phone", ""),
    [isChecked, setIsChecked] = useState(false),
    [preferenceId, setPreferenceId] = useState(null),
    [loadingMP, setLoadingMP] = useState(false),
    [msg, setMsg] = useState(""),
    cartWithPrices = myCart.map(p => ({
      ...p,
      roundedPrice: roundPrice(p.price * dolar),
    })),
    totalAmount = cartWithPrices.reduce((acc, p) => acc + p.roundedPrice, 0),
    total = formatPrice(totalAmount),
    cartToMP = cartWithPrices.map(p => ({
      id: p.id,
      title: p.name,
      unit_price: p.roundedPrice,
      quantity: 1,
      currency_id: "ARS",
    }));

  useEffect(() => initMercadoPago(MP_KEY, { locale: "es-AR" }), []);

  useEffect(() => {
    if (hasProducts) getPreference().then(id => id && setPreferenceId(id));
    else setPreferenceId(null);
  }, [myCart, dolar]);

  async function getPreference() {
    try {
      const res = await fetch(CHECKOUT_URL, {
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: cartToMP, name, phone, msg }),
      });
      const { preferenceId } = await res.json();
      return preferenceId;
    } catch (err) {
      console.error(`catch 'getPreference' ${err.message}`);
    }
  }

  async function handleBuy() {
    if (!validateFields()) return;
    setLoadingMP(true);

    try {
      const id = await getPreference();
      if (id) {
        setPreferenceId(id);
        setShowMP(true);
      }
    } finally {
      setLoadingMP(false);
    }
  }

  function validateFields() {
    if (!name) {
      toast.error("Ingresa un nombre");
      return false;
    }

    if (len(name) < 3) {
      toast.error("Ingresa un nombre más largo");
      return false;
    }

    if (len(name) > 25) {
      toast.error("Ingresa un nombre más corto");
      return false;
    }

    if (!phone) {
      toast.error("Ingresa un celular");
      return false;
    }

    if (len(phone) < 6 || len(phone) > 15) {
      toast.error("Ingresa un celular válido");
      return false;
    }

    if (!isChecked) {
      toast.error("Debes aceptar los términos y condiciones");
      return false;
    }

    return true;
  }

  return (
    <Section sectionClass="sm:-mt-10 gap-10 flex-col sm:flex-row px-6 sm:px-0">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {hasProducts && <CartAside />}
          <div className="w-full lg:w-3/6 border-2 p-6 rounded-lg border-slate-400 bg-slate-200 flex flex-col items-start justify-center gap-y-8">
            {hasProducts ? (
              <>
                <CartTitle showMP={showMP} total={total} />
                {showMP ? (
                  <BuyBtn preferenceId={preferenceId} />
                ) : (
                  <CartForm
                    validation={handleBuy}
                    loadingMP={loadingMP}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    msg={msg}
                    setMsg={setMsg}
                  />
                )}
                <CartList cart={myCart} showMP={showMP} setShowMP={setShowMP} />
              </>
            ) : (
              <EmptyCart />
            )}
          </div>
        </>
      )}
    </Section>
  );
}

export default Cart;
