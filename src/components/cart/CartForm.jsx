import {useLocalStorage} from "@uidotdev/usehooks";
import propTypes from "prop-types";
import {twMerge} from "tailwind-merge";
import {Link} from "wouter";

function CartForm(props) {
  const [name, setName] = useLocalStorage("name", ""),
    [phone, setPhone] = useLocalStorage("phone", ""),
    {validation, isChecked, setIsChecked, msg, setMsg, loadingMP, showMP} =
      props;

  return (
    <form className="w-full flex flex-col justify-center items-center gap-y-4 sm:px-10">
      <label
        htmlFor="name"
        className="text-lg w-full font-[500] text-slate-900">
        Nombre y apellido
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          required
          disabled={showMP}
          autoFocus
          maxLength={25}
          id="name"
          type="text"
          placeholder="Daniel Lemus"
          className="w-full mt-1 rounded px-4 py-1.5 bg-slate-100 border-2 border-slate-500  placeholder:text-slate-500 outline-0"
        />
      </label>
      <label htmlFor="num" className="text-lg w-full font-[500] text-slate-900">
        Número de celular
        <input
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          disabled={showMP}
          id="num"
          type="number"
          placeholder="2613215671"
          className="w-full mt-1 rounded tracking-wide px-4 py-1.5 bg-slate-100 border-2 border-slate-500  placeholder:text-slate-500 outline-0"
        />
      </label>
      <label htmlFor="msg" className="text-lg w-full font-[500] text-slate-900">
        Mensaje <span className="text-sm text-slate-800">(opcional)</span>
        <textarea
          value={msg}
          onChange={e => setMsg(e.target.value)}
          required
          disabled={showMP}
          id="msg"
          placeholder="Escribe tu mensaje..."
          className="w-full mt-1 rounded resize-none tracking-wide px-4 py-1.5 bg-slate-100 border-2 border-slate-500 placeholder:text-slate-500 placeholder:text-[16px] outline-0"
          maxLength={300}
        />
      </label>
      <div className="w-full mt-4 flex flex-col justify-center items-center gap-y-1">
        <label
          htmlFor="check"
          className="flex justify-start items-center w-full gap-x-2 text-[13px] sm:text-[15px]">
          <input
            type="checkbox"
            id="check"
            checked={isChecked}
            disabled={showMP}
            onChange={e => setIsChecked(e.target.checked)}
            className="scale-125 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          />
          <p className="text-pretty">
            Acepto los{" "}
            <Link to="/termsandconditions" className="underline font-[500]">
              términos y condiciones
            </Link>{" "}
            de la compra.
          </p>
        </label>
        <button
          type="button"
          onClick={validation}
          className={twMerge(
            loadingMP
              ? "bg-green-400 hover:bg-green-400 text-black cursor-default"
              : "bg-slate-700 hover:bg-slate-600 text-white",
            "mt-2 w-full px-4 py-2 border-2 border-slate-500 text-lg rounded-lg duration-100"
          )}>
          {loadingMP ? "Cargando..." : "Siguiente"}
        </button>
      </div>
    </form>
  );
}

export default CartForm;

CartForm.propTypes = {
  validation: propTypes.func.isRequired,
  loadingMP: propTypes.bool.isRequired,
  isChecked: propTypes.bool.isRequired,
  setIsChecked: propTypes.func.isRequired,
  msg: propTypes.string,
  setMsg: propTypes.func,
  showMP: propTypes.bool,
};
