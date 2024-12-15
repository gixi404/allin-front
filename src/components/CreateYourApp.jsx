import { AppWindowMac as Icon } from "lucide-react";
import { msgWhatsApp } from "../utils/helpers";
import img from "/sitioweb-img.png";

function CreateYourApp() {
  return (
    <section className="w-full px-6 lg:px-0 flex flex-col lg:flex-row text-black justify-between items-start rounded-lg gap-6 mt-20">
      <div className="w-full lg:w-3/6 h-[310px] flex flex-col justify-between items-center">
        <h2 className="w-full text-4xl lg:text-5xl tracking-tight text-balance font-[700] text-center lg:text-end -mb-6">
          Creamos tu sitio web
        </h2>
        <p className="text-[19px] font-[500] text-pretty w-full text-center lg:text-end">
          Creamos sitios web a medida, diseñados específicamente para responder
          a tus necesidades particulares.
        </p>
        <div className="w-full flex justify-center lg:justify-end items-center gap-x-4">
          <a
            href={msgWhatsApp(
              "Hola, quiero consultar para crear un sitio web..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-lg lowercase font-[500] text-white px-4 hover:bg-slate-700 duration-150 hover:scale-95 py-3 rounded-xl border-2 border-rose-300/40 flex justify-center items-center gap-x-3 w-full max-w-[300px] lg:w-max"
          >
            <Icon size={28} strokeWidth={1.5} />
            <span className="capitalize">Consultar servicio</span>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-3/6 flex justify-center items-center">
        <img
          alt="Imagen de sitio web"
          width={320}
          height={320}
          className="object-cover object-center select-none"
          src={img}
        />
      </div>
    </section>
  );
}

export default CreateYourApp;
