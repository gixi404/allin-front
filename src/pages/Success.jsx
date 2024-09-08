import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";

function Success() {
  const [, setCart] = useLocalStorage("cart", []);

  useEffect(() => {
    if (location.pathname == "/success") setCart([]);
  }, []);

  return (
    <div className="w-full max-w-[400px] text-center min-w-[1100px] min-h-[300px] justify-center items-center">
      <p className="text-3xl">¡Gracias por tu compra!</p>
      <p className="text-2xl">
        Por favor, envía el comprobante de pago a nuestro WhatsApp. 261 123 4567
      </p>
    </div>
  );
}

export default Success;
