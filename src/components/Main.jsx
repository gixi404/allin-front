import { CpuIcon } from "lucide-react";
import { msgWhatsApp } from "../utils/helpers";
import ProductsBtn from "./buttons/ProductsBtn";
import mainImg from "/main-img.webp";

function Main() {
  return (
    <main className="w-full flex flex-col-reverse  lg:flex-row text-black justify-between items-center lg:items-start rounded-lg gap-6">
      <div className="w-full lg:w-[45%] flex justify-center items-center mt-6 lg:mt-0">
        <img
          alt="Imagen principal"
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
          Ofrecemos una variedad de insumos informáticos y contamos con técnicos
          en reparación de computadoras, notebooks, impresoras y más.
        </p>
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-4">
          <ProductsBtn text="productos" />
          <a
            href={msgWhatsApp("Hola, necesito servicio técnico para...")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-orange-500/50 px-4 py-2.5 flex justify-center items-center gap-x-3 font-[500] hover:bg-orange-400/90 bg-orange-400 duration-150 hover:scale-95 text-black text-lg capitalize w-full max-w-[320px] lg:w-max"
          >
            <CpuIcon className="size-8" strokeWidth={1.5} />
            servicio técnico
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main;
