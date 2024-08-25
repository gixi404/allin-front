import { X as Icon } from "lucide-react";
import { Link } from "wouter";

function Menu({ setMenuIsOpen, top }) {
  return (
    <ul className="w-[100vw] top-0 left-0 border-b-2 border-orange-200 flex flex-col justify-center items-start px-10 fixed bg-orange-100 gap-y-4 py-8 text-xl z-50 font-[500]">
      <Icon
        onClick={() => setMenuIsOpen(false)}
        className="absolute top-3 right-3"
        size={35}
      />
      <Link
        onClick={() => {
          top();
          setMenuIsOpen(false);
        }}
        to="/"
      >
        &gt; Inicio
      </Link>
      <Link
        onClick={() => {
          top();
          setMenuIsOpen(false);
        }}
        to="/products"
      >
        &gt; Productos
      </Link>
      <Link
        onClick={() => {
          top();
          setMenuIsOpen(false);
        }}
        to="/cart"
      >
        &gt; Carrito
      </Link>
      <Link
        onClick={() => {
          top();
          setMenuIsOpen(false);
        }}
        to="/location"
      >
        &gt; Ubicación
      </Link>
      <Link
        onClick={() => {
          top();
          setMenuIsOpen(false);
        }}
        to="/aboutus"
      >
        &gt; Sobre nosotros
      </Link>
    </ul>
  );
}

export default Menu;

Menu.propTypes = {
  setMenuIsOpen: () => {},
  top: () => {},
};
