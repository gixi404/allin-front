import propTypes from "prop-types";

function CartQuantity({ quantity, handleQuantity, showMP }) {
  return (
    <label
      htmlFor="quantity"
      className="font-[500] text-sm flex items-center justify-center flex-col"
    >
      <span>Cantidad:</span>
      <input
        className="outline-0 rounded-md text-center ml-1 w-10 h-6"
        type="number"
        id="quantity"
        value={quantity}
        min={1}
        disabled={showMP}
        max={3}
        onChange={handleQuantity}
      />
    </label>
  );
}

export default CartQuantity;

CartQuantity.propTypes = {
  quantity: propTypes.number.isRequired,
  handleQuantity: propTypes.func.isRequired,
  showMP: propTypes.bool,
};
