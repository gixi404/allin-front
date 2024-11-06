import { LinkIcon } from "lucide-react";
import { CircleAlert as Icon } from "lucide-react";
import { Link } from "wouter";
import { msgWhatsApp } from "../../utils/helpers";

function CartAside() {
  return (
    <aside className="w-full lg:w-2/6 gap-y-2 lg:gap-y-4 flex flex-col justify-start items-start">
      <div className="w-full flex flex-col justify-start items-start  [&>p]:text-[16px] border-2 px-4 py-6 rounded-lg border-slate-400 bg-slate-200">
        <p className="w-full !text-xl lg:!text-2xl font-semibold flex gap-x-3 justify-start items-start">
          <Icon color="#1b1b1b" size={28} />
          <span>Aviso sobre tu compra</span>
        </p>
        <p>
          El retiro de la compra se realiza de manera <b>presencial</b> en
          nuestro{" "}
          <Link to="/location">
            <b>local</b>
          </Link>
          .
        </p>
        <p>
          Una vez realizada la compra, será notificado para su retiro hasta
          dentro de los próximos 3 días hábiles.
        </p>
        <p>
          Le recomendamos encarecidamente leer los{" "}
          <Link to="/termsandconditions" className="underline font-[500]">
            términos y condiciones
          </Link>{" "}
          antes de realizar la compra.
        </p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-y-4 border-[2.5px] px-4 py-6 rounded-lg border-orange-300 bg-orange-200">
        <p className="w-full text-center text-[16px] sm:text-lg text-pretty sm:px-2">
          En caso de que el formulario de pago no funcione, puedes solicitar un
          link de pago.
        </p>

        <a
          href={msgWhatsApp("Hola, necesito un link de pago...")}
          target="_blank"
          className="text-[16px] sm:text-[19px] flex items-center gap-x-2 text-white bg-orange-600 font-semibold px-4 sm:px-8 py-2 rounded-lg border-2 border-orange-400">
          <LinkIcon size={22} />
          <span>Solicitar Link de Pago</span>
        </a>
      </div>
    </aside>
  );
}

export default CartAside;
