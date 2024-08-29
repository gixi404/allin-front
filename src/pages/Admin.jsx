import { useEffect, useState } from "react";
import { Link } from "wouter";
import Loader from "../components/Loader";
import NoMatches from "../components/NoMatches";
import ModalAddProductAdmin from "../components/admin/ModalAddProductAdmin";
import ProductAdmin from "../components/admin/ProductAdmin";
import { getProducts } from "../database/supabase";
import useDolar from "../hooks/useDolar";
import { len, plainStr } from "../utils/helpers";

function Admin() {
  const { dolar } = useDolar(),
    [products, setProducts] = useState([]),
    [isLoading, setIsLoading] = useState(true),
    [showAddModal, setShowAddModal] = useState(false),
    [val, setVal] = useState(""),
    [newProduct, setNewProduct] = useState({
      name: "",
      description: "",
      price: 0,
      img: "",
    }),
    filteredProducts =
      val != ""
        ? products.filter(p => plainStr(p.name).includes(plainStr(val)))
        : products;

  useEffect(() => {
    (async function () {
      const myProducts = await getProducts();
      setProducts(myProducts);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col h-screen w-full max-w-[700px] gap-y-20">
      {showAddModal && (
        <ModalAddProductAdmin
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          setShowAddModal={setShowAddModal}
        />
      )}

      <header className="z-50 text-xl font-semibold rounded-lg lowercase bg-slate-700 px-4 text-slate-100 fixed bottom-4 right-4 py-2 text-center">
        Cotización del dólar:&nbsp;&nbsp;
        <span className="text-green-200 font-bold tracking-wide">${dolar}</span>
      </header>

      <div className="w-full flex justify-between items-center text-slate-900">
        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 duration-100 px-6 py-2 text-slate-100 border-2 border-red-300 text-xl rounded-lg font-semibold"
        >
          Salir
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">
          Panel de administración
        </h1>
      </div>

      <main className="w-full flex-1 pb-10 min-w-[700px] max-w-[700px]">
        <div className="flex justify-between items-start mb-6">
          <input
            onChange={e => setVal(e.target.value)}
            disabled
            autoFocus
            type="search"
            placeholder="Busca un producto..."
            className="bg-slate-500 h-12 rounded-lg text-lg px-6 placeholder:text-white w-[300px] outline-0 placeholder:select-none text-white border-2 border-slate-600 opacity-30"
          />
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-slate-700 hover:bg-slate-600 duration-100 border-2 border-slate-500 text-slate-100 text-lg px-6 py-2 rounded-md hover:bg-primary-500"
          >
            Añadir producto
          </button>
        </div>
        <div>
          {len(filteredProducts) > 0 ? (
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 w-full">
                  <th className="py-2 w-1/4">Nombre</th>
                  <th className="py-2 w-1/4">Descripción</th>
                  <th className="py-2 w-1/4">Precio</th>
                  <th className="py-2 w-1/4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(p => (
                  <ProductAdmin key={p.id} {...p} />
                ))}
              </tbody>
            </table>
          ) : (
            <NoMatches />
          )}
        </div>
      </main>
    </div>
  );
}

export default Admin;
