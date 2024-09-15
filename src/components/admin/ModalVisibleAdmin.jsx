import propTypes from "prop-types";
import { toast } from "react-hot-toast";
import { updateProduct } from "../../database/crud.supabase.js";
import { INITIAL_PROD } from "../../utils/consts";

function ModalVisibleAdmin({
  setShowHiddenModal,
  setProductSelected,
  productSelected,
  setProducts,
  products,
}) {
  function resetData() {
    setProductSelected(INITIAL_PROD);
    setShowHiddenModal(false);
  }

  function toggleVisible() {
    const updatedProduct = { ...productSelected, visible: true },
      updatedProducts = products.map(p =>
        p.id == productSelected.id ? updatedProduct : p
      );
    resetData();
    updateProduct(updatedProduct);
    setProducts(updatedProducts);
    toast.success("Producto visible");
  }

  return (
    <div
      role="alert"
      className="fixed inset-0 pb-20 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg flex-col flex justify-center items-center w-full max-w-lg">
        <p className="text-xl font-semibold w-full text-pretty">
          ¿Estás seguro que quieres mostrar {productSelected.name}?
        </p>
        <div className="flex gap-2 mt-8 justify-end items-center w-full">
          <button
            type="button"
            className="bg-slate-300 duration-100 text-slate-900 text-lg px-4 py-1 rounded-lg hover:bg-gray-200 border-2"
            onClick={resetData}
          >
            Cancelar
          </button>
          <button
            onClick={toggleVisible}
            type="button"
            className="bg-blue-600 hover:bg-blue-500 duration-75 text-white px-8 py-1 text-lg rounded-lg border-2 border-blue-300"
          >
            Mostrar producto
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalVisibleAdmin;

ModalVisibleAdmin.propTypes = {
  setShowHiddenModal: propTypes.func,
  setProductSelected: propTypes.func,
  productSelected: propTypes.object,
  setProducts: propTypes.func,
  products: propTypes.array,
};
