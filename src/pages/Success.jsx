import { useSessionStorage } from "@uidotdev/usehooks";
import { ShoppingBag as Icon } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

function Success() {
  const [, setCart] = useSessionStorage("cart", []);

  useEffect(() => {
    if (location.pathname == "/success") setCart([]);
  }, []);

  return (
    <div className="w-[100vw] lg:w-full lg:min-w-[1100px] lg:max-w-[400px] justify-center items-center flex h-full">
      <div className="w-full max-w-[400px] bg-white shadow-lg rounded-lg overflow-hidden py-6">
        <div className="text-center p-6">
          <Icon className="w-14 h-14 mx-auto text-gray-700 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            ¡Gracias por tu compra!
          </h2>
          <p className="text-gray-700 mb-6 text-pretty w-full text-center">
            Tu pedido fue recibido y está siendo procesado.
            <br /> Por cualquier consulta escribe a nuestro WhatsApp: +45 261
            123 4567
          </p>
          <Link
            to="/"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-2 px-5 rounded-md duration-100"
          >
            Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
