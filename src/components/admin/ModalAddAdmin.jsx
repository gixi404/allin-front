import propTypes from "prop-types";
import { useState } from "react";
import { addProduct } from "../../database/supabase";
import { len } from "../../utils/helpers";
import { toast } from "react-hot-toast";

function ModalAddAdmin({
  setShowAddModal,
  newProduct,
  setNewProduct,
  setProducts,
  products,
}) {
  const [errors, setErrors] = useState({});

  const regexp =
    /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/;

  function validateFields() {
    const newErrors = {};

    if (!newProduct.name || len(newProduct.name) == 0) {
      newErrors.name = "El nombre es obligatorio.";
    } else if (len(newProduct.name) > 129) {
      newErrors.name = "El nombre no debe exceder 129 caracteres.";
    }

    if (newProduct.description && newProduct.description.length > 299) {
      newErrors.description = "La descripción no debe exceder 299 caracteres.";
    }

    if (!newProduct.price || newProduct.price <= 0) {
      newErrors.price = "El precio no puede ser 0.";
    }

    if (!newProduct.img || !regexp.test(newProduct.img)) {
      newErrors.img = "Link inválido.";
    }

    setErrors(newErrors);

    if (len(Object.keys(newErrors)) > 0) {
      const time = setTimeout(() => setErrors({}), 3000);
      return clearTimeout(time);
    }

    return len(Object.keys(newErrors)) == 0;
  }

  function handleName(e) {
    const name = String(e.target.value).trim();
    setNewProduct({ ...newProduct, name });
  }

  function handleDescription(e) {
    const description = String(e.target.value).trim();
    setNewProduct({ ...newProduct, description });
  }

  function handlePrice(e) {
    const price = Number(e.target.value);
    setNewProduct({ ...newProduct, price });
  }

  function handleImg(e) {
    const img = String(e.target.value).trim();
    setNewProduct({ ...newProduct, img });
  }

  function handleSubmit() {
    if (!validateFields()) return;
    setShowAddModal(false);
    setProducts([...products, newProduct]);
    toast.success("Producto agregado");
    addProduct(newProduct);
    // .then(() => location.reload());
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
              Precio en dólares
            </label>
            <input
              onChange={handlePrice}
              id="price"
              type="number"
              defaultValue={0}
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
              placeholder="Ingresa el link de la imagen"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            {errors.img && <p className="text-red-500 text-sm">{errors.img}</p>}
          </div>
        </div>
        <div className="flex gap-2 mt-8 justify-end items-center w-full">
          <button
            className="bg-slate-300 duration-100 text-slate-900 text-lg px-4 py-1 rounded-lg hover:bg-gray-200 border-2"
            onClick={() => setShowAddModal(false)}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="bg-green-600 hover:bg-green-500 duration-75 text-white px-8 py-1 text-lg rounded-lg border-2 border-green-300"
            onClick={handleSubmit}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAddAdmin;

ModalAddAdmin.propTypes = {
  setShowAddModal: propTypes.func,
  newProduct: propTypes.object,
  setNewProduct: propTypes.func,
  products: propTypes.array,
  setProducts: propTypes.func,
};
