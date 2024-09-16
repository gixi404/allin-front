import { useEffect, useState } from "react";
import AdminPanel from "../components/admin/AdminPanel.jsx";
import LoginAdmin from "../components/admin/LoginAdmin";
import NoAdmin from "../components/admin/NoAdmin.jsx";
import supabase from "../database/supabase.js";
import { UIDS } from "../utils/consts.js";

function Admin() {
  const { auth } = supabase,
    [session, setSession] = useState(null),
    isAdmin = UIDS.includes(session?.user?.id);

  useEffect(() => {
    auth.getSession().then(({ data: { session } }) => setSession(session));

    const {
      data: { subscription },
    } = auth.onAuthStateChange((_, session) => setSession(session));

    return () => subscription.unsubscribe();
  }, []);

  if (!session) return <LoginAdmin />;
  if (!isAdmin) return <NoAdmin />;
  if (isAdmin) return <AdminPanel />;
}

export default Admin;
