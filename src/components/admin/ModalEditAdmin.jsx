import propTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";
import { updateProduct } from "../../database/crud.supabase.js";
import { INITIAL_PROD } from "../../utils/consts";
import { checkDescrip, len } from "../../utils/helpers";

function ModalEditAdmin({
  setShowEditModal,
  productSelected,
  setProductSelected,
  products,
  setProducts,
}) {
  const [errors, setErrors] = useState({});

  const regexp =
    /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/;

  function validateFields() {
    const newErrors = {};

    if (!productSelected.name || len(productSelected.name) == 0) {
      newErrors.name = "El nombre es obligatorio.";
    } else if (len(productSelected.name) > 129) {
      newErrors.name = "El nombre no debe exceder 129 caracteres.";
    }

    if (productSelected.description && len(productSelected.description) > 299) {
      newErrors.description = "La descripción no debe exceder 299 caracteres.";
    }

    if (!productSelected.price || productSelected.price <= 0) {
      newErrors.price = "El precio no puede ser 0.";
    }

    if (!productSelected.img || !regexp.test(productSelected.img)) {
      newErrors.img = "Link inválido.";
    }

    setErrors(newErrors);

    if (len(Object.keys(newErrors)) > 0) {
      const time = setTimeout(() => setErrors({}), 3000);
      return clearTimeout(time);
    }

    return len(Object.keys(newErrors)) == 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateFields()) return;

    const updatedProduct = products.map(p =>
      p.id == productSelected.id ? productSelected : p
    );
    setShowEditModal(false);
    updateProduct(productSelected);
    setProducts(updatedProduct);
    toast.success("Producto editado");
  }

  function handleName(e) {
    const name = String(e.target.value).trim();
    setProductSelected({ ...productSelected, name });
  }

  function handleDescription(e) {
    const description = String(e.target.value).trim();
    setProductSelected({ ...productSelected, description });
  }

  function handlePrice(e) {
    const price = Number(e.target.value);
    setProductSelected({ ...productSelected, price });
  }

  function handleImg(e) {
    const img = String(e.target.value).trim();
    setProductSelected({ ...productSelected, img });
  }

  return (
    <div
      role="alert"
      className="fixed inset-0 pb-20 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg flex-col flex justify-start items-center w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="name" className="font-medium text-lg">
              Nombre del producto
            </label>
            <input
              defaultValue={productSelected.name}
              autoFocus
              onChange={handleName}
              id="name"
              type="text"
              placeholder="Ingresa el nombre"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="price" className="font-medium text-lg">
              Precio en dólares&nbsp;
              <span className="text-sm">(se redondea automáticamente)</span>
            </label>
            <input
              onChange={handlePrice}
              id="price"
              type="number"
              defaultValue={productSelected.price}
              placeholder="Ingresa el precio"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              min={0}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="description" className="font-medium text-lg">
              Descripción
            </label>
            <input
              onChange={handleDescription}
              defaultValue={
                checkDescrip(productSelected.description, true) == "-"
                  ? ""
                  : productSelected.description
              }
              id="description"
              type="text"
              placeholder="Ingresa la descripción"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none resize-none focus:ring-2 focus:ring-primary-500"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <a
              href="https://imagen-a-link.netlify.app"
              target="_blank"
              htmlFor="img"
              className="font-medium text-lg hover:underline w-max"
            >
              Link de la imagen
            </a>
            <input
              onChange={handleImg}
              id="img"
              type="text"
              defaultValue={productSelected.img}
              placeholder="Ingresa el link de la imagen"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            {errors.img && <p className="text-red-500 text-sm">{errors.img}</p>}
          </div>
        </div>
        <div className="flex gap-2 mt-8 justify-end items-center w-full">
          <button
            className="bg-slate-300 duration-100 text-slate-900 text-lg px-4 py-1 rounded-lg hover:bg-gray-200 border-2"
            onClick={() => {
              setProductSelected(INITIAL_PROD);
              setShowEditModal(false);
            }}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-500 duration-75 text-white px-8 py-1 text-lg rounded-lg border-2 border-blue-300"
            onClick={handleSubmit}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalEditAdmin;

ModalEditAdmin.propTypes = {
  setShowEditModal: propTypes.func,
  productSelected: propTypes.object,
  setProductSelected: propTypes.func,
  products: propTypes.array,
  setProducts: propTypes.func,
};
