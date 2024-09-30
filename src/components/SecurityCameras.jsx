import { Cctv as Icon } from "lucide-react";
import { msgWhatsApp } from "../utils/helpers";
import Section from "./Section";
import img from "/camaraseguridad-img.png";

function SecurityCameras() {
  return (
    <Section sectionClass="flex-col-reverse lg:flex-row mt-20 px-6 lg:px-0">
      <div className="w-full lg:w-3/6 flex justify-center items-center mt-6">
        <img
          alt="Imagen de seguridad"
          width={300}
          height={300}
          className="object-cover object-center select-none rounded-xl"
          src={img}
        />
      </div>
      <div className="w-full lg:w-3/6 h-[330px] flex flex-col justify-between items-center">
        <h2 className="w-full text-4xl lg:text-5xl tracking-tight text-balance font-[700] text-center lg:text-start">
          Implementación de cámaras de seguridad
        </h2>
        <p className="text-[19px] font-[500] text-pretty w-full text-center lg:text-start">
          Instalación de dispositivos de monitoreo con el fin de registrar y
          supervisar determinadas zonas evitando incidentes.
        </p>
        <div className="w-full flex justify-center lg:justify-start items-center gap-x-4">
          <a
            href={msgWhatsApp(
              "Hola, quiero consultar sobre el servicio de cámaras de seguridad…"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-lg lowercase font-[500] text-white px-4 hover:bg-slate-700 duration-150 hover:scale-95 py-3 rounded-xl border-2 border-rose-300/40 flex justify-center items-center gap-x-3"
          >
            <Icon size={28} strokeWidth={1.7} />
            <span className="capitalize">Consultar servicio</span>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default SecurityCameras;
