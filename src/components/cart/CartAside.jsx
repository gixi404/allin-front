import { CircleAlert as Icon } from "lucide-react";
import { Link } from "wouter";

function CartAside() {
  return (
    <aside className="w-full lg:w-2/6 flex flex-col justify-start items-start gap-y-2 lg:gap-y-4 [&>p]:text-[16px] border-2 px-4 py-6 rounded-lg border-slate-400 bg-slate-200">
      <p className="w-full !text-xl lg:!text-2xl font-semibold flex gap-x-3 justify-start items-start">
        <Icon color="#1b1b1b" size={28} />
        <span>Aviso sobre tu compra</span>
      </p>
      <p>
        El retiro de la compra se realiza de manera <b>presencial</b> en nuestro{" "}
        <Link to="/location">
          <b>local</b>
        </Link>
        .
      </p>
      <p>
        Una vez realizada la compra, será notificado para su retiro hasta dentro
        de los próximos 3 días hábiles.
      </p>
      <p>
        Le recomendamos encarecidamente leer los{" "}
        <Link to="/termsandconditions" className="underline font-[500]">
          términos y condiciones
        </Link>{" "}
        antes de realizar la compra.
      </p>
    </aside>
  );
}

export default CartAside;
