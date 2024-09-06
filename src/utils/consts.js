const TABLE = "products";

const DOLAR_PRICE_URL = "https://dolarapi.com/v1/dolares/oficial";

const DOLAR_STATUS_URL = "https://dolarapi.com/v1/estado";

const ADMIN_PATH = "/030a941e-79c3-4fac-9f8e-72843da6d3df";

const CHECKOUT_URL = "http://localhost:3000/mp_checkout_allin_xyz";

const PURCHASES_ENABLED = true;

const INITIAL_PROD = {
  name: "",
  description: "",
  price: 0,
  img: "",
};

const LOCATION =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.1740537298047!2d-68.88135902464447!3d-33.03607917355645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e753e57c6b555%3A0xc1f20edf9b7b6c8f!2sAll%20In%20Inform%C3%A1tica%20by%20MICRO-TECH!5e1!3m2!1ses-419!2sbr!4v1724021132682!5m2!1ses-419!2sbr";

export {
  ADMIN_PATH,
  DOLAR_PRICE_URL,
  DOLAR_STATUS_URL,
  INITIAL_PROD,
  LOCATION,
  TABLE,
  PURCHASES_ENABLED,
  CHECKOUT_URL,
};
