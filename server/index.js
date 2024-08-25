import cors from "cors";
import express from "express";
import morgan from "morgan";
import paymentRoutes from "./payment.routes.js";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(paymentRoutes);

app.listen(port, () => console.log(`-> escuchando en puerto: ${port}`));
