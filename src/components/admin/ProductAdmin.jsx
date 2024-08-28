import propTypes from "prop-types";

function ProductAdmin({ name, description, price, id }) {
  return (
    <tr className="border-b bg-gray-100 text-gray-900">
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{description}</td>
      <td className="px-4 py-2">${price.toFixed(2)}</td>
      <td className="px-4 py-2">
        <div className="flex gap-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => console.log(id)}
            // onClick={() => handleEditProduct(id)}
          >
            Editar
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            // onClick={() => handleDeleteProduct(id)}
          >
            Eliminar
          </button>
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
  id: propTypes.number,
};
