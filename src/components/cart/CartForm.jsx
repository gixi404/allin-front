import { useLocalStorage } from "@uidotdev/usehooks";
import propTypes from "prop-types";
import Loader from "../Loader";
import { Link } from "wouter";

function CartForm({ validation, loadingMP, isChecked, setIsChecked }) {
  const [name, setName] = useLocalStorage("name", "");
  const [phone, setPhone] = useLocalStorage("phone", "");

  if (loadingMP)
    return (
      <div className="w-full flex flex-col justify-center items-center h-[237.6px]">
        <Loader />
      </div>
    );

  return (
    <form className="w-full flex flex-col justify-center items-center gap-y-4 sm:px-10">
      <label
        htmlFor="name"
        className="text-lg w-full font-[500] text-slate-900"
      >
        Nombre y apellido
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          required
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
          id="num"
          type="number"
          placeholder="261321567"
          className="w-full mt-1 rounded tracking-wide px-4 py-1.5 bg-slate-100 border-2 border-slate-500  placeholder:text-slate-500 outline-0"
        />
      </label>
      <div className="w-full mt-4 flex flex-col justify-center items-center gap-y-1">
        <label
          htmlFor="check"
          className="flex justify-start items-center w-full gap-x-2 text-[15px]"
        >
          <input
            type="checkbox"
            id="check"
            checked={isChecked}
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
          className="mt-2 w-full px-4 py-2 border-2 border-slate-500 text-lg rounded-lg bg-slate-700 duration-100 hover:bg-slate-600 text-white"
        >
          Siguiente
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
};
