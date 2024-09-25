const TABLE = "products";

const DOLAR_PRICE_URL = "https://dolarapi.com/v1/dolares/oficial";

const DOLAR_STATUS_URL = "https://dolarapi.com/v1/estado";

const ADMIN_PATH = "/030a941e-79c3-4fac-9f8e-72843da6d3df";

const CHECKOUT_URL =
  // "http://localhost:3000/mp_checkout_allin_xyz";
  "https://bc3d90ae-e8d5-4eb5-b659-03fd9b004083.up.railway.app/mp_checkout_allin_xyz";

const PURCHASES_ENABLED = true;

const INITIAL_PROD = { name: "", description: "", price: 0, img: "" };

const UIDS = [
  // Recordá agregar los uids acá y en las reglas de supabase.
  "c9235c09-1bdd-468a-9122-45e96e5595e1",
];

export {
  ADMIN_PATH,
  CHECKOUT_URL,
  DOLAR_PRICE_URL,
  DOLAR_STATUS_URL,
  INITIAL_PROD,
  PURCHASES_ENABLED,
  TABLE,
  UIDS,
};
