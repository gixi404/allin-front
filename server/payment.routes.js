import { config } from "dotenv";
import { Router } from "express";
import { MercadoPagoConfig, Preference } from "mercadopago";
import process from "process";

config();

const router = Router();

new MercadoPagoConfig({
  access_token: process.env.ACCESS_TOKEN,
});

router.get("/create-order", createOrder);

router.get("/success", (req, res) => {
  res.send("orden creada");
});

router.get("/webhook", (req, res) => {
  res.send("webhook");
});

export default router;

async function createOrder(req, res) {
  try {
    const preference = {
      items: [
        {
          title: "Mouse Genius",
          picture_url: "https://i.imgur.com/5bJqQZw.png",
          currency_id: "ARS",
          description: "Alámbrico con puerto USB",
          quantity: 1,
          unit_price: 320,
        },
      ],
      back_urls: {
        success: "http://localhost:3000/success",
        failure: "http://localhost:3000/failure",
        pending: "http://localhost:3000/pending",
      },
      auto_return: "approved",
    };

    // const pp = new Preference(client)
    // const res = await pp

    // const resPreference = await Preference.create(preference);
    // console.log(resPreference);
    // res.status(200).json(resPreference);
  } catch (err) {
    res.status(500).json(`catch 'createOrder' ${err.message}`);
  }
}
