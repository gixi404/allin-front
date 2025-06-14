const TABLE = "products";

const DOLAR_PRICE_URL = "https://dolarapi.com/v1/dolares/oficial";

const DOLAR_STATUS_URL = "https://dolarapi.com/v1/estado";

const ADMIN_PATH = "/030a941e-79c3-4fac-9f8e-72843da6d3df";

const CHECKOUT_URL =
  // "http://localhost:3000/mp_checkout_allin_xyz";
  "https://bc3d90ae-e8d5-4eb5-b659-03fd9b004083.up.railway.app/mp_checkout_allin_xyz";

const PURCHASES_ENABLED = true;

const INITIAL_PROD = { name: "", description: "", price: 0, img: "" };

const WHATSAPP_NUM = "+54 261 498 8748";

const UIDS = [
  "c9235c09-1bdd-468a-9122-45e96e5595e1",
  "ab6492c9-3200-46e3-b57e-ae2e0ad9ced5",
  "38cec698-a37c-47a2-8738-b2a942859e08",
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
  WHATSAPP_NUM,
};
