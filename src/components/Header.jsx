import { useState } from "react";
import { Link } from "wouter";
import CartBtn from "./buttons/CartBtn";
import MenuBtn from "./buttons/MenuBtn";
import Menu from "./Menu";
import logo from "/logo-img.png";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const top = () => scrollTo({ top: 0, behavior: "instant" });

  return (
    <header className="bg-gradient-to-l relative from-slate-200 via-slate-100 to-slate-200 w-full min-h-20 flex justify-between items-center px-4 lg:px-10 text-black lg:rounded-lg border-2 border-slate-400/70 lg:mb-10">
      <Link
        onClick={top}
        to="/"
        className="flex justify-center items-center gap-x-5"
      >
        <img src={logo} width={45} height={45} alt="logo" />
        <h1 className="text-lg lg:text-[26px] font-[500]">
          All <span className="text-orange-600">In</span>
          formática
        </h1>
      </Link>
      <nav className="hidden lg:flex justify-center items-center gap-x-8 text-lg font-[500]">
        <Link
          onClick={top}
          className="hover:underline duration-75"
          to="/products"
        >
          Productos
        </Link>
        <Link
          onClick={top}
          className="hover:underline duration-75"
          to="/location"
        >
          Ubicación
        </Link>
        <Link
          onClick={top}
          className="hover:underline duration-75"
          to="/aboutus"
        >
          Sobre Nosotros
        </Link>
        <Link to="/cart" className="cursor-pointer duration-150 hover:scale-95">
          <CartBtn isHeader />
        </Link>
      </nav>
      <MenuBtn setMenuIsOpen={setMenuIsOpen} />
      {menuIsOpen && <Menu setMenuIsOpen={setMenuIsOpen} top={top} />}
    </header>
  );
}

export default Header;
