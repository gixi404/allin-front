import { Search as SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import NoMatches from "../components/NoMatches";
import Product from "../components/Product";
import { getProducts } from "../database/supabase";
import { len, plainStr } from "../utils/helpers";

function Products() {
  const [products, setProducts] = useState([]),
    [isLoading, setIsLoading] = useState(true),
    [val, setVal] = useState(""),
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

  return (
    <section className="w-[100vw] lg:w-full flex flex-col justify-start items-start gap-y-20 lg:min-w-[1100px] lg:min-h-[400px]">
      <div className="w-full flex justify-between items-center px-2 flex-col lg:flex-row gap-y-6">
        <h3 className="text-4xl lg:text-5xl text-slate-900 tracking-tight font-semibold w-full text-center lg:text-start">
          Productos
        </h3>
        <div className="relative">
          <SearchIcon
            size={30}
            color="white"
            className="absolute top-2 left-2"
          />
          <input
            onChange={e => setVal(e.target.value)}
            autoFocus
            type="search"
            placeholder="Busca un producto..."
            className="bg-slate-500 h-12 rounded-lg text-xl pl-14 placeholder:text-white w-[320px] outline-0 placeholder:select-none text-white border-2 border-slate-600"
          />
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
    </section>
  );
}

export default Products;
