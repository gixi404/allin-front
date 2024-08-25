import { DOLAR_PRICE_URL, DOLAR_STATUS_URL } from "./consts";

const normalizeStr = str =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const plainStr = str => normalizeStr(str.toLowerCase().trim());

const len = str => str.length;

function formatPrice(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function msgWhatsApp(to, msg) {
  const url = numberPhone =>
    `https://api.whatsapp.com/send?phone=+${numberPhone}&text=${encodeURI(
      msg
    )}`;

  switch (to) {
    case "allin":
      return url("542614988748");

    case "gio":
      return url("542612520993");

    case "jorge":
      return url("542612759344");

    default:
      return url("542614988748");
  }
}

async function getDolarPrice() {
  try {
    const status = await checkDolarStatus();
    if (!status) return (location.pathname = "/notfound");
    const data = await fetch(DOLAR_PRICE_URL);
    const res = await data.json();
    const price = res.venta + 2;
    return price;
  } catch (err) {
    console.error(`catch 'getDolarPrice' ${err.message}`);
  }
}

async function checkDolarStatus() {
  const data = await fetch(DOLAR_STATUS_URL);
  const { estado } = await data.json();
  return estado == "Disponible";
}

export {
  formatPrice,
  getDolarPrice,
  len,
  msgWhatsApp,
  plainStr,
  checkDolarStatus,
};
