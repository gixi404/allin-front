import {
  Trash as DeleteIcon,
  Pencil as EditIcon,
  EyeIcon,
  EyeOffIcon,
} from "lucide-react";
import propTypes from "prop-types";
import { checkDescrip } from "../../utils/helpers";

function ProductAdmin(props) {
  const {
      id,
      img,
      name,
      price,
      description,
      visible,
      setProductSelected,
      setShowDeleteModal,
      setShowEditModal,
      setShowHiddenModal,
      setShowVisibleModal,
    } = props,
    productProps = { name, description, price, img, id, visible };
  return (
    <tr className="border-b-2 border-slate-300 bg-gray-100 text-gray-900">
      <td className="px-4 py-2 text-center">{name}</td>
      <td className="px-4 py-2 text-center">
        {checkDescrip(description, true)}
      </td>
      <td className="px-4 py-2 text-center">${price}</td>
      <td className="px-4 py-2">
        <div className="flex gap-2 justify-center w-full items-center brightness-95">
          <EditIcon
            size={10}
            color="#fff"
            className="bg-blue-500 hover:bg-blue-600 w-9 h-9 p-2 rounded-lg duration-75 cursor-pointer"
            onClick={() => {
              setProductSelected(productProps);
              setShowEditModal(true);
            }}
          />
          {visible ? (
            <EyeIcon
              size={18}
              color="#fff"
              className="bg-slate-500 p-2 w-9 h-9 rounded-lg hover:bg-slate-600 duration-75 cursor-pointer"
              onClick={() => {
                setProductSelected(productProps);
                setShowVisibleModal(true);
              }}
            />
          ) : (
            <EyeOffIcon
              size={18}
              color="#fff"
              className="bg-slate-500 p-2 w-9 h-9 rounded-lg hover:bg-slate-600 duration-75 cursor-pointer"
              onClick={() => {
                setProductSelected(productProps);
                setShowHiddenModal(true);
              }}
            />
          )}
          <DeleteIcon
            size={10}
            color="#fff"
            className="bg-red-500 p-2 w-9 h-9 rounded-lg hover:bg-red-600 duration-75 cursor-pointer"
            onClick={() => {
              setProductSelected(productProps);
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
  setShowHiddenModal: propTypes.func,
  setShowVisibleModal: propTypes.func,
  visible: propTypes.bool,
};
