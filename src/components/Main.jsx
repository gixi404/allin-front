import { CpuIcon, ShoppingBasket as ProductIcon } from "lucide-react";
import { Link } from "wouter";
import { msgWhatsApp } from "../utils/helpers";
import mainImg from "/main-img.png";

function Main() {
  return (
    <main className="w-full flex flex-col-reverse  lg:flex-row text-black justify-between items-center lg:items-start rounded-lg gap-6">
      <div className="w-full lg:w-[45%] flex justify-center items-center mt-6 lg:mt-0">
        <img
          width={330}
          height={330}
          className="object-cover object-center select-none w-[250px] h-[250px] lg:w-[330px] lg:h-[330px]"
          src={mainImg}
        />
      </div>

      <div className="w-full px-6 lg:px-0 lg:w-[55%] h-full lg:h-[330px] gap-y-10 flex flex-col justify-between items-start">
        <h2 className="w-full text-4xl lg:text-5xl tracking-tight text-balance font-[700] text-center lg:text-start">
          Insumos informáticos y servicio técnico
        </h2>
        <p className="text-[19px] font-[500] text-pretty w-full text-center lg:text-start">
          Ofrecemos una amplia variedad de insumos informáticos y especialistas
          técnicos en reparación de computadoras, notebooks, impresoras y más.
        </p>
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-4">
          <Link
            to="/sexo"
            className="bg-slate-800 text-lg lowercase font-[500] text-white px-4 hover:bg-slate-700 duration-150 hover:scale-95 py-3 rounded-xl border-2 border-rose-300/40 flex justify-center items-center gap-x-3 w-full max-w-[300px] lg:w-max"
          >
            <ProductIcon size={28} strokeWidth={1.5} />
            <span>Ver productos</span>
          </Link>
          <a
            href={msgWhatsApp(
              "allin",
              "Hola, necesito servicio técnico para..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-orange-500/50 px-4 py-2.5 flex justify-center items-center gap-x-3 font-[500] hover:bg-orange-400/90 bg-orange-400 duration-150 hover:scale-95 text-black text-lg lowercase w-full max-w-[300px] lg:w-max"
          >
            <CpuIcon className="size-8" strokeWidth={1.5} />
            Solicitar servicio técnico
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main;
