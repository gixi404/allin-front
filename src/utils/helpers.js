import { DOLAR_PRICE_URL, DOLAR_STATUS_URL, WHATSAPP_NUM } from "./consts";

const normalizeStr = str =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const plainStr = str => normalizeStr(str.toLowerCase().trim());

const len = str => str.length;

const checkDescrip = (str, admin = false) =>
  str == 300 || str == "" ? (admin ? "-" : "") : str;

const roundPrice = price => Math.ceil(price / 500) * 500;

function formatPrice(price) {
  return new Intl.NumberFormat("es-AR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

function msgWhatsApp(message) {
  const msg = encodeURI(message);
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUM}&text=${msg}`;
  return url;
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
  checkDescrip,
  checkDolarStatus,
  formatPrice,
  getDolarPrice,
  len,
  msgWhatsApp,
  plainStr,
  roundPrice,
};
