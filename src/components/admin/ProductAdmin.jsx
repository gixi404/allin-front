import { Trash as DeleteIcon, Pencil as EditIcon } from "lucide-react";
import propTypes from "prop-types";

function ProductAdmin({
  name,
  description,
  price,
  img,
  id,
  setShowDeleteModal,
  setProductSelected,
  setShowEditModal,
}) {
  return (
    <tr className="border-b-2 border-slate-300 bg-gray-100 text-gray-900">
      <td className="px-4 py-2 text-center">{name}</td>
      <td className="px-4 py-2 text-center">
        {description == 300 ? "sin descripción" : description}
      </td>
      <td className="px-4 py-2 text-center">${price}</td>
      <td className="px-4 py-2">
        <div className="flex gap-2 justify-center w-full items-center brightness-95">
          <EditIcon
            size={10}
            color="#fff"
            className="bg-blue-500 hover:bg-blue-600 w-9 h-9 p-2 rounded-lg duration-75 cursor-pointer"
            onClick={() => {
              setProductSelected({ name, description, price, img, id });
              setShowEditModal(true);
            }}
          />
          <DeleteIcon
            size={10}
            color="#fff"
            className="bg-red-500 p-2 w-9 h-9 rounded-lg hover:bg-red-600 duration-75 cursor-pointer"
            onClick={() => {
              setProductSelected({ name, description, price, img, id });
              setShowDeleteModal(true);
            }}
          />
        </div>
      </td>
    </tr>
  );
}

export default ProductAdmin;

ProductAdmin.propTypes = {
  name: propTypes.string,
  description: propTypes.string,
  price: propTypes.number,
  img: propTypes.string,
  id: propTypes.number,
  setShowDeleteModal: propTypes.func,
  setProductSelected: propTypes.func,
  setShowEditModal: propTypes.func,
};
