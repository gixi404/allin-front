import propTypes from "prop-types";
// import { twMerge } from "tailwind-merge";
// import { len } from "../../utils/helpers";

function ModalAddProductAdmin({ setShowAddModal, newProduct, setNewProduct }) {
  // const regexp =
  //   /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/;
  // const disabled =
  //   len(newProduct.name) == 0 ||
  //   len(newProduct.name) > 129 ||
  //   len(newProduct.description) > 299 ||
  //   len(newProduct.img) == 0 ||
  //   !regexp.test(newProduct.img);
  // || newProduct.price == 0;

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

  return (
    <div className="fixed inset-0 pb-20 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Añadir un nuevo producto</h2>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="font-medium">
              Nombre del producto
            </label>
            <input
              onChange={handleName}
              id="name"
              type="text"
              placeholder="Ingresa el nombre"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="description" className="font-medium">
              Descripción
            </label>
            <textarea
              onChange={handleDescription}
              id="description"
              placeholder="Ingresa la descripción"
              className="border h-20 border-gray-300 px-4 py-2 rounded-md focus:outline-none resize-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="price" className="font-medium">
              Precio (expresarlo en dolares)
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
          </div>
          <div className="grid gap-2">
            <label htmlFor="img" className="font-medium">
              Link de la imagen
            </label>
            <input
              onChange={handleImg}
              id="img"
              type="text"
              placeholder="Ingresa el link de la imagen"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <a
              href="https://imagen-a-link.netlify.app"
              target="_blank"
              className="lowecase underline text-slate-700 hover:text-black text-sm"
            >
              genera el link de la imagen aquí
            </a>
          </div>
        </div>
        <div className="flex gap-2 mt-8 justify-end items-center">
          <button
            className="bg-slate-300 duration-100 text-slate-900 text-lg px-4 py-1 rounded-lg hover:bg-gray-200"
            onClick={() => setShowAddModal(false)}
          >
            Cancelar
          </button>
          <button
            className="bg-green-600 hover:bg-green-400 duration-100 text-white px-8 py-1 text-lg rounded-lg "
            onClick={() => {
              setShowAddModal(false);
              console.log(newProduct);
            }}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAddProductAdmin;

ModalAddProductAdmin.propTypes = {
  setShowAddModal: propTypes.func,
  newProduct: propTypes.object,
  setNewProduct: propTypes.func,
};
