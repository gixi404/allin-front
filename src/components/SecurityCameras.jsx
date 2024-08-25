import { Cctv as Icon } from "lucide-react";
import { msgWhatsApp } from "../utils/helpers";
import img from "/camaraseguridad-img.png";

function SecurityCameras() {
  return (
    <section className="w-full px-6 lg:px-0 flex flex-col-reverse lg:flex-row text-black justify-between items-start rounded-lg gap-2 lg:gap-6 mt-20">
      <div className="w-full lg:w-3/6 flex justify-center items-center">
        <img
          width={310}
          height={310}
          className="object-cover object-center select-none rounded-xl"
          src={img}
        />
      </div>
      <div className="w-full lg:w-3/6 h-[330px] flex flex-col justify-between items-center">
        <h2 className="w-full text-5xl tracking-tight text-balance font-[700] text-center lg:text-start">
          Implementación de cámaras de seguridad
        </h2>
        <p className="text-[19px] font-[500] text-pretty w-full text-center lg:text-start">
          Instalación de dispositivos de monitoreo con el fin de registrar y
          supervisar determinadas zonas evitando incidentes.
        </p>
        <div className="w-full flex justify-center lg:justify-start items-center gap-x-4">
          <a
            href={msgWhatsApp(
              "allin",
              "Hola, quiero consultar sobre el servicio de cámaras de seguridad…"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-lg lowercase font-[500] text-white px-4 hover:bg-slate-700 duration-150 hover:scale-95 py-3 rounded-xl border-2 border-rose-300/40 flex justify-center items-center gap-x-3"
          >
            <Icon size={28} strokeWidth={1.7} />
            <span>Consultar servicio</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SecurityCameras;
