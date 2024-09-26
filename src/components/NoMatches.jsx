function NoMatches() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-8">
      <p className="text-lg lg:text-2xl text-black tracking-tight w-full text-center max-w-[450px] text-pretty">
        El producto no está en el catálogo, pero puede que lo tengamos...
      </p>
      <a
        href=""
        className="bg-green-300 font-semibold px-6 sm:px-8 py-2 rounded-lg text-xl border-2 border-green-400 hover:bg-green-300 duration-100"
      >
        Consultar
      </a>
    </div>
  );
}

export default NoMatches;
