import { WHATSAPP_NUM } from "../utils/consts";
import InstagramBtn from "./buttons/InstagramBtn";

function Footer() {
  return (
    <footer className="bg-gradient-to-l from-slate-200 via-slate-100 to-slate-200 text-black w-full h-auto flex flex-col lg:flex-row justify-between items-start p-10 rounded-lg border-2 border-slate-400/70 mt-10 gap-y-6">
      <div className="flex justify-center items-start flex-col gap-y-2">
        <span className="text-xl">Encontranos</span>
        <p>San Martín 537, Luján de Cuyo, Mendoza.</p>
        <p>{WHATSAPP_NUM}</p>
      </div>
      <div className="flex justify-center items-start flex-col gap-y-2 text-sm">
        <span className="text-xl">Horarios</span>
        <p>
          Lunes a viernes
          <br />
          9:30 a 13:30
          <br />
          15:30 a 19:30
        </p>
        <p>
          Sábados
          <br />
          10:00 a 14:00
        </p>
        <p>
          Domingos y feriados
          <br />
          Cerrado
        </p>
      </div>
      <div className="flex justify-center items-center flex-col gap-y-2">
        <span className="text-xl">¡Seguinos!</span>
        <InstagramBtn />
      </div>
    </footer>
  );
}

export default Footer;
