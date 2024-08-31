import { useSessionStorage } from "@uidotdev/usehooks";
import {
  PlusSquare as AddIcon,
  ArrowBigLeft as BackIcon,
  Search as SearchIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Loader from "../components/Loader";
import NoMatches from "../components/NoMatches";
import LoginAdmin from "../components/admin/LoginAdmin";
import ModalAddAdmin from "../components/admin/ModalAddAdmin";
import ModalDeleteAdmin from "../components/admin/ModalDeleteAdmin";
import ModalEditAdmin from "../components/admin/ModalEditAdmin";
import ProductAdmin from "../components/admin/ProductAdmin";
import { getProducts } from "../database/supabase";
import useDolar from "../hooks/useDolar";
import { INITIAL_PROD } from "../utils/consts";
import { len, plainStr } from "../utils/helpers";

function Admin() {
  const { dolar } = useDolar(),
    [products, setProducts] = useState([]),
    [isLogged] = useSessionStorage("is-logged", false),
    [isLoading, setIsLoading] = useState(true),
    [showAddModal, setShowAddModal] = useState(false),
    [showDeleteModal, setShowDeleteModal] = useState(false),
    [showEditModal, setShowEditModal] = useState(false),
    [val, setVal] = useState(""),
    [productSelected, setProductSelected] = useState(INITIAL_PROD),
    [newProduct, setNewProduct] = useState(INITIAL_PROD),
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

  if (!isLogged) return <LoginAdmin />;

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen w-[100vw] px-6 lg:px-0 lg:w-full max-w-[700px] gap-y-20 justify-start items-center pt-10">
      {showAddModal && (
        <ModalAddAdmin
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          setShowAddModal={setShowAddModal}
          setProducts={setProducts}
          products={products}
        />
      )}

      {showEditModal && (
        <ModalEditAdmin
          products={products}
          setProducts={setProducts}
          productSelected={productSelected}
          setProductSelected={setProductSelected}
          setShowEditModal={setShowEditModal}
        />
      )}

      {showDeleteModal && (
        <ModalDeleteAdmin
          productSelected={productSelected}
          setProductSelected={setProductSelected}
          setShowDeleteModal={setShowDeleteModal}
          setProducts={setProducts}
          products={products}
        />
      )}

      <div className="w-full flex justify-between items-end text-slate-900">
        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 duration-100 px-4 py-1 text-slate-100 border-2 border-red-300 text-lg rounded-lg font-semibold flex justify-center items-center gap-x-2"
        >
          <BackIcon size={22} color="#fff" />
          Salir
        </Link>
        <p className="text-3xl font-bold tracking-tight">Panel de productos</p>
      </div>

      <main className="w-full flex-1 pb-10 lg:min-w-[700px] max-w-[700px] justify-start items-center">
        <div className="flex justify-between items-end mb-6">
          <div className="relative">
            <SearchIcon
              color="#fff"
              size={20}
              className="absolute top-2.5 left-3"
            />
            <input
              onChange={e => setVal(e.target.value)}
              autoFocus
              type="search"
              placeholder="Busca un producto..."
              className="bg-slate-700 h-11 rounded-lg text-lg pl-10 pr-2 placeholder:text-slate-200 w-[300px] outline-0 placeholder:select-none text-slate-100 border-2 border-slate-500"
            />
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-slate-700 hover:bg-slate-600 duration-100 border-2 border-slate-500 text-slate-50 text-lg px-4 h-11 rounded-md hover:bg-primary-500 flex justify-center items-center gap-x-3"
          >
            <AddIcon color="#fff" size={22} />
            <p>Añadir producto</p>
          </button>
        </div>
        <div>
          {len(filteredProducts) > 0 ? (
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 w-full">
                  <th className="py-2 w-1/4">Nombre</th>
                  <th className="py-2 w-1/4">Descripción</th>
                  <th className="py-2 w-1/4">Precio en dólares</th>
                  <th className="py-2 w-1/4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(p => (
                  <ProductAdmin
                    key={p.id + "dsa"}
                    {...p}
                    setShowDeleteModal={setShowDeleteModal}
                    setProductSelected={setProductSelected}
                    setShowEditModal={setShowEditModal}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <NoMatches />
          )}
        </div>
      </main>
      <footer className="z-50 text-lg font-semibold rounded-md lowercase bg-slate-700 px-4 text-slate-100 fixed bottom-1 right-1 py-2 text-center border border-green-300">
        Cotización del dólar:&nbsp;&nbsp;
        <span className="text-green-200 font-bold tracking-wide">${dolar}</span>
      </footer>
    </div>
  );
}

export default Admin;
