import { PackageSearchIcon, ShoppingBagIcon } from "lucide-react";
import { useEffect } from "react";
import Section from "../components/Section";
import { msgWhatsApp } from "../utils/helpers";
import { useStore } from "../utils/store";

function Success() {
  const { setMyCart } = useStore();

  useEffect(() => setMyCart([]), []);

  return (
    <Section>
      <div className="w-full max-w-[400px] bg-white shadow-lg rounded-lg overflow-hidden py-6">
        <div className="text-center p-6 flex flex-col justify-center items-center gap-y-4">
          <ShoppingBagIcon className="w-14 h-14 mx-auto text-gray-700" />
          <h2 className="text-2xl font-bold text-gray-800">
            ¡Gracias por tu compra!
          </h2>
          <p className="text-gray-800 text-pretty w-full text-center">
            Tu pedido se está procesado.
            <br /> Para coordinar la entrega escribe a nuestro WhatsApp: +54 261
            498-8748
          </p>
          <a
            href={msgWhatsApp(
              "allin",
              "Hola, realicé un pedido a nombre de..."
            )}
            rel="noopener noreferrer"
            target="_blank"
            className="mt-4 bg-slate-800 text-lg lowercase font-[500] text-white px-4 hover:bg-slate-700 duration-150 hover:scale-95 py-3 rounded-xl border-2 border-rose-300/40 flex justify-center items-center gap-x-3 w-full max-w-[320px] lg:w-max"
          >
            <PackageSearchIcon size={28} strokeWidth={1.5} />
            <span className="capitalize">coordinar entrega</span>
          </a>
          {/* <Link
            to="/"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-2 px-5 rounded-md duration-100"
          >
            Inicio
          </Link> */}
        </div>
      </div>
    </Section>
  );
}

export default Success;
