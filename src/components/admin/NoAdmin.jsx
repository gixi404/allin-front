import supabase from "../../database/supabase";

function NoAdmin() {
  return (
    <div className="flex flex-col justify-start pt-20 items-center min-h-screen gap-y-16">
      <p className="text-3xl lg:text-5xl text-red-600 uppercase font-semibold w-full text-center">
        acceso no autorizado
      </p>
      <button
        type="button"
        onClick={() => supabase.auth.signOut()}
        className="bg-red-600 px-8 py-2 text-2xl capitalize text-white rounded-lg border-2 border-red-400 hover:bg-red-500 duration-100"
      >
        cerrar sesión
      </button>
    </div>
  );
}

export default NoAdmin;
