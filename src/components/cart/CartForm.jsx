import { useLocalStorage } from "@uidotdev/usehooks";
import propTypes from "prop-types";
import Loader from "../Loader";

function CartForm({ validation, loadingMP }) {
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
        Nombre
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
        Celular
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
      <button
        type="button"
        onClick={validation}
        className="mt-2 w-full px-4 py-2 border-2 border-slate-500 text-lg rounded-lg bg-slate-700 duration-100 hover:bg-slate-600 text-white"
      >
        Siguiente
      </button>
    </form>
  );
}

export default CartForm;

CartForm.propTypes = {
  validation: propTypes.func.isRequired,
  loadingMP: propTypes.bool.isRequired,
};
