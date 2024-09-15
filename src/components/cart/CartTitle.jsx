import propTypes from "prop-types";

function CartTitle({ showMP, total }) {
  return (
    <div className="flex items-center justify-between w-full">
      {showMP ? (
        <>
          <p className="text-xl lg:text-2xl font-semibold">Total</p>
          <p className="text-xl lg:text-2xl font-bold">${total}</p>
        </>
      ) : (
        <p className="text-3xl w-full font-[500] text-center">
          Formulario de compra
        </p>
      )}
    </div>
  );
}

export default CartTitle;

CartTitle.propTypes = {
  showMP: propTypes.bool.isRequired,
  total: propTypes.string.isRequired,
};
