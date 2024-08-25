import { Preference } from "mercadopago";

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
        pending: "",
      },
      auto_return: "approved",
    };

    const resPreference = await Preference.create(preference);
    console.log(resPreference);
    res.status(200).json(resPreference);
  } catch (err) {
    res.status(500).json(`catch 'createOrder' ${err.message}`);
  }
}

export { createOrder };
