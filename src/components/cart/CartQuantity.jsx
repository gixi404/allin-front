import propTypes from "prop-types";

function CartQuantity({ quantity, handleQuantity }) {
  return (
    <label htmlFor="quantity" className="font-[500] text-sm">
      Cantidad:
      <input
        className="outline-0 rounded-md text-center ml-1 w-10 h-6"
        type="number"
        id="quantity"
        value={quantity}
        min={1}
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
};
