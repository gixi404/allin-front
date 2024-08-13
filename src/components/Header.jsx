function Header() {
  return (
    <header className="bg-slate-500 w-full h-20 flex justify-between items-center px-6">
      <img src="https://via.placeholder.com/50" alt="logo" />
      <nav className="flex justify-center items-center gap-x-8">
        <p>Productos</p>
        <p>Servicos</p>
        <p>Contacto</p>
      </nav>
    </header>
  );
}

export default Header;
