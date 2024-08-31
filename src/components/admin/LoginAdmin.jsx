import { useSessionStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { toast } from "react-hot-toast";

function LoginAdmin() {
  const [username, setUsername] = useState(""),
    [, setIsLogged] = useSessionStorage("is-logged", false),
    [password, setPassword] = useState(""),
    isAdmin = username.trim() == "manteca" && password.trim() == "lagarto@43";

  function handleSubmit(e) {
    e.preventDefault();

    if (isAdmin) {
      setIsLogged(true);
      toast.success("Qué mirás vigilante?");
    } else {
      setUsername("");
      setPassword("");
      toast.error("Credenciales incorrectas");
    }
  }

  return (
    <div className="w-full min-h-screen absolute bg-slate-100 top-0 left-0 overflow-hidden flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col w-full max-w-3xl pt-20 gap-y-10 text-black"
      >
        <label htmlFor="user" className="w-full max-w-[230px]">
          <p className="text-2xl mb-2 w-full text-start tracking-tight">
            Usuario
          </p>
          <input
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
            id="user"
            autoFocus
            placeholder="Ingrese el usuario"
            type="text"
            className="text-lg w-full py-2 px-3 outline-0 bg-slate-200 rounded-md border border-slate-600 placeholder:text-slate-600"
          />
        </label>
        <label htmlFor="pass" className="w-full max-w-[230px]">
          <p className="text-2xl mb-2 w-full text-start tracking-tight">
            Contraseña
          </p>
          <input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            id="pass"
            placeholder="Ingrese la contraseña"
            type="password"
            className="text-lg w-full py-2 px-3 outline-0 bg-slate-200 rounded-md border border-slate-600 placeholder:text-slate-600"
          />
        </label>
        <button
          type="submit"
          className="py-2 bg-slate-700 text-slate-100 tracking-wide w-full max-w-[230px] text-xl rounded-md font-semibold border-2 border-slate-400 duration-75 hover:bg-slate-600"
        >
          Acceder
        </button>
      </form>
    </div>
  );
}

export default LoginAdmin;
