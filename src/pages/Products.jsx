import { Search as SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import NoMatches from "../components/NoMatches";
import Product from "../components/Product";
import Section from "../components/Section";
import { getProducts } from "../database/crud.supabase.js";
import { len, plainStr } from "../utils/helpers";

function Products() {
  const [products, setProducts] = useState([]),
    [isLoading, setIsLoading] = useState(true),
    [val, setVal] = useState(""),
    onlyVisibles = products.filter(p => p.visible),
    filteredProducts =
      val != ""
        ? onlyVisibles.filter(p => plainStr(p.name).includes(plainStr(val)))
        : onlyVisibles;

  useEffect(() => {
    (async function () {
      const myProducts = await getProducts();
      setProducts(myProducts);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Section sectionClass="flex-col !justify-start gap-y-20">
      <div className="w-full flex justify-between items-center px-2 flex-col lg:flex-row gap-y-6">
        <p className="text-4xl lg:text-5xl text-slate-900 tracking-tight font-semibold w-full text-center lg:text-start">
          Productos
        </p>
        <div className="relative w-[280px] sm:w-[400px] mx-auto ">
          <input
            onChange={e => setVal(e.target.value)}
            autoFocus
            type="search"
            placeholder="Busca productos..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder:text-xl placeholder:text-gray-500 pb-2.5"
          />
          <button
            type="button"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <SearchIcon color="rgb(107 114 128)" className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </button>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className="flex justify-around w-full items-center gap-10 flex-wrap flex-col lg:flex-row">
          {len(filteredProducts) > 0 ? (
            filteredProducts.map(p => <Product key={p.id} {...p} />)
          ) : (
            <NoMatches />
          )}
        </ul>
      )}
    </Section>
  );
}

export default Products;
