import propTypes from "prop-types";
import { toast } from "react-hot-toast";
import { deleteProduct } from "../../database/supabase";
import { INITIAL_PROD } from "../../utils/consts";

function ModalDeleteAdmin({
  setShowDeleteModal,
  setProductSelected,
  productSelected,
  products,
  setProducts,
}) {
  function resetData() {
    setProductSelected(INITIAL_PROD);
    setShowDeleteModal(false);
  }

  function removeProduct() {
    resetData();
    setProducts(products.filter(p => p.id != productSelected.id));
    deleteProduct(productSelected.id);
    toast.success("Producto eliminado");
  }

  return (
    <div
      role="alert"
      className="fixed inset-0 pb-20 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg flex-col flex justify-center items-center w-full max-w-lg">
        <p className="text-xl font-semibold w-full text-pretty">
          ¿Estás seguro que quieres eliminar {productSelected.name}?
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
            onClick={removeProduct}
            type="button"
            className="bg-red-600 hover:bg-red-500 duration-75 text-white px-8 py-1 text-lg rounded-lg border-2 border-red-300"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteAdmin;

ModalDeleteAdmin.propTypes = {
  setShowDeleteModal: propTypes.func,
  setProductSelected: propTypes.func,
  productSelected: propTypes.object,
  setProducts: propTypes.func,
  products: propTypes.array,
};
