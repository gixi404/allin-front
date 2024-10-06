import { ChevronDown, ChevronUp } from "lucide-react";
import propTypes from "prop-types";
import { twMerge } from "tailwind-merge";

function CartQuantity({ quantity, increment, decrement, showMP }) {
  return (
    <label
      htmlFor="quantity"
      className="font-[500] text-sm flex items-center justify-center flex-col">
      <span>Cantidad</span>
      <div className="flex items-center justify-center h-12 bg-slate-100 rounded-t-lg rounded-b-lg border-2 border-slate-300 py-1 w-16">
        <span
          className={twMerge(
            showMP
              ? "w-full text-center pl-4"
              : "w-6 pl-1 border-r-2 border-slate-300",
            "pt-1.5 text-lg h-full"
          )}>
          {quantity}
        </span>
        <div className="h-full px-1.5 w-6">
          <ChevronUp
            size={20}
            className={twMerge(
              showMP && "hidden",
              "hover:bg-slate-200 duration-75 cursor-pointer"
            )}
            onClick={increment}
          />
          <ChevronDown
            size={20}
            className={twMerge(
              showMP && "hidden",
              "hover:bg-slate-200 duration-75 cursor-pointer"
            )}
            onClick={decrement}
          />
        </div>
      </div>
    </label>
  );
}

export default CartQuantity;

CartQuantity.propTypes = {
  quantity: propTypes.number.isRequired,
  increment: propTypes.func.isRequired,
  decrement: propTypes.func.isRequired,
  showMP: propTypes.bool,
};
